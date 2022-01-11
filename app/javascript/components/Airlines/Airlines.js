import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Airlines() {
  const [airlines, setAirlines] = useState([]);

  useEffect(()=> {
    axios.get('/api/v1/airlines.json')
    .then( resp => console.log(resp))
    .catch( resp => console.log(resp))
  }, [airlines]);

  return(
    <div><h1>This is the Airlines#index view for the app</h1></div>
  )
}

export default Airlines
