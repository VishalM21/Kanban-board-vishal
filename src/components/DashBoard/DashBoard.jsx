import React from "react";
import { useSelector } from "react-redux";
import { DiCodeigniter } from "react-icons/di";
import { AiOutlinePlus } from "react-icons/ai";
import {PiCellSignalLowFill} from "react-icons/di";
import {BsReception3,BsReception1,BsReception2} from "react-icons/bs";
import {IoCheckmarkDoneCircleSharp} from "react-icons/io5";
import "./DashBoard.css";
import Card from "../Card/Card";
import IMG1 from '../../img/IMG1.png'
import IMG2 from '../../img/IMG2.png'
import IMG3 from '../../img/IMG3.png'
import IMG4 from '../../img/IMG4.png'
import IMG5 from '../../img/IMG5.png'
import IMG6 from '../../img/IMG6.png'
import IMG7 from '../../img/IMG7.png'
import IMG8 from '../../img/IMG8.png'
import IMG9 from '../../img/IMG9.png'
import IMG10 from '../../img/IMG10.png'

import {BsReception4,BsPlusLg} from "react-icons/bs";
import { BiCircle,BiDotsHorizontalRounded,BiSolidPieChartAlt} from "react-icons/bi";
import { MdCancel, MdOutlinePriorityHigh,MdSmsFailed } from "react-icons/md";
import {FcHighPriority} from "react-icons/fc"

const func = (ph) => {
  if(ph === "IMG1") return IMG1;
  if(ph === "IMG2") return IMG2;
  if(ph === "IMG3") return IMG3;
  if(ph === "IMG4") return IMG4;
  if(ph === "IMG5") return IMG5;
  if(ph === "IMG6") return IMG6;
  if(ph === "IMG7") return IMG7;
  if(ph === "IMG8") return IMG8;
  if(ph === "IMG9") return IMG9;
  if(ph === "IMG10") return IMG10;
}


const DashBoard = () => {
  var group = localStorage.getItem("group");
  var order = localStorage.getItem("order");
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          let x = elem[index].sta;
          const randomNumber2 = Math.floor(Math.random() * 10) + 1;
          let ph  = "IMG"+randomNumber2;
          let tick=elem[index].title;
        
          return (
            <>
              <div key={index} className="dashCardContainer">
               <div className="cardHeading1">
                  <div
                   
                  >
                    
                  {!user ? group === "status" ? elem[index].title === "Todo" ? (
                      <BiCircle />
                    ) : elem[index].title === "In progress" ? (
                      <BiSolidPieChartAlt />
                    ) : elem[index].title === "Backlog" ? (
                      <MdSmsFailed />
                    ) : elem[index].title === "Done" ? (
                      <IoCheckmarkDoneCircleSharp />
                    ) : (
                      <MdCancel />
                    ) : group === "priority" ? elem[index].title === "High" ? (
                      <BsReception4 />
                    ) : elem[index].title === "Medium" ? (
                      <BsReception3 />
                    ) : elem[index].title === "Low" ? (
                      <BsReception2 />
                    ) : elem[index].title === "Urgent" ? (
                      <FcHighPriority />
                    ) : (
                      <MdOutlinePriorityHigh />
                    ) : (
                      <BsReception4 />
                    ) :(
                      <>
                        <div className="image">
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                            }}
                            src={func(ph)}
                            alt="UserImage"
                          />
                        </div>
                      </>
                    )}
                    <span style={{margin: "0px 3px",
    position: "relative"}}>
                      {" "}
                      {elem[index]?.title} {elem[index]?.value?.length}
                    </span>
                  </div>
                  <div >
                    <AiOutlinePlus />{" "}
                    <span style={{ letterSpacing: "2px" }}>...</span>
                  </div>
                </div>
                <div className="carrd selectList">
                  {elem[index]?.value?.map((elem, ind) => {
                    const randomNumber = Math.floor(Math.random() * 10) + 1;
                   
                    return (
                     
                      <Card id={elem.id} tick={elem.status} title={elem.title} group={group} tag={elem.tag} status={x} photo={"IMG"+randomNumber}/>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default DashBoard;
