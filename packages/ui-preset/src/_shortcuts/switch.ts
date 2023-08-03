import { parseColor } from '@unocss/preset-mini/utils'
import type { Theme } from '@unocss/preset-uno'
import type { RuleContext } from '@unocss/core'

type SwitchPrefix = 'switch'

export const staticSwitch: Record<`${SwitchPrefix}-${string}` | SwitchPrefix, string> = {
  // TODO: replace checked/unchecked with on/off
  // TODO: replace slider with thumb
  // TODO: replace slider-bg with track
  // TODO: replace slider-bg-unchecked with bg-off
  // TODO: replace slider-bg-normal with bg-on-normal
  // base
  'switch': 'switch-sm bg-transparent relative inline-flex items-center justify-center flex-shrink-0 cursor-pointer rounded-full',
  'switch-disabled': 'opacity-75 cursor-not-allowed',
  'switch-focus': 'focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-base focus:ring-brand',

  // base size variants
  'switch-normal': 'h-1.5em w-2.75em',
  'switch-short': 'h-1.25em w-2.50em',

  // slider (circle)
  'switch-slider': 'flex items-center justify-center h-1.25em w-1.25em absolute border-base bg-base border pointer-events-none inline-block transform rounded-full shadow transition duration-200 ease-in-out',
  'switch-slider-checked': 'translate-x-1.25em',
  'switch-slider-unchecked': 'translate-x-0',

  // slider bg
  'switch-slider-bg': 'pointer-events-none absolute mx-auto rounded-full transition-colors duration-200 ease-in-out',
  'switch-slider-bg-checked': 'bg-brand',
  'switch-slider-bg-unchecked': 'bg-$c-gray-200',

  // slider bg size variants
  'switch-slider-bg-normal': 'h-1.5em w-2.75em',
  'switch-slider-bg-short': 'h-1em w-2.25em',

  // icons
  'switch-icon': 'text-.8em',
  'switch-icon-off': 'text-muted',
  'switch-icon-on': 'text-brand',
}

export const dynamicSwitch = [
  [/^switch-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if (color?.cssColor?.type === 'rgb' && color.cssColor.components)
      return `n-${body}-600 dark:n-${body}-500`
  }],
]

export const _switch = [
  ...dynamicSwitch,
  staticSwitch,
]
