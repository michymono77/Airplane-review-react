import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import Header from './Header'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Column1 = styled.div`
  background: white;
  height: 100vh;
  overflow: scroll:
`

const Column2 = styled.div`
  background: black;
  height: 100vh;
  overflow: scroll:
`
const Main = styled.div`
  left-padding: 50px;
`

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
  <Wrapper>
    <Column1>
      <Main>
    {
      loaded &&
      <Header
        attributes={airline.data.attributes}
        reviews={airline.included}
      />
    }
      </Main>
      <div className="reviews"></div>
    </Column1>
    <Column2>
      <div className="review-form">[Review form goes here]</div>
    </Column2>
  </Wrapper>
  )
}

export default Airline
