const testObj = {
  one: 1,
  two: 2,
  three: 3
}

type MappedType<T extends Record<string, number>> = {
  [K in keyof T as `get${Capitalize<K & string>}`]: boolean
}

// type MappedType<T> = {
//   [K in keyof T as K extends string ? `get${Capitalize<K>}` : never]: boolean
// }

const mappedTypeObj: MappedType<typeof testObj> = {
  getOne: true,
  getTwo: false,
  getThree: false
}

