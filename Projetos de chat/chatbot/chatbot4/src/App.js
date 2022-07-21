
import React from "react";
import Chatbot from "react-chatbot-kit";

import config from "./components/Config";
import MessageParser from "./components/MessageParser";
import ActionProvider from "./components/ActionProvider";

function App() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;