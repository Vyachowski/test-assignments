/*
────────────────────────────────────────────
  Упражнение 01 — Замыкания и счётчик
────────────────────────────────────────────

  Задача:
  Реализовать функцию makeCounter.

  Требования:
  • Функция принимает стартовое значение.
  • По умолчанию стартовое значение = 0.
  • Значение должно храниться в замыкании.
  • Снаружи доступ только через методы.

  Функция должна возвращать объект со следующими методами:

    - increment()  → увеличивает значение на 1
    - decrement()  → уменьшает значение на 1
    - reset()      → сбрасывает к начальному значению
    - getValue()   → возвращает текущее значение

  Пример использования:

    const counter = makeCounter(5)

    counter.increment()   // 6
    counter.increment()   // 7
    counter.decrement()   // 6
    counter.getValue()    // 6
    counter.reset()       // 5
*/

export interface Counter {
  increment: () => void
  decrement: () => void
  reset: () => void
  getValue: () => number
}

export function makeCounter(initial: number = 0): Counter {
  let counter = initial;

  return ({
    increment: () => { counter += 1 },
    decrement: () => { counter -= 1 },
    reset: () => counter = initial,
    getValue: () => counter,
  })
}
