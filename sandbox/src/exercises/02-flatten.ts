// Упражнение 02 — Flatten

// Задача: написать функцию которая разворачивает вложенный массив
// на произвольную глубину, без использования Array.prototype.flat

// Пример:
// flatten([1, [2, [3, [4]]]]) → [1, 2, 3, 4]
// flatten([1, [2, 3], [4, [5, 6]]]) → [1, 2, 3, 4, 5, 6]

type NestedArray<T> = (T | NestedArray<T>)[]

export function flatten<T>(arr: NestedArray<T>): T[] {
  let result: T[] = []

  if (!Array.isArray(arr)) {
    return [arr]
  }

  for (const elem of arr) {
    const res = flatten(elem as NestedArray<T>)

    result.push(...res)
  }

  return result
}
