// Упражнение: типизированная утилита pickРеализуй функцию pick которая принимает объект и массив ключей, и возвращает новый объект только с указанными полями.
// Требования:
// Функция должна быть обобщённой (generic)
// TypeScript должен автоматически выводить тип возвращаемого объекта на основе переданных ключей
// Передача несуществующего ключа должна вызывать ошибку компиляции
// Нельзя использовать any

// Option 1
export function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const newObj = {} as Pick<T, K>

  for (const key of keys) {
    newObj[key] = obj[key]
  }

  return newObj
}

// Option 2
export function pickAlt<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return Object.fromEntries(keys.map(key => [key, obj[key]])) as Pick<T, K>
}

