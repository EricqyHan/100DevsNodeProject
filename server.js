const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const figlet = require("figlet");

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == "/") {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/otherpage") {
    fs.readFile("otherpage.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/otherotherpage") {
    fs.readFile("otherotherpage.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/api") {
    if ("student" in params) {
      let rps = ["rock", "paper", "scissor"];
      let rpsPick = Math.floor(Math.random() * rps.length);
      let rpsResult = rps[rpsPick];
      let winlose = "";
      res.writeHead(200, { "Content-Type": "application/json" });
      if (params["student"] == "rock") {
        if (userName == "rock") {
          console.log("tie");
          const objToJson = {
            //name: "leon",
            //status: "Boss Man",
            //currentOccupation: "Baller",
            wins: "tie",
            flip: rpsResult,
          };
          res.end(JSON.stringify(objToJson));
        }
        //   res.writeHead(200, { "Content-Type": "application/json" });
        //let flipRes = Math.ceil(Math.random() * 2) === 1 ? "heads" : "tails";

        //   res.end(JSON.stringify(objToJson));
      } //student = leon
      else if (params["student"] == "paper") {
        res.writeHead(200, { "Content-Type": "application/json" });
        //let flipRes = Math.ceil(Math.random() * 2) === 1 ? "heads" : "tails";

        const objToJson = {
          //name: "leon",
          //status: "Boss Man",
          //currentOccupation: "Baller",
          //  winlose: winlose,
          flip: rprResult,
        };
        res.end(JSON.stringify(objToJson));
      } else if (params["student"] == "scissor") {
        res.writeHead(200, { "Content-Type": "application/json" });
        //let flipRes = Math.ceil(Math.random() * 2) === 1 ? "heads" : "tails";

        const objToJson = {
          //name: "leon",
          //status: "Boss Man",
          //currentOccupation: "Baller",
          //  winlose: winlose,
          flip: rprResult,
        };
        res.end(JSON.stringify(objToJson));
      }
    }
  } else if (page == "/css/style.css") {
    fs.readFile("css/style.css", function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == "/js/main.js") {
    fs.readFile("js/main.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else {
    figlet("404!!", function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
