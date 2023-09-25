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
        <div className="Home">
            
            <h2>Welcome to Our Esparto!</h2> 
            <h5>A digital platform for Art Gallery is here.</h5>
            <p>
                We can also have a major look in detail with the Artist Name, 
                with the price quoted etc... and mentions the types of 
                paints/materials used for Art which depicts the real-time 
                Process and modifications as well feedback is also allowed 
                in our Page 
            </p> 
            
         <p>
            An artist is a person engaged in an activity related to creating 
            art, practicing the arts, or demonstrating an art. The common 
            usage in both everyday speech and academic discourse refers to 
            a practitioner in the visual arts only. However, the term is also 
            often used in the entertainment business, especially in a business 
            context, for musicians and other performers (although less often 
            for actors). "Artiste" (French for artist) is a variant used in 
            English in this context, but this use has become rare. The use of 
            the term "artist" to describe writers is valid, but less common, 
            and mostly restricted to contexts such as critics' reviews.
        </p>

            

            <SplitPane
                split="vertical"
                minSize={100}
                maxSize={-100}
                defaultSize={"50%"}
            >
               
            </SplitPane>

            <div className="middleSection">
                {/* All the features go here  */}
            </div>
        </div>

        
        );
} 