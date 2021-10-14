const fs = require("fs");

fs.appendFile(
  "employees.json",
  '{ name: "Employee 1 Name", salary: 2000 }',
  (err) => {
    if (err) throw err;
  }
);

fs.readFile("employees.json", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.writeFile(
  "employees.json",
  '{ name: "Employee John Doe", salary: 4444 }',
  (err) => {
    if (err) throw err;
  }
);

fs.readFile("employees.json", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.unlink("employees.json", (err) => {
  if (err) throw err;
  console.log("Dosya silindi!");
});
