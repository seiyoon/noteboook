const express = require("express");
const app = express();
const port = 3001; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "user", //사용할 데이터베이스
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("연결 성공!!!");
});

app.post("/login", (req, res) => {
  var userid = req.body.id;
  var userpw = req.body.pw;
  console.log("id : ", userid);
  console.log("pw : ", userpw);
  if (userid && userpw) {
    connection.query(
      "SELECT * FROM user WHERE username = ? AND password = ?",
      [userid, userpw],
      function (error, results, fields) {
        if (error) throw error;
        if (results.length > 0) {
          req.session.loggedin = true;
          req.session.userid = userid;
          res.redirect("/home");
          res.end();
        } else {
          res.send(
            '<script type="text/javascript">alert("로그인 정보가 일치하지 않습니다."); document.location.href="/login";</script>'
          );
        }
      }
    );
  } else {
    res.send(
      '<script type="text/javascript">alert("다시 입력하세요!"); document.location.href="/login";</script>'
    );
    res.end();
  }
});

app.post("/signup", (req, res) => {
  const userid = req.body.id;
  const username = req.body.name;
  const userpw = req.body.pw;
  const userpw2 = req.body.pw2;

  connection.query(
    "SELECT * FROM user WHERE id = ? AND name = ? AND password = ? AND password2 = ?",
    [userid, username, userpw, userpw2],

    function (err, rows, fields) {
      if (err) {
        console.log("실패");
        // console.log(err);
      } else {
        console.log("성공");
        // console.log(rows);
      }
    }
  );

  console.log("id : ", userid);
  console.log("name : ", username);
  console.log("pw : ", userpw);
  console.log("pw2 : ", userpw2);
});

app.listen(port, () => {
  console.log(`Connect at http://localhost:${port}`);
});
