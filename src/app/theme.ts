import { ref } from 'vue'

/**
 * Credit to [@hooray](https://github.com/hooray)
 * @see https://github.com/vuejs/vitepress/pull/2347
 */
const themeKey = 'theme'
const isAppearanceTransition =
  // @ts-ignore
  document.startViewTransition &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

const initialThemeValue = localStorage.getItem(themeKey)
const isDark = ref(initialThemeValue !== 'dark')

if (!isDark.value) {
  document.documentElement.classList.add('dark')
}

export function toggleTheme(event?: MouseEvent): void {
  // fallback
  if (!isAppearanceTransition || !event) {
    isDark.value = !isDark.value
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  )

  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(() => {
    document.documentElement.classList[isDark.value ? 'add' : 'remove']('dark')
    isDark.value = !isDark.value
    localStorage.setItem(themeKey, isDark.value ? 'light' : 'dark')
  })

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-in',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}
