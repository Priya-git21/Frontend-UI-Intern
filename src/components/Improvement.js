import React from "react";
import './Improvement.css';
import ghost5 from './assets/ghosts/ghost5.png';

const Improvement = () => {
    return (
        <div className="wholeBox">
            <div className="combHead">
                <div>
                    <p className="subHead">Wrong with self-improvement & how we are fixing it.</p>
                    <h1 className="mainHead">Self Improvement. Ugh.</h1>
                </div>
                <div className="ghostie">
                    <img src={ghost5} height={80} alt="ghost5" />
                </div>
            </div>
            <div className="boxBinder">
                <div className="infoBoxContainer">
                    <div className="infoBox">
                        <div className="dot">
                            <div className="inDot"></div>
                        </div>
                        <p className="headText">It's not easy as 1-2-3</p>
                        <p className="subText">The journey of change may be long, but our sessions are quick. We get to the point and tell you what to know (and nothing else)</p>
                    </div>
                    <div className="infoBox">
                        <div className="dot">
                            <div className="inDot"></div>
                        </div>
                        <p className="headText">It's not easy as 1-2-3</p>
                        <p className="subText">The journey of change may be long, but our sessions are quick. We get to the point and tell you what to know (and nothing else)</p>
                    </div>
                    <div className="infoBox">
                        <div className="dot">
                            <div className="inDot"></div>
                        </div>
                        <p className="headText">It's not easy as 1-2-3</p>
                        <p className="subText">The journey of change may be long, but our sessions are quick. We get to the point and tell you what to know (and nothing else)</p>
                    </div>
                    <div className="infoBox">
                        <div className="dot">
                            <div className="inDot"></div>
                        </div>
                        <p className="headText">It's not easy as 1-2-3</p>
                        <p className="subText">The journey of change may be long, but our sessions are quick. We get to the point and tell you what to know (and nothing else)</p>
                    </div>
                    {/* Add more infoBox components here as needed */}
                </div>
            </div>
        </div>
    );
}

export default Improvement;
