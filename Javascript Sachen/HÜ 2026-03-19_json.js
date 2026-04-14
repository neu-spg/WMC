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


Task 1 – filter: Find all students who passed (grade ≤ 4). Store the result in passed.

> const passed = students.filter(s => s.grade <= 4);                                                                                             
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
 
> const labels = students.map(s => `${s.name} (${s.age})`);                                                                                      
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

const passedNames = students
  .filter(s => s.grade <= 4)
  .map(s => s.name);

  > console.log(passedNames)                                                                                                                        
[
  "Anna",  "Ben",
  "Clara", "Elena",
  "Felix", "Gina",
  "Hugo"
]
undefined

Task 4 – reduce: Calculate the average grade of all students. Store it in averageGrade.

const averageGrade = students.reduce((sum, s) => sum + s.grade, 0) / students.length;

> console.log(averageGrade)                                                                                                                        
2.75
undefined

Task 5 – chaining (bonus): In a single chain, find the names of all students aged 17 or older who passed, 
          joined into one comma-separated string.

> const result = students.filter(s=>s.age >= 17 && s.grade <=4).map(s => s.name).join(", ")                                                      

undefined
> console.log(result)                                                                                                                            
Anna, Clara, Felix, Gina, Hugo
undefined

console.log(result);
