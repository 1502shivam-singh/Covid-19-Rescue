import "./styles.css";
import { useState, useRef, useEffect } from "react";
import Tabs from "./Components/ResourceTab";
import centralData from "./Data/InfoCentral";
import bedsData from "./Data/infoBeds";
import mealData from "./Data/infoMeal";
import newsData from "./Data/infoNews";
import plasmaData from "./Data/infoPlasma";
import medsData from "./Data/infoMed";
import gsap from "gsap/gsap-core";
import {ReactComponent as Search} from "./Assets/svg/search.svg";
import { FiGithub, FiTwitter } from 'react-icons/fi';

export default function App() {
  const headStyle = {
    color: "#c1c1c1"
  };

  const [width, setWidth] = useState(window.innerWidth);
  const [central, setCentralData] = useState(centralData);
  const [beds, setBedsData] = useState(bedsData);
  const [meal, setMealData] = useState(mealData);
  const [news, setNewsData] = useState(newsData);
  const [plasma, setPlasmaData] = useState(plasmaData);
  const [meds, setMedsData] = useState(medsData);

  function onWindowResize(e) {
    setWidth(window.innerWidth);
  }

  window.addEventListener("resize", onWindowResize, false);

  const inputRef = useRef(null);
  const show1Ref = useRef(null);
  const show2Ref = useRef(null);
  const dropRef = useRef(null);

  const tl = gsap.timeline({});

  const duration = 0.2
  useEffect(() => {
    inputRef.current.onfocus = ()=>{
      inputRef.current.value = "";
      tl.to([dropRef.current],{
        height: window.innerHeight*0.34,
        duration: duration
      })
      .to([dropRef.current],{
        padding: "1rem 2rem",
        duration: duration,
        onComplete: ()=>{
          gsap.to([show1Ref.current],{
            opacity: 1, 
            pointerEvents: "all",
            duration: 0.3
          })
          gsap.to([show2Ref.current],{
            opacity: 1, 
            pointerEvents: "all",
            duration: 0.3
          })
        }
      })
    }

    inputRef.current.onblur=()=>{
      tl.to([show1Ref.current],{
        opacity: 0,
        duration: duration
      })
      .to([show2Ref.current],{
        opacity: 0,
        duration: duration
      },"-=duration")
      .to([dropRef.current],{
        height:0,
        padding:0,
        duration: duration,
        onComplete: ()=>{
          show1Ref.current.style.pointerEvents = "none";
          show2Ref.current.style.pointerEvents = "none";
        }
      });
    }
  });

  function setLists(e){
    e.preventDefault();

    if((e.type === "keyup" && e.keyCode == '13') || e.type === "click"){
      inputRef.current.value = e.currentTarget.innerHTML || inputRef.current.value;
      const searchCondition = it => (it.tags.includes(e.currentTarget.innerHTML.toLowerCase() || inputRef.current.value.toLowerCase())) || it.tags.includes("")

      e.target.blur()
      setCentralData(centralData.filter(searchCondition));
      setMealData(mealData.filter(searchCondition));
      setBedsData(bedsData.filter(searchCondition));
      setPlasmaData(plasmaData.filter(searchCondition));
      setMedsData(medsData.filter(searchCondition));
    }
  }

  const districts = ["Bengaluru", "Lucknow", "Pune", "Delhi", "Nashik", "Mumbai"];
  const states = ["Andhra Pradesh", "Maharashtra", "Tamil nadu", "Uttar Pradesh", "Madhya Pradesh", "Karnataka"];

  return (
    <div className="App">
      <div className="above-line">
        <div className="headline">
          <h1 style={headStyle}>
            <em>COVID-<span style={{color: "#ff5353"}}>19</span> Rescue</em>
          </h1>
        </div>
        <h3>Catalogue of all Covid-19 resources online</h3>
        <div className="input-wrapper">
          <div className="search-bar">
            <input
              type="text"
              id="location"
              name="lname"
              placeholder="Search your district or state..."
              autoComplete="off"
              ref={inputRef}
              onKeyUp={setLists}
            ></input>
            <Search style={{marginTop: "5px", marginRight: "5px"}}/>
          </div>
        </div>
        <div className="locations">
          <div ref={dropRef} className="locations-drop">
            <div ref={show1Ref} className="locations-drop-text">
              <h3 className="drop-title">Districts</h3>
              <div className="drop-dist">
                {districts.map((data, index)=>{
                  return (
                    <div key={index} className="drop-dist-links">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7" cy="7" r="5" fill="#E65454"/>
                      </svg>
                      <h3 className="locations-drop-link" style={{textAlign: "left"}} onClick={setLists}>{data}</h3>
                    </div>
                  )
                })}
              </div>
            </div>
            <div ref={show2Ref} className="locations-drop-text">
              <h3 className="drop-title">States</h3>
              <div className="drop-state">
                {states.map((data, index)=>{
                  return (
                    <div key={index} className="drop-state-links">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7" cy="7" r="5" fill="#2DC913"/>
                      </svg>
                      <h3 className="locations-drop-link" style={{textAlign: "left"}} onClick={setLists}>{data}</h3>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs width={width} dataSet={{
        centralData: central,
        bedsData: beds,
        mealData: meal,
        newsData: news,
        plasmaData: plasma,
        medsData: meds
      }}/>

      <div className="add-leads">
        <h3>Got some leads, add them here</h3>
        <a href="https://forms.gle/n8gfGxYXrSMgK2rm6" target="_blank">Submit resources</a>
      </div>

      <div className="footer">
        Made to help <span role="img" aria-label="stethoscope">🎈</span> by <span><a href="https://github.com/1502shivam-singh/" target="_blank" className="my-git">Shivam Singh</a></span>
        <div className="social-links">
          <a href="https://github.com/1502shivam-singh/" target="_blank"><FiGithub className="social-btn-git"/></a>
          <a href="https://twitter.com/Shivam15_" target="_blank"><FiTwitter className="social-btn-twt"/></a>
        </div>
      </div>
      
    </div>
  );
}
