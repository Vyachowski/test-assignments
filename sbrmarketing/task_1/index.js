import { encoded, translations } from './data.js'

console.log("Let's rock")
console.log(encoded, translations)

const uniqueIdList = [];

// Функция с побочными эффектами просто чтобы не разделять на две
const generateDecodedList = (encodedList, dictionary) => {
  const excludedKeys = ['groupId', 'service', 'formatSize', 'ca'];

  return encodedList.map((item) => {
    const newItem = {};
    for (const key in item) {
      if (!excludedKeys.includes(key)) {
        const currentKey = item[key];
        const currentNumberKey = Number(currentKey);
        const decodedKey = dictionary[currentNumberKey];
        newItem[key] = currentKey;
        if (decodedKey || decodedKey === '') {
          newItem[key] = decodedKey;
          if (!uniqueIdList.includes(currentNumberKey)) uniqueIdList.push(currentNumberKey);
        }
      }
    }
    return newItem;
  })
}

const decoded = generateDecodedList(encoded, translations);

console.log(decoded);
console.log(uniqueIdList)
