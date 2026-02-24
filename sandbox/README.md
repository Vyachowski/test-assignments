# TS Sandbox

Площадка для упражнений по JS/TS в рамках подготовки к собесам.

## Установка

```bash
npm install
```

## Команды

```bash
npm test          # Vitest в watch-режиме
npm run test:run  # Прогнать все тесты один раз
npm run play      # Запустить src/playground.ts
```

## Структура

```
src/
  exercises/    # Упражнения по JS/TS концептам
  playground.ts # Быстрые эксперименты

tests/
  exercises/    # Тесты к упражнениям
```

## Как добавлять новые задачи

1. Создай файл в `src/exercises/`
2. Создай соответствующий `.test.ts` в `tests/`
3. Реализуй функцию пока все тесты не станут зелёными

## Среда исполнения

По умолчанию — Node.js через tsx/vitest.

Если нужно эмулировать браузерное окружение (DOM, window и т.д.),
добавь в начало тестового файла:

```ts
// @vitest-environment jsdom
```