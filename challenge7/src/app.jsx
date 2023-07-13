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
                name="Watch Attack On Titans"
                task="You are to spend the entire weekend streaming attack on titans"
            />

            <Note 
                name="Play basketball"
                task="go to the university of bamenda and start playing basketball with some niggas"
            />

            <Note 
                name="watch some cartoons tomorrow"
                task="create an organization in charge of all the main developers in our class including all those "
            />

<Note 
                name="watch some cartoons tomorrow"
                task="create an organization in charge of all the main developers in our class including all those "
            />
           
           <Note 
                name="go to the Met Gala"
                task="Find the best celebreties there and ask to eat"
            />
        </div>
        
    </div>
}

export default App;