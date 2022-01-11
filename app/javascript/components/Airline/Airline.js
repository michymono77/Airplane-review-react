import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"

const Airline = (props) => {
  const [airline, setAirline] = useState({})
  const [review, setReview] = useState({})
  const params = useParams();


  useEffect(()=>{
    const url = `/api/v1/airlines/${params.slug}.json`
    axios.get(url)
      .then( resp => console.log(resp) )
      .catch( resp => console.log(resp) )
  }, [])

  return (
  <div>This is the Airlines#show view for the app</div>
  )
}

export default Airline
