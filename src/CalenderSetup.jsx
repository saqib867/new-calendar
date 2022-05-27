import React, { useEffect, useMemo, useState } from 'react'
import moment from 'moment';
import { Calendar, momentLocalizer, dateFnsLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch, useSelector } from 'react-redux';
import { selectCountry} from './reduxStore/countryReducer'


function CalenderSetup() {

  const [getTitle, setGetTitle] = useState('')
  const [getDate,setGetDate]=useState()
  const [getyear, setGetYear] = useState('')
  const [getMonth, setGetMonth] = useState("")
  const [getDay, setGetDay] = useState('')
  const [eventList, setEventList] = useState([])
  const { apiResponse, year } = useSelector(state => state.country)
 
  const getMo=1
  useEffect(() => {
    // setEventList([])
      let eventArr=[]
     apiResponse?.forEach(response => {
      
      let newEvent = {
        title:response.name,
        start: new Date(response.date.datetime.year,response.date.datetime.month-1, response.date.datetime.day),
        end:new Date(response.date.datetime.year,response.date.datetime.month-1, response.date.datetime.day)
      }
        
       eventArr.push(newEvent) 
       
     })   
    setEventList(eventArr)
    
    
},[apiResponse,getMonth])  //03003324125

  const localizer = momentLocalizer(moment);  

  return (
    <div>
          <div >
        <select className='list_of_months' onChange={e=>setGetMonth(e.target.value)}>
          <option>month</option>
          <option value={0}>January</option>
          <option value={1}>February</option>
          <option value={2}>March</option>
          <option value={3}>April</option>
          <option value={4}>May</option>
          <option value={5}>June</option>
          <option value={6}>July</option>
          <option value={7}>August</option>
          <option value={8}>September</option>
          <option value={9}>October</option>
          <option value={10}>November</option>
          <option value={11}>December</option>
        </select>
    </div>
      <Calendar
                selectable
                events={eventList}
                localizer={localizer}
                startAccessor="start" 
                endAccessor="end"
                
                date={new Date(new Date().getFullYear(), getMonth ? getMonth : new Date().getMonth(), 1)}
        onNavigate={(date) => {
                  console.log("date",date)
                }}
                style={{ height: 800, margin: 50 }}
                
                
            />
    </div>
  )
}

export default CalenderSetup