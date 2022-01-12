import React, {useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import Header from './Header'
import ReviewForm from './ReviewForm'
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
  padding-left: 50px;
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

  const handleChange = (e) => {
    e.preventDefault()
    // console.log('name:', e.target.name, 'value', e.target.value)
    setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
    console.log('review:', review)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const airline_id = airline.data.id
    axios.post('/api/v1/reviews', {review, airline_id})
    .then(resp => {
      const included = [...airline.included, resp.data] // using spread operator
      setAirline({...airline, included})
      setReview({ title: '', description: '', score: 0 })
    })
    .catch(resp => {})
  }

  return (
  <Wrapper>
    {
      loaded &&
      <Fragment>
    <Column1>
      <Main>
      <Header
        attributes={airline.data.attributes}
        reviews={airline.included}
      />
      </Main>
      <div className="reviews"></div>
    </Column1>
    <Column2>
      <ReviewForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        attributes={airline.data.attributes}
        review={review}
      />
    </Column2>
          </Fragment>
      }
  </Wrapper>
  )
}

export default Airline
