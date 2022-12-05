import React, { useState, useEffect } from 'react';
import Pubnub from 'pubnub';
import Greeter from './components/greeter';
import './App.css';
import ChatRoom from './components/chatRoom';
import Duplicates from './components/Duplicates';

const pubnub = new Pubnub({
  publishKey: "pub-c-0241220c-a93d-4721-9e30-036ca326250f",
  subscribeKey: "sub-c-027dcb1c-c196-4cc1-9250-8d622b931903",
  userId: "myUniqueUserId",
});

const App = () => {

  // State vairable declarations
  const [userName, setUserName] = useState();
  const [messages, setMessages] = useState([]);
  const [numberList, setNumberList] = useState([]);


  //add listener
  const listener = {
    message: (messageEvent) => {
      const { message } = messageEvent;
      setMessages(currentMessages => ([
        message,
        ...currentMessages
      ]))
    },
  };



  const leaveApplication = () => {
    pubnub.removeListener(listener);
    pubnub.unsubscribeAll()
  }

  useEffect(() => {

    pubnub.addListener(listener);
    // subscribe to a channel
    pubnub.subscribe({
      channels: ["chatapp"],
    });

    return leaveApplication

  }, [])

  const submitNumberList = (e) => {
    e.preventDefault();
    setNumberList(e?.target?.[0]?.value?.split(","));
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Chat Room</h1>
        {
          !userName ? (
            <Greeter userName={userName} setUserName={setUserName} />
          ) : (
            <ChatRoom userName={userName} messages={messages} setMessages={setMessages} pubnub={pubnub} />
          )
        }
        <h3>Duplicate numbers</h3>
        <form onSubmit={submitNumberList}>
          <input type="text" name="numberlist" placeholder="list of numbers: 1,2,3,4,5" />
          <input type="submit" value="Submit" />
        </form>
        {
          numberList?.length !== 0 &&
          <Duplicates numberList={numberList} />
        }
      </div>
    </div>
  );
}

export default App;
