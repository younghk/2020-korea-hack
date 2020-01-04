import Home from "./pages/Home";
import Input from "./pages/Input";
import Settings from "./pages/Settings";
import Welcome from "./pages/Welcome";
import Friends from "./pages/Friends";
import TodoList from "./pages/ToDoList";
import Notice from "./pages/Notice";
import Message from "./pages/Message";
import Profile from "./pages/Profile";
import ProfileModify from "./pages/ProfileModify";
import ProfileTodo from "./pages/ProfileTodo";
import ProfileActive from "./pages/ProfileActive";

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
  },
  {
    path: "/friends",
    component: Friends,
    name: "친구목록",
    exact: false
  },
  {
    path: "/todolist",
    component: TodoList,
    name: "투두리스트",
    exact: false
  },
  {
    path: "/notice",
    component: Notice,
    name: "알람",
    exact: false
  },
  {
    path: "/message",
    component: Message,
    name: "메시지",
    exact: false
  },
  {
    path: "/profile",
    component: Profile,
    name: "프로필",
    exact: false
  },
  {
    path: "/profilemodify",
    component: ProfileModify,
    name: "정보 추가/수정",
    exact: false
  },
  {
    path: "/profiltodo",
    component: ProfileTodo,
    name: "프로필 투두",
    exact: false
  },
  {
    path: "/profileactive",
    component: ProfileActive,
    name: "프로필 통계",
    exact: false
  },
  {
    path: "/message",
    component: Message,
    name: "메시지 입력",
    exact: false
  }
];

export default routes;
