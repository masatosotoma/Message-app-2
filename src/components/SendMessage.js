import React, { useState } from "react";

function SendMessage() {
    const [message,setMesssage] = useState("")

  return (
    <div>
      <form>
        <div>
          <input placeholder="Enter message" type="text"/>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
