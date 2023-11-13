import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import PersonAdd from "@mui/icons-material/PersonAdd";
import GroupAdd from "@mui/icons-material/GroupAdd";
import AddCircle from "@mui/icons-material/AddCircle";
import Nightlight from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import ConversationItem from "./conversationItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import LightMode from "@mui/icons-material/LightMode";

const Sidebar = () => {
  const [conversations, setconversations] = useState([
    { name: "name1", lastMsg: "last message", timeStamp: "tooday" },
    { name: "name2", lastMsg: "last message", timeStamp: "tooday" },
    { name: "name3", lastMsg: "last message", timeStamp: "tooday" },
  ]);
  const { theme } = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="header">
        <div>
          <IconButton
            onClick={() => {
              navigate("welcome");
            }}
          >
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAdd />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupAdd />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("create-groups");
            }}
          >
            <AddCircle />
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch(toggleTheme(theme == "" ? "dark" : ""));
            }}
          >
            {theme == "dark" ? <LightMode /> : <Nightlight />}
          </IconButton>
        </div>
      </div>
      <div className="search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" name="" id="" placeholder="search" />
      </div>
      <div className="conversations">
        {conversations.map((item) => {
          return (
            <div key={item.name}>
              <ConversationItem props={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
