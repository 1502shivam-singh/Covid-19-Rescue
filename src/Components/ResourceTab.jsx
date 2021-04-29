import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Card from "./Card";
import EmptyState from "./EmptyState";

function Tabs(props) {
  const tabRef = useRef(null);
  const linkRef = useRef(null);
  const listRef = useRef(null);

  let currTab = 1;
  let heightList = [];
  
  let tl = gsap.timeline({
    defaults: {
      // children inherit these defaults
      duration: 0.9,
      ease: "power2.inOut",
      onComplete: ()=>{
        gsap.to([tabRef.current],{
          height: heightList[currTab-1],
          overflowY: "hidden",
          duration: 0.5
        })
      }
    }
  });

  const style = {
    width: 6*props.width+"px"
  }

  let prev;

  useEffect(()=>{

    gsap.to([tabRef.current],{
      height: "",
      overflowY: "hidden",
      duration: 0.5,
      onComplete: ()=>{
        for(let i=0;i<6;i++){
          heightList.push(tabRef.current.children[i].clientHeight);
        }

        for(let i=0;i<6;i++) {
          let it = listRef.current.children;
          if(it[i].style.backgroundColor === "rgb(155, 152, 152)") {
            gsap.to([tabRef.current],{
              height: heightList[i],
              overflowY: "hidden",
              duration: 0.0
            });
            prev = it[i];
            currTab = i+1;
            break;
          }
        }
      }
    })        
  })

  function transitions(event) {
    const title = event.currentTarget.innerHTML;

    if(prev === null || title !== prev.innerHTML) {
      prev.style.color = "#84848f";
      prev.style.borderColor = "#84848f";
      prev.style.backgroundColor = "";
  
      event.currentTarget.style.borderColor = "rgb(193,193,193)";
      event.currentTarget.style.color = " rgb(15, 11, 11)";
      event.currentTarget.style.backgroundColor = "rgb(155, 152, 152)";

      const intViewportWidth = props.width;
      if (title === "All in one place") {  
        if (currTab !== 1) {
          currTab = 1;
          tl.to([tabRef.current], {
            x: 0
          });
        }
      } else if (title === "Medicine and Oxygen") {
        if (currTab !== 2) {
          currTab = 2;
          tl.to([tabRef.current], {
            x: -intViewportWidth
          });
        }
      } else if (title === "Meals") {
        if (currTab !== 3) {
          currTab = 3;
          tl.to([tabRef.current], {
            x: -intViewportWidth * 2
          });
        }
      } else if (title === "Beds") {
        if (currTab !== 4) {
          currTab = 4;
          tl.to([tabRef.current], {
            x: -intViewportWidth * 3
          });
        }
      } else if (title === "Plasma") {
        if (currTab !== 5) {
          currTab = 5;
          tl.to([tabRef.current], {
            x: -intViewportWidth * 4
          });
        }
      } else {
        if (currTab !== 6) {
          currTab = 6;
          tl.to([tabRef.current], {
            x: -intViewportWidth * 5
          });
        }
      }
      prev = event.currentTarget;
    }
  }

  return (
    <>
      <div className="resource-typelist">
        <hr />
        <div className="resource-list" ref={listRef}>
          <h3 className="central" onClick={transitions} ref={linkRef} style={{
              color: "rgb(15, 11, 11)",
              borderColor: "rgb(193,193,193)",
              backgroundColor: "rgb(155, 152, 152)"
          }}>
            All in one place
          </h3>
          <h3 className="meds" onClick={transitions}>
            Medicine and Oxygen
          </h3>
          <h3 className="meal" onClick={transitions}>
            Meals
          </h3>
          <h3 className="beds" onClick={transitions}>
            Beds
          </h3>
          <h3 className="plasma" onClick={transitions}>
            Plasma
          </h3>
          <h3 className="news" onClick={transitions}>
            News & Tips
          </h3>
        </div>
      </div>
      <div className="cards-table" ref={tabRef} style={style}>
        {/* dynamic stuff happens inside this, cards of resource */}
        <div className="tabs tab1">
          {
          props.dataSet.centralData.length !== 0 ? 
          props.dataSet.centralData.map((data, index) => {
            return (
              <Card
                key={index}
                title={data.title}
                link={data.link}
                img={data.img}
              />
            );
          }) : (
            <EmptyState/>
          )
          }
        </div>
        <div className="tabs tab2">
          {
          props.dataSet.medsData.length !== 0 ?
          props.dataSet.medsData.map((data, index) => {
            return (
              <Card
                key={index}
                title={data.title}
                link={data.link}
                img={data.img}
              />
            );
          }) : (
            <EmptyState/>
          )
          }  
        </div>
        <div className="tabs tab3">
          {
          props.dataSet.mealData.length !== 0 ?
          props.dataSet.mealData.map((data, index) => {
            return (
              <Card
                key={index}
                title={data.title}
                link={data.link}
                img={data.img}
              />
            );
          }) : (
            <EmptyState/>
          )
          }  
        </div>
        <div className="tabs tab4">
          {
          props.dataSet.bedsData.length !== 0 ?
          props.dataSet.bedsData.map((data, index) => {
            return (
              <Card
                key={index}
                title={data.title}
                link={data.link}
                img={data.img}
              />
            );
          }) : (
            <EmptyState/>
          )
          }  
        </div>
        <div className="tabs tab5">
          {
          props.dataSet.plasmaData.length !== 0 ?
          props.dataSet.plasmaData.map((data, index) => {
            return (
              <Card
                key={index}
                title={data.title}
                link={data.link}
                img={data.img}
              />
            );
          }): (
            <EmptyState/>
          )
          }          
        </div>
        <div className="tabs tab6">
          {
          props.dataSet.newsData.length !== 0 ?
          props.dataSet.newsData.map((data, index) => {
            return (
              <Card
                key={index}
                title={data.title}
                link={data.link}
                img={data.img}
              />
            );
          }) : (
            <EmptyState/>
          )
          }  
        </div>
      </div>
    </>
  );
}

export default Tabs;
