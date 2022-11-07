const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.listen(8080, () => { console.log("Listening on port 8080"); });

app.post("/submission", (req, res) => {
    const html = `
        <!-- This is an example of a fake submission results
        page for CPSC 314
        -->
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="utf-8">
            <title>Submission Page</title>
            <link rel="icon" href="favicon.png">

            <style>
                table,
                th {
                    border: 1px solid black;

                }

                td {
                    border: 1px dotted black;
                }
            </style>

        </head>

        <body>
            <h1>Submission Results Page</h1>
            <table>
                <caption>First and Last Name Submitted on the Previous Page</caption>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                <tr>
                    <td id="fname">$(req.body.first)</td>
                    <td id="lname">$(req.body.last)</td>
                </tr>
            </table>
        </body>

        </html>
    `;

    res.send(html);
    console.log("sending html");
});


/* app.get("/", function(req, res) {
    console.log("get request?");

    const html = `
        <h1>Hello, World! New web page, who is this?</h1>
        <form action="submission.html" method="GET">

            <p>
                <label for="first">First Name:</label>
                <input type="text" name="first" id="first">
            </p>

            <p>
                <label for="last">Last Name:</label>
                <input type="text" name="last" id="last">
            </p>
            <input type="submit" value="Submit Feedback">
        </form>
    `;
});
*/
/* const http = require('http');
const fs = require('fs');

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
    fs.readFile('./index.html', 'UTF-8', (err,data) => {
        res.write(data);
    });
}

const server = http.createServer(requestListener);
server.listen(3000);
console.log("filed hooked up");
*/