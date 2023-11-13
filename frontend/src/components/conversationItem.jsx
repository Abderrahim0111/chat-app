import { useNavigate } from "react-router-dom";



const ConversationItem = ({ props }) => {
  const navigate = useNavigate()
  return (
    <div className="conversationItem" onClick={() => {
      navigate("chat")
    }}>
      <p className="cn-icon">{props.name[0]}</p>
      <div>
        <p className="cn-name">{props.name}</p>
        <p className="lastMsg">{props.lastMsg}</p>
        <p className="timeStamp">{props.timeStamp}</p>
      </div>
    </div>
  );
};

export default ConversationItem;
