import { flatten } from "@/exercises/02-flatten";

describe('flatten', () => {
  it('плоский массив остаётся плоским', () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3])
  })

  it('один уровень вложенности', () => {
    expect(flatten([1, [2, 3]])).toEqual([1, 2, 3])
  })

  it('глубокая вложенность', () => {
    expect(flatten([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4])
  })

  it('смешанная вложенность', () => {
    expect(flatten([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('пустой массив', () => {
    expect(flatten([])).toEqual([])
  })

  it('массив с пустыми массивами внутри', () => {
    expect(flatten([1, [], [2, []]])).toEqual([1, 2])
  })
})