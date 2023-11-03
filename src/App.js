import React, { useEffect } from 'react'
import './App.css';
import NavHead from './components/NavHead/NavHead';
import DashBoard from './components/DashBoard/DashBoard';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './Actions/DataAction';

const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    <div  >
      <NavHead/>
      <hr  />
      <DashBoard/>
    </div>
   ) : console.error("Something went wrong")
}

export default App