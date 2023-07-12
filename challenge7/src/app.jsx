import React from 'react';
import Header from './components/header/header';
import Note from './components/note/note';
import todo from "./index.css"

function App(){
    return<div>
        <Header />
        <div className="todo">
            <Note 
                name="code in react"
                task="your task is to code in the React JS framework"
            />
            <Note 
                name="watch some cartoons tomorrow"
                task="your task is to code in the React JS framework including the various paramters from the previous tutorials"
            />
       
       <Note 
                name="watch some cartoons tomorrow"
                task="your task is to code in the React JS framework including the various paramters from the previous tutorials"
            />
        </div>
        
    </div>
}

export default App;