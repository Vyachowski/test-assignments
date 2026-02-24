import { makeCounter } from "@/exercises/01-closures";

describe('makeCounter', () => {
  it('начинает с 0 по умолчанию', () => {
    const c = makeCounter()
    expect(c.getValue()).toBe(0)
  })

  it('начинает с заданного значения', () => {
    const c = makeCounter(10)
    expect(c.getValue()).toBe(10)
  })

  it('increment увеличивает на 1', () => {
    const c = makeCounter()
    c.increment()
    c.increment()
    expect(c.getValue()).toBe(2)
  })

  it('decrement уменьшает на 1', () => {
    const c = makeCounter(5)
    c.decrement()
    expect(c.getValue()).toBe(4)
  })

  it('reset возвращает к начальному значению', () => {
    const c = makeCounter(3)
    c.increment()
    c.increment()
    c.reset()
    expect(c.getValue()).toBe(3)
  })

  it('два счётчика независимы друг от друга', () => {
    const a = makeCounter()
    const b = makeCounter(100)
    a.increment()
    expect(a.getValue()).toBe(1)
    expect(b.getValue()).toBe(100)
  })
})