// Упражнение 03 — Delay

// Задача: написать функцию, которая принимае первым параметром миллисекуды,
// Вторым параметром идет значение, которое нужно вернуть после задержки

export async function delay<T>(ms: number, value: T) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms))
}