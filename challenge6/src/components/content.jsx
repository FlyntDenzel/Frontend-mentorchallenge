import React from "react";
import image from "../images/image-hero-desktop.png"

function Content() {
    return <div className="content">
       <div className="left-side">
        <h2>Make <br /> <span>remote work</span></h2>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <button>Learn more</button>
       </div>
       <div className="right-side">
        <img src={image} alt="" srcset="" />
       </div>
    </div>
}

export default Content;