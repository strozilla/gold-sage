import React from 'react';
import { Col, Row } from 'react-bootstrap'
import reviews from '../reviews';
import ReviewCard from './ReviewCard';

const Review = () => {
  return (
       <div id="reviewSec">
          <span as='h1'><strong>REVIEWS</strong></span>
          <Row>
          {reviews.map((review) => (
              <Col>
                <ReviewCard review={review}/>
              </Col>
          ))}
          </Row>
          </div>
  )
}

export default Review