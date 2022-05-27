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
      //  RPS variables
      let rps = ["rock", "paper", "scissor"];
      let rpsPick = Math.floor(Math.random() * rps.length);
      let rpsRandomPick = rps[rpsPick];
      let winLossTie = ["wins", "lose", "ties"];
      if (params["student"] == "rock") {
        res.writeHead(200, { "Content-Type": "application/json" });
        // wlt = wins, loss, or tie
        let wlt;
        if (rpsPick === 0) {
          wlt = winLossTie[2];
        } else if (rpsPick === 1) {
          wlt = winLossTie[1];
        } else {
          wlt = winLossTie[0];
        }
        const objToJson = {
          flip: rpsRandomPick,
          winsTiesLoses: wlt,
        };
        console.log(rpsRandomPick + rpsPick);
        res.end(JSON.stringify(objToJson));
      } //student = leon
      else if (params["student"] == "paper") {
        // wlt = wins, loss, or tie
        let wlt;
        if (rpsPick === 0) {
          wlt = winLossTie[0];
        } else if (rpsPick === 1) {
          wlt = winLossTie[2];
        } else {
          wlt = winLossTie[1];
        }
        const objToJson = {
          flip: rpsRandomPick,
          winsTiesLoses: wlt,
        };
        console.log(rpsRandomPick + rpsPick);
        res.end(JSON.stringify(objToJson));
      } else if (params["student"] == "scissor") {
        // wlt = wins, loss, or tie
        let wlt;
        if (rpsPick === 0) {
          wlt = winLossTie[1];
        } else if (rpsPick === 1) {
          wlt = winLossTie[0];
        } else {
          wlt = winLossTie[2];
        }
        const objToJson = {
          flip: rpsRandomPick,
          winsTiesLoses: wlt,
        };
        console.log(rpsRandomPick + rpsPick);
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
