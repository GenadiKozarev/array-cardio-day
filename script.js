const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];
const people = [
    'Bernhard, Sandra',
    'Bethea, Erin',
    'Becker, Carl',
    'Bentsen, Lloyd',
    'Beckett, Samuel',
    'Blake, William',
    'Berger, Ric',
    'Beddoes, Mick',
    'Beethoven, Ludwig',
    'Belloc, Hilaire',
    'Begin, Menachem',
    'Bellow, Saul',
    'Benchley, Robert',
    'Blair, Robert',
    'Benenson, Peter',
    'Benjamin, Walter',
    'Berlin, Irving',
    'Benn, Tony',
    'Benson, Leana',
    'Bent, Silas',
    'Berle, Milton',
    'Berry, Halle',
    'Biko, Steve',
    'Beck, Glenn',
    'Bergman, Ingmar',
    'Black, Elk',
    'Berio, Luciano',
    'Berne, Eric',
    'Berra, Yogi',
    'Berry, Wendell',
    'Bevan, Aneurin',
    'Ben-Gurion, David',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bennington, Chester',
    'Bierce, Ambrose',
    'Billings, Josh',
    'Birrell, Augustine',
    'Blair, Tony',
    'Beecher, Henry',
    'Biondo, Frank',
];
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornInThe1500s = inventors.filter(inventor => /^15/.test(inventor.year));
console.log("Who has been bord in the 1500's?");
console.table(bornInThe1500s);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map(
    inventor => `${inventor.first} ${inventor.last}`
);
console.log(`What are the full names of all ${inventors.length} inventors?`);
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// Solution 1:
// const oldestToYoungest = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
// Solution 2:
const oldestToYoungest = inventors.sort((a, b) => a.year - b.year);
console.log('These are all inventors sorted by birthdate:');
console.log(oldestToYoungest);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const inventorsTotalLifespan = inventors.reduce(
    (total, inventor) => total + (inventor.passed - inventor.year),
    0
);
console.log('How many years did all the inventors live all together?');
console.log(inventorsTotalLifespan);

// 5. Sort the inventors by years lived
// Solution 1:
// const sortedByOldest = inventors.sort((a, b) =>  (b.passed - b.year) - (a.passed - a.year));
// Solution 2:
const sortedByOldest = inventors.sort((a, b) => {
    const lastPerson = a.passed - a.year;
    const nextPerson = b.passed - b.year;
    return lastPerson > nextPerson ? -1 : 1;
});
console.log("Who's been living the longest? Sorted from oldest to youngest:");
console.log(sortedByOldest);
for (inventor of sortedByOldest) {
    console.log(
        `${inventor.first} ${inventor.last} has lived for ${
            inventor.passed - inventor.year
        } years`
    );
}

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// go to https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// open devtools, paste the next 9 lines in the console, press enter
// const category = document.querySelector('.mw-category');
// // select all links and convert the NodeList into an array
// const links = Array.from(category.querySelectorAll('a'));
// // another way to do it with a shorthand is:
// // const links = [...category.querySelectorAll('a')];
// const de = links
//     .map(link => link.textContent)
//     .filter(streetName => streetName.includes('de'));
// console.log(de);

// 7. Sorting exercise
// Sort the people alphabetically by last name
const sortByLastName = people.sort();
console.log('People sorted alphabetically by last name:');
console.log(sortByLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck',
];

const uniqueVehicles = data.reduce((obj, vehicle) => {
    if (!obj[vehicle]) {
        obj[vehicle] = 0;
    }
    obj[vehicle]++;
    return obj;
}, {});
console.log('How many instances are there for each type of vehicle?');
console.log(uniqueVehicles);
