import React, { useState } from "react";
import SplitPane from "react-split-pane";

import img0 from '../src/assets/home.jpg';
import img1 from '../src/assets/image2.jpg';
import img2 from '../src/assets/image3.jpg';
import img3 from '../src/assets/image4.jpg';

 export default function Home() 
 {
    const imgList = [img0, img1, img2, img3];

    const [index, setIndex] = useState(0);

    const onClickForward = () => {
        if (index + 1 === imgList.length) {
            setIndex(0);
        } else {
            setIndex(index+ 1);
        }
        
    };

    const onClickBackward = () => {
        if (index - 1 === -1) {
            setIndex(imgList.length - 1);
        } else {
            setIndex(index - 1);
        }
    };
  
    return ( 
    <div>
    <div className="Home">
        <SplitPane
        split="vertical"
        minSize={100}
        maxSize={-100}
        defaultSize={"50%"}
        >
            <div className="leftPane">
                        <h2 className="hdr">WELCOME TO ESPARTO</h2>
                        <div className="imageButtons">
                            <button onClick={onClickBackward}><img className="navButtons" src={require("../src/assets/back.png")}></img></button>
                        </div>
            </div>
            <div className="rightPane">
                        <div className="imageContainer">
                            <img className="image" src={imgList[index]} alt="image" />
                            <div className="imageButtons">
                                
                                <button onClick={onClickForward}><img className="navButtons" src={require("../src/assets/forward.png")}></img></button>
                            </div>
                        </div>
            </div>
            <div className="middleSection">
                    {
                    /* All the features go here  */
                    }
            </div>

            </SplitPane>

           
        </div>
        <div className="middleSection">
                {/* All the features go here  */}
            </div>
        </div>
        );
        
        
} 