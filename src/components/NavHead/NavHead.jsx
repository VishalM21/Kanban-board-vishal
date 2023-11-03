import React, { useEffect, useState } from "react";
import { TiThList } from "react-icons/ti";
import "./NavHead.css";
import { useDispatch, useSelector} from "react-redux";
import { selectData } from "../../Actions/DataAction";
import { BsSliders, BsChevronDown } from "react-icons/bs"; 

const getGroup = () => {
  if(localStorage.getItem("group")){
    return localStorage.getItem("group");
  }else{
    return "status";
  }
}

const getOrder = () => {
  if(localStorage.getItem("order")){
    return localStorage.getItem("order");
  }else{
    return "priority";
  }
}
const NavHead = () => {
  const [group, setgroup] = useState(getGroup());
  const [order, setorder] = useState(getOrder());
  const [displayOnClick, setDisplayOnClick] = useState(false);
  const dispatch = useDispatch();
  const {allTickets, allUser} = useSelector(state => state.DataReducer);

  const handlegroup = (e, valueBool) => {
    if(valueBool){
      setgroup(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem("group", e.target.value);
    }else{
      setorder(e.target.value);
    setDisplayOnClick(!displayOnClick);
    localStorage.setItem("order", e.target.value);
    }
  }

  useEffect(() => {
    if(group === 'user'){
      dispatch(selectData(group, {
        allTickets, allUser
      }, order))
    }else{
      dispatch(selectData(group, allTickets, order));
    }
  }, [allTickets, dispatch, group, allUser, order]);
 
  
  return (
    <div className="header" style={{paddingLeft : "10px"}}>
      <div className="displayButton">
        <button
          className="btn"
          onClick={() => setDisplayOnClick(!displayOnClick)}
        >
          {" "}
          {/* <TiThList /> Display
                <svg className="arrowdown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg> */}
      <BsSliders /> Display <BsChevronDown />
        </button>
        {displayOnClick && (
          <>
            <div className="dropOnClick">
              <div className="selectGroup ">
                <span style={{ color: '#838080' }}>Grouping</span>
                <select value={group} onChange={(e) => handlegroup(e, true)} className="selectStyle" name="group" id="group">
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="selectGroup">
                <span style={{ color: '#838080' }}>Ordering</span>
                <select value={order} onChange={(e) => handlegroup(e, false)} className="selectStyle" name="order" id="order">
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavHead;
