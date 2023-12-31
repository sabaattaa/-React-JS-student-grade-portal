const express = require("express");
const cors = require("cors");
const app = express();
const dbconnect = require("./mongodb");
const Auth = require("./schemas");

app.use(express.json());
app.use(cors());
const port = 5000;
dbconnect();
app.listen(port, () => {
  console.log("Server is running on port", port);
});

const logins = [
  {
    email: "student@me.com",
    password: "1234",
  },
  {
    email: "admin@me.com",
    password: "1234",
  },
  {
    email: "teacher@me.com",
    password: "1234",
  },
  {
    email: "management@me.com",
    password: "1234",
  },
];

app.post("/auth", async (req, res) => {
  const data = req.body;
  let isAuth = false;
  let userData = null;

  const auth = new Auth({
    email: req.body.email,
    password: req.body.password,
  });

  const createdUser = await auth.save();

  res.json({
    success: true,
    user: createdUser,
  });

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

  // if (isAuth) {
  //   res.status(200).json({ message: "Successfully Logged In", user: userData });
  // } else {
  //   res.status(401).json({ message: "Login Failed" });
  // }
});

const studentInfo = [
  {
    StudentId: "f2019065114",
    studentName: "saba",
    fatherName: "Atta Muhammad",
    semester: 1,
    batch: "F2019",
  },
];
app.get("/studentInfo", (req, res) => {
  res.status(200).json({
    message: "payments confidantials",
    studentInfo: studentInfo,
  });
});

const transcript = [
  { name: "saba", grade: "A+", points: "11" },
  { name: "samra", grade: "B+", points: "7" },
  { name: "sahar", grade: "C+", points: "5" },
];

app.get("/transcript", (req, res) => {
  res.status(200).json({
    message: "transcript data is confidanials",
    transcript: transcript,
  });
});

const payments = [
  { titale: "tuttion fee", amount: "2000", date: Date() },
  { titale: "library fee", amount: "8000", date: Date() },
  { titale: "bus fee", amount: "6000", date: Date() },
];
app.get("/payments", (req, res) => {
  res.status(200).json({
    message: "payments confidantials",
    payments: payments,
  });
});

app.post("/request", (req, res) => {
  const query = req.body;

  res.status(200).send("request ai is woking");
});

app.post("/complaint", (req, res) => {
  const complaint = req.body;

  res.status(200).send("request ai is woking");
});
