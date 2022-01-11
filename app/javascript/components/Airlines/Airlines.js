import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

function Airlines() {
  const [airlines, setAirlines] = useState([]);

  useEffect(()=> {
    axios.get('/api/v1/airlines.json')
    .then( resp =>
      {setAirlines(resp.data.data)
      })
    .catch( resp => console.log(resp))
  }, [airlines.length]);

  const list = airlines.map( item => {
    return (<li key={item.attributes.name}>{item.attributes.name}</li>)
  })

  return(
    <Fragment>
    <div><h1>This is the Airlines#index view for the app</h1></div>
    <ul>{list}</ul>
    </Fragment>
  )
}

export default Airlines
