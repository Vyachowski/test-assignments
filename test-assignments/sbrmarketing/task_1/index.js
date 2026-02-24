import { encoded, translations } from './data.js'

console.log("Let's rock")
console.log(encoded, translations)

const uniqueIdSet = new Set();

// Функция с побочными эффектами просто чтобы не разделять на две
const generateDecodedList = (encodedList, dictionary) => {
  const excludedKeys = new Set(['groupId', 'service', 'formatSize', 'ca']);

  return encodedList.map((item) => {
    const newItem = {};
    for (const [key, currentKey] of Object.entries(item)) {
      if (!excludedKeys.has(key)) {
        const currentNumberKey = Number(currentKey);
        const decodedKey = dictionary[currentNumberKey];
        newItem[key] = currentKey;
        if (decodedKey || decodedKey === '') {
          newItem[key] = decodedKey;
          if (!uniqueIdSet.has(currentNumberKey)) uniqueIdSet.add(currentNumberKey);
        }
      }
    }
    return newItem;
  })
}

const decoded = generateDecodedList(encoded, translations);

console.log(decoded);
console.log(uniqueIdSet);
