import Home from "./pages/Home";
import Input from "./pages/Input";
import Settings from "./pages/Settings";
import Welcome from "./pages/Welcome";

const routes = [
  {
    path: "/",
    component: Home,
    name: "홈",
    exact: true
  },
  {
    path: "/input/:id",
    component: Input,
    name: "인풋",
    exact: false
  },
  {
    path: "/settings",
    component: Settings,
    name: "세팅",
    exact: false
  },
  {
    path: "/welcome",
    component: Welcome,
    name: "웰컴",
    exact: false
  }
];

export default routes;
