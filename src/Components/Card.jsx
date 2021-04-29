import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import {ReactComponent as Sharebtn} from "../Assets/svg/share.svg";

function Card(props) {

  const entity = useRef(null);

  useEffect(()=>{
    gsap.to([entity.current],{
      opacity: 1,
      duration: 1
    });
  })

  const shareData = {
    title: "Covid-19",
    text: props.title,
    url: props.link,
  }

  async function share(e){
    e.preventDefault();
    try {
      await navigator.share(shareData)
    } catch(err) {
      e.target.blur();
    }
  }

  return (
  <a href={props.link} target="_blank">
    <div className="card" ref={entity} >
      <div className="card-img-frame">
        <img className="card-img" src={props.img}/>
      </div>
      <div className="card-ctasec">
        <div className="card-info">
          <h3>{props.title}</h3>
        </div>
        <div className="card-share-btn" onClick={share}>
            <Sharebtn/>
        </div>
      </div>
  </div>
  </a>);
}

export default Card;
