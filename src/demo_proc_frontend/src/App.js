import React, { useEffect, useState } from "react";
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "./declarations/demo_proc_backend"; 
import { Principal } from "@dfinity/principal";
import "./App.css";

// Use your environment variable for the backend canister ID
const CANISTER_ID = process.env.REACT_APP_CANISTER_ID;

const agent = new HttpAgent({
  host: "http://127.0.0.1:4943", // Update with local replica URL (dfx start default)
});

// Fetch root key if running locally
if (process.env.NODE_ENV !== "production") {
  agent.fetchRootKey().catch((err) => console.error("Failed to fetch root key:", err));
}

// Create the actor to interact with your backend canister
const demoProcBackend = Actor.createActor(idlFactory, {
  agent,
  canisterId: Principal.fromText(CANISTER_ID),
});

function App() {
  const [greeting, setGreeting] = useState("");
  const [name, setName] = useState("");

  const callGreetFunction = async () => {
    try {
      // Call your greet function from the backend canister
      const response = await demoProcBackend.greet(name);
      setGreeting(response);
    } catch (error) {
      console.error("Error calling greet function:", error);
    }
  };

  return (
    <div className="App">
      <h1>Welcome to your DApp</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={callGreetFunction}>Call Greet</button>
      {greeting && <p>{greeting}</p>}
    </div>
  );
}

export default App;
