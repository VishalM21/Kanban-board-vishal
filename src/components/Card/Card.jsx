import React from 'react'
import './Card.css';
import {IoCheckmarkDoneCircleSharp} from "react-icons/io5";
import { BiCircle,BiDotsHorizontalRounded,BiSolidPieChartAlt} from "react-icons/bi";
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
const func = (photo) => {
    if(photo === "IMG1") return IMG1;
    if(photo === "IMG2") return IMG2;
    if(photo === "IMG3") return IMG3;
    if(photo === "IMG4") return IMG4;
    if(photo === "IMG5") return IMG5;
    if(photo === "IMG6") return IMG6;
    if(photo === "IMG7") return IMG7;
    if(photo === "IMG8") return IMG8;
    if(photo === "IMG9") return IMG9;
    if(photo === "IMG10") return IMG10;
}
const fucn2=(k)=>{
    if(k==1)return "green";
    if(k==2)return "yellow";
    if(k==3)return "grey";
}

const Card = ({id,tick, title,group,tag, status,photo}) => {
    const randomNumber22 = Math.floor(Math.random() * 3) + 1;
    let k = randomNumber22;
    console.log(tick);

  return (
    <div className="cardContainer">
        <div className="cardHeading2">
            <span style={{textTransform : "uppercase",color: "grey"}} >{id}</span>
            {status ?
            (<div  className="image">
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src={func(photo)} alt="UserImage" />
                <div className="status" style={{background:fucn2(k)}}></div>
            </div>) : <div></div>}
        </div>
        <div className="title" style={{fontWeight : 200,display:"flex"}} >
            <div>
            {group !== 'status' && (
  tick === 'Done' ? (
    <IoCheckmarkDoneCircleSharp style={{ height: "15px", width: "15px", marginRight:'2px'}} />
  ) : tick === 'In progress' ? (
    <BiSolidPieChartAlt style={{ height: "15px", width: "15px" ,marginRight:'2px'}} />
  ) : (
    <BiCircle style={{ height: "15px", width: "15px",marginRight:'2px' }} />
  )
)}

            </div>
            
            <p>{title}</p>
        </div>
        <div className="cardTags">
        
        {group !== 'priority' && (
       <div className="tags"> ... </div>
      )}
      
            {
                tag?.map((elem, index) => {
                    if(tag[index]==='Feature Request'){
                    return <div key={index} className="tags"> <span>⚪</span> {elem}</div>
                    }
                })
            }
        </div>
    </div>
  )
}

export default Card;