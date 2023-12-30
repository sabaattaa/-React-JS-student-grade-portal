const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
const port = 5000;

app.listen(port, () => {
  console.log("Server is running on port", port);
});

const logins = [
  {
    email: "me@me.com",
    password: "1234",
  },
  {
    email: "admin@me.com",
    password: "1234",
  },
  {
    email: "saba@me.com",
    password: "1234",
  },
  {
    email: "sba@me.com",
    password: "1234",
  },
];

app.post("/auth", (req, res) => {
  const data = req.body;
  let isAuth = false;
  let userData = null;

  const AdminStatus = { name: "me", role: "ADMIN" };
  const StudentStatus = { name: "Saba", role: "STUDENT" };
  const TeacherStatus = { name: "Ahmad Tahir", role: "TEACHER" };

  logins.forEach((item) => {
    if (data.email === item.email && data.password === item.password) {
      isAuth = true;
      if (data.email === "me@me.com") {
        userData = TeacherStatus;
      } else if (data.email === "admin@me.com") {
        userData = AdminStatus;
      } else if (data.email === "saba@me.com" || data.email === "sba@me.com") {
        userData = StudentStatus;
      }
    }
  });

  if (isAuth) {
    res.status(200).json({ message: "Successfully Logged In", user: userData });
  } else {
    res.status(401).json({ message: "Login Failed" });
  }
});



