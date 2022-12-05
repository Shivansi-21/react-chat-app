
import React from "react";
import Messages from "./messages";

const ChatRoom = ({ userName, messages, pubnub }) => {

    // publish message
    const publishMessage = (message) => {
         pubnub.publish({
            channel: "chatapp",
            message,
        });
    }

    const submitMessage = (e) => {
        e.preventDefault();
        const message = {
            sender: userName,
            body: e?.target?.[0]?.value,
            id: Date.now()
        }
        //Clear form
        document.getElementById("message-input").reset();
        publishMessage(message);
    }
    return (
        <div>
            <h3>Welcome {userName}</h3>
            <Messages messages={messages} />
            <form onSubmit={submitMessage} id="message-input">
                <input type="text" name="message" placeholder="Please enter message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
};

export default ChatRoom;