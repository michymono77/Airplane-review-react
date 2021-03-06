import React, {Fragment, useState, useEffect} from 'react'
import styled from 'styled-components'
import Gray from './Stars/Gray'
import Hover from './Stars/Hover'
import Selected from './Stars/Selected'

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 16px;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  background: #fff;
`
const RatingBox = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;
  margin-top: 8px;
  input {
    display: none;
  }

  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml,${Gray}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
  }

  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml,${Selected}");
  }

    input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml,${Hover}");
  }
`
const Field = styled.div`
  border-radius: 4px;

  input {
    min-height: 50px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 0 0 12px 0;
    padding: 12px;
    width:100%;
  }

  textarea{
    width: 100%;
    min-height: 80px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
  }
`
const Wrapper = styled.div`
  background: #fff;
  padding: 16px;
  background: #000;
  height:100vh;
  padding-top: 96px;
`
const SubmitBtn = styled.div`
  text-align: center;
  color: #fff;
  background: #90EE90;
  border-radius: 4px;
  padding: 8px;
  margin-top: 16px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: ease-in-out 0.1s;
  border: 1px solid #fff;
    &:hover {
      background:#74C274;
      color: #000;
      border: 1px solid #fff;
    }
`
const Headline = styled.div`
  padding:16px;
  color: white;
  font-size: 24px;
  font-weight: bold;
`
const RatingTitle = styled.div`
  font-size: 24px;
  padding-bottom: 16px;
  font-weight: bold;
`
const Error = styled.div`
  width: 100%;
  color: rgb(255, 80, 44);
  border: 1px solid rgb(255, 80, 44);
  border-radius: 4px;
  margin-top: 8px;
  text-align:center;
  padding: 4px;
`

// const ReviewForm = (props) => {
//   const ratingOptions = [5,4,3,2,1].map ( (score, index) => {
//     return (
//       <Fragment key={Math.random() * Math.random()}>
//         <input type="radio" value={3} checked={props.review.score == score} name="rating" onChange={() => console.log('selected:', score)} id={`rating-${score}`} />
//       <label onClick={props.setRating.bind(this, score)}></label>
//       </Fragment>
//     )
//   })

const ReviewForm = (props) => {
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <Fragment key={index}>
        <input type="radio" value={score} checked={props.review.score == score} onChange={() => console.log('onChange')} name="rating" id={`rating-${score}`} />
        <label onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    )
  })

  return(
    <Wrapper>

      <form onSubmit={props.handleSubmit}>
        <Headline>Have an experience with {props.attributes.name}? Share your Review.</Headline>
        <Field>
          <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title" />
        </Field>
        <Field>
          <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review Description" />
        </Field>
        <Field>
          <RatingContainer>
            <RatingTitle className="rating-title-text">Rate This Airline</RatingTitle>
            <RatingBox>
              {ratingOptions}
            </RatingBox>
          </RatingContainer>
        </Field>
        <button type="submit">Submit Your Review</button>
        {
          props.error &&
          <Error>{props.error}</Error>
        }
      </form>
    </Wrapper>
  )
}

export default ReviewForm
