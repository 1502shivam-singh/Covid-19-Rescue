import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import {ReactComponent as Mask} from "../Assets/svg/mask.svg";

function EmptyState() {

    const stateRef = useRef(null);

    useEffect(()=>{
      gsap.to([stateRef.current],{
          opacity: 1,
          duration: 5
      })
    })

    return (
    <div ref={stateRef} style={{opacity: 0, justifyContent: "center"}}>
      <Mask className="empty-svg"/>
      <h3 className="empty-text">Keep your hope’s high, we are adding resources regularly. Try checking again later. </h3>
    </div>
    );
}

export default EmptyState;
