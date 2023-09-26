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
        
    };

    const onClickBackward = () => {
       
    };
  
    return ( 
        <div className="leftPane">
                    <h2 className="hdr">WELCOME TO ESPARTO</h2>
                    <div className="imageButtons">
                        <button onClick={onClickBackward}><img className="navButtons" src={require("../src/assets/back.png")}></img></button>
                    </div>
                    </div>
        );
} 