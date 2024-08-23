import React from "react";
import Quotes from "./components/Quotes";
import Authors from "./components/Authors";

function App(){
    return (
        <>
        <h1>Quotes Library</h1>
        <div>
            <Authors />
            <Quotes />
        </div>
        </>
    )
}

export default App;