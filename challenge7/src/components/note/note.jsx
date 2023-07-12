import React from 'react'
import style from "./note.css"

function Note(props) {
  return (
    <div className="note">
      <div className="topic">
        <h3>{props.name}</h3>
      </div>
      <div className="task">
        <p>{props.task}</p>
      </div>
      <div className="button">
        <button>Delete</button>
      </div>
    </div>
  )
}

export default Note