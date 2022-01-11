import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import Header from './Header'
import styled from 'styled-components'

const Airline = (props) => {
  const [airline, setAirline] = useState({})
  const [review, setReview] = useState({})
  const params = useParams();
  const [loaded, setLoaded] = useState(false)


  useEffect(()=>{
    const url = `/api/v1/airlines/${params.slug}.json`
    axios.get(url)
      .then( resp => {
        setAirline(resp.data)
        setLoaded(true)
      })
      .catch( resp => console.log(resp) )
  }, [])

  return (
  <div className="wrapper">
    <div className="column">
      {
        loaded &&
        <Header
          attributes={airline.data.attributes}
          reviews={airline.included}
        />
      }
        <div className="reviews"></div>
    </div>
    <div className="column">
        <div className="review-form">[Review form goes here]</div>
    </div>
  </div>
  )
}

export default Airline
