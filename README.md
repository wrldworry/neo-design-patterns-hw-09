# Домашнє завдання 9 — Шаблонний метод + Ітератори

## Запуск експорту
```
npx ts-node src/main.ts
```

## Запуск обходу даних
```
npx ts-node src/main-iterate.ts
```

## Шаблонний метод
Алгоритм експорту інкапсульовано в `DataExporter`, а підкласи реалізують `render()` і `save()`:
- `CsvExporter`
- `JsonExporter`
- `XmlExporter`

## Ітератори
Кожен формат має свій ітератор:
- `CsvIterator`
- `JsonIterator`
- `XmlIterator`

Вони сумісні з `for...of` і не мають умовних переходів по формату.
