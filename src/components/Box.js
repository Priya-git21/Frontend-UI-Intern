import React from "react";
import './Box.css';


const Box = (props) => {

    return (
        <div className="mainBox" style={{ backgroundColor: props.color, transform:props.rotate ,width:'50px'
          }}>
            
            <div className="emojiBox">
                {props.emoji}
            </div>
            <br/>
            <div style={{color : props.text}}>

                <div className="headingBox">
                    <p>{props.head}</p>
                </div>

                <div className="descBox">
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    );

}

export default Box;