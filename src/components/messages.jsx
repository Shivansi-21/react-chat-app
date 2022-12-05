
import React from "react";

const styles ={ 
    messageListBox: {
        minWidth: "700px",
        minHeight: "300px",
        minHeight: "300px",
        backgroundColor: "white",
        color: "black",
        textAlign: "left",
        padding: "20px",
        fontSize: "16px",
        overflowY: "auto"
    }
}
    
const Messages = ({messages}) => {
    return (
        <div style={styles.messageListBox}>
            {
                messages?.map(item => (
                    <p key={item.id}>
                        <b>{item.sender}</b>: 
                        {item.body}
                    </p>
                ))
            }
        </div>
    )
};

export default Messages;