export function polar(a: [number, number]): [number, number] { return [Math.sqrt(a[0] ** 2 + a[1] ** 2), Math.atan2(a[1], a[0])] }
