export function rgbToHex(r: number, g: number, b: number): string {
  return `#${[r, g, b].map((x) => {
    const hex = x.toString(16)
    return hex.length === 1 ? `0${hex}` : hex
  }).join('')}`
}

export function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  if (!result)
    throw new Error(`Invalid hex color: ${hex}`)

  return [
    Number.parseInt(result[1], 16),
    Number.parseInt(result[2], 16),
    Number.parseInt(result[3], 16),
  ]
}

export function randomId(prefix: string): string {
  return `nv-${prefix}-${Math.random().toString(36).slice(2)}`
}

export function omitProps<T extends Record<string, any>>(obj: T, propsToOmit: Array<keyof T>): Partial<T> {
  const newObj = { ...obj }
  propsToOmit.forEach(prop => delete newObj[prop])
  return newObj
}

export function pickProps<T extends Record<string, any>>(obj: T, propsToPick: Array<keyof T>): Partial<T> {
  const newObj: Partial<T> = {}
  propsToPick.forEach(prop => newObj[prop] = obj[prop])
  return newObj
}

/**
  * We want to get the first non-undefined value,
  * useful for arguments with multiple sources (local, global, default),
  * this is basically an alternative for `local ?? global ?? default`.
  * I prefer this approach because it's more readable and easier to extend.
  *
  * @param args - values to check
  * @example
  * ```ts
  * const value = getPriority(specificValue, globalValue, defaultValue)
  * ```
  * @returns first non-undefined value
*/
export function getPriority<T>(...args: (T | undefined)[]): T | undefined {
  for (const arg of args) {
    if (arg !== undefined)
      return arg
  }

  return undefined
}
