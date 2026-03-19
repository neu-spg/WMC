const students = [
  { name: "Anna", age: 17, grade: 2 },
  { name: "Ben", age: 16, grade: 4 },
  { name: "Clara", age: 18, grade: 1 },
  { name: "David", age: 17, grade: 5 },
  { name: "Elena", age: 16, grade: 3 },
  { name: "Felix", age: 19, grade: 2 },
  { name: "Gina", age: 17, grade: 1 },
  { name: "Hugo", age: 18, grade: 4 },
];

// Wie viele Personen gibt es?
console.log(`Es gibt ${personen.length} Einträge im Array.`);

Tasks (progressive difficulty)

Task 1 – filter: Find all students who passed (grade ≤ 4). Store the result in passed.

> const passed = students.filter(student => student.grade<=4)
undefined
> console.log(passed)
[
  { name: "Anna", age: 17, grade: 2 },
  { name: "Ben", age: 16, grade: 4 },
  { name: "Clara", age: 18, grade: 1 },
  { name: "Elena", age: 16, grade: 3 },
  { name: "Felix", age: 19, grade: 2 },
  { name: "Gina", age: 17, grade: 1 },
  { name: "Hugo", age: 18, grade: 4 }
]
undefined

Task 2 – map: Create an array of strings in the format "Anna (17)" from the original array. Store it in labels.

array.map(element => NEUER_WERT)

> const labels = students.map(student => `${student.name} (${student.age})`);
undefined
> console.log(labels)
[
  "Anna (17)",
  "Ben (16)",
  "Clara (18)",
  "David (17)",
  "Elena (16)",
  "Felix (19)",
  "Gina (17)",
  "Hugo (18)"
]
undefined

Task 3 – filter + map: From only the passed students, extract just their names into an array passedNames.

> const passedNames = students.filter(student => student.grade <= 4).map(student => student.name);
undefined
> console.log(passedNames)
[
  "Anna",  "Ben",
  "Clara", "Elena",
  "Felix", "Gina",
  "Hugo"
]
undefined

Task 4 – reduce: Calculate the average grade of all students. Store it in averageGrade.

> const averageGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
undefined
> console.log(averageGrade)
2.75
undefined

Task 5 – chaining (bonus): In a single chain, find the names of all students aged 17 or older who passed, joined into one comma-separated string.