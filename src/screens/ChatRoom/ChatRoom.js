import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ChatRoom() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { isLogin } = userLogin;
  useEffect(() => {}, [isLogin]);
  return (
    <div>
      <h2>WELCOME Chat room of DO</h2>
    </div>
  );
}

export default ChatRoom;
