let letterSearch = ["хлеб", "мед", "банан", "яблоко", "Азиза", "цветок", "машина"];

let wordsWithN = letterSearch.filter(word => word.toLowerCase().includes('н'));

let wordsWithoutN = letterSearch.filter(word => !word.toLowerCase().includes('н'));

console.log("Слова с буквой 'н':", wordsWithN);
console.log("Слова без буквы 'н':", wordsWithoutN);