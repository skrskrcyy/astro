import { useState } from "react";

export const Greeting = ({messages}: {messages: string[]}) => {
    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    const [greeting, setGreeting] = useState(messages[0]);
  
    return (
      <div>
        <h3>{greeting}! Thank you for visiting!</h3>
        <button onClick={() => {
            console.log(332)
            setGreeting(randomMessage())
        }}>
          New Greeting
        </button>
      </div>
    );
}