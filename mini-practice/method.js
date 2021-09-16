const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johanne", last: "Keppler", year: 1571, passed: 1630 },
  { first: "Nicolous", last: "Corpenicus", year: 1473, passed:  1543},
  { first: "Max", last: "Planck", year: 1858, passed: 1947},
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 
'Beecher, Henry', 'Beethoven, Lodwing', 'Begin, Menachem', 'Belloc, Hilaire',
'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas',
'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Bercle, Milton']

// Array.prototype.filter()
// 1500년 이전에 태어난 발명가
console.log(inventors.filter(x => x.year < 1500));
console.log("");
// Array.prototype.map()
// 발명자 firstname + lastname 배열로 출력
console.log(inventors.map(x => `${x.first} ${x.last}`));
console.log("");
// Array.prototype.sort()
// 발명자 일찍 태어난 순으로 정렬
console.log(inventors.sort((firstMan, secondMan) => firstMan.year > secondMan.year? 1 : -1));
console.log("");
// Array.prototype.reduce()
// 발명자 수명 합계
console.log(inventors.reduce((total, man) => {return total + (man.passed - man.year)},0));
console.log("");