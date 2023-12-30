import LoginForm from "../pages/1_loginForm";
import Student from "../pages/Students/2_student";
import Transcript from "../pages/Students/2.1_transcript";
import Payments from "../pages/Students/2.3_payments";
import Request from "../pages/Students/2.4_request";
import Complaint from "../pages/Students/2.5_complaint";
import Admin from "../pages/Admin/1_admin"
import Teacher from "../pages/Teacher/1_teacher"
const routes = [
  {
    path: "/",
    component: <LoginForm />,
  },
  {
    path: "/Home",
    component: <Student />,
  },
  {
    path: "/transcript",
    component: <Transcript />,
  },
  {
    path: "/payments",
    component: <Payments />,
  },
  {
    path: "/request",
    component: <Request />,
  },
  {
    path: "/complaints",
    component: <Complaint />,
  },
  {
    path: "/admin",
    component: <Admin />,
  },
  {
    path: "/teacher",
    component: <Teacher />,
  },
];

export default routes;
