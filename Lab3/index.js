var http = require("http");
console.log("Lab 03 -  NodeJs");
const { employees } = require("./Employee.js");
//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            return res.end('<h1>Welcome to Lab Exercise 03</h1>');
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employeess in JSON format
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            return res.end(JSON.stringify(employees));
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            const nameArr = [...employees]
                .sort((a, b) => a.firstName.localeCompare(b.firstName))
                .map(emp => `${emp.firstName} ${emp.lastName}`);
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            return res.end(String(nameArr));
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 } 
            let total = 0 
            employees.forEach(element => {
                total += element.Salary
            });
            const totalSalary = `{"total_salary" : ${total}}`

            res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'})
            return res.end(totalSalary)
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})