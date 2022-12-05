
import React from "react";

const Greeter  = ({userName, setUserName}) => {

    const submitName = (e) => {
        e.preventDefault();
        setUserName(e?.target?.[0]?.value);
    }
    return (
        <>
        <h3>Hello {userName}!</h3>
        <form onSubmit={submitName}>
            <input type="text" name="username" placeholder="Please enter username" />
            <input type="submit" value="Submit"/>
        </form>
        </>
    )
};

export default Greeter;