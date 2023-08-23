//1
function logItems(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
      const element = array[i]

      const elementNumber = i + 1;
      console.log(elementNumber);
      console.log(`${elementNumber} => ${element}`);
    }
  }

logItems(['Mango', 'Poly', 'Ajax']);

//2
let price = 0;
function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ');
    price = words.length * pricePerWord;
    return price;
}
  

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40));
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20));
//3

function findLongestWord(string) {
    const longestWords = string.split(' ');
    let longestWord = '';
  
for (const elemWord of longestWords) {
    if (elemWord.length > longestWord.length) {
      longestWord = elemWord;
    }
}
 return longestWord;
}

console.log(findLongestWord('May the force be with you'));
//4

function formatString(string) {
    if (string.length <= 40) {
      return string;
    } else {
      return string.slice(0, 40) + '...';
    }
}
console.log(formatString('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'));

  
//5
function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
  
}

//6


//7
  