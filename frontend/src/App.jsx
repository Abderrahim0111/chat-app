import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/mainContainer";
import Welcome from "./components/welcome";
import ChatArea from "./components/chatArea";
import OnlineUsers from "./components/onlineUsers";
import CreateGroups from "./components/createGroups";
import Groups from "./components/groups";
import { useSelector } from "react-redux";
import Signup from "./components/signup";
import Login from "./components/login";

function App() {
  const { theme } = useSelector((state) => state.themeKey);
  return (
    <div className={`app ${theme}`}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />

        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="chat" element={<ChatArea />} />
          <Route path="users" element={<OnlineUsers />} />
          <Route path="groups" element={<Groups />} />
          <Route path="create-groups" element={<CreateGroups />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
