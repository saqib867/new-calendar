
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AllCountries from './AllCountries';
import './App.css';
import CalenderSetup from './CalenderSetup';

import ListOfYears from './ListOfYears';
function App() {
  const [country, setCountry] = useState('')
  //https://calendarific.com/api/v2/holidays?&api_key=2b9a4cd2555407086e548a84a975f13051c20bd1&country=PK&year=2019
  
  return (
    <div className="App">
      <AllCountries/>
      
      <CalenderSetup/>
    </div>
  );
}

export default App;
