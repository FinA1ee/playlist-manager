import React from "react";

const ActionPanel = (props) => {
  const { isLogin, handleAuthenticate, handleExecute } = props;
  return !isLogin ? (
    <button onClick={handleAuthenticate} style={{ margin: "100px" }}>
      login
    </button>
  ) : (
    <button onClick={handleExecute} style={{ margin: "100px" }}>
      Fetch my playlists
    </button>
  );
};

export default ActionPanel;