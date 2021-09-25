import React from 'react'
import { Card } from 'react-bootstrap'
import Stars from './Stars';


const ReviewCard = ({ review }) => {
  return (
    <>
    <Card className='my-3 p-3 rounded'>
      <Card.Body>
        <div href={`/review/${review.id}`}>
          <Card.Title as='h6'>
            {review.name}
          </Card.Title>
        </div>
          <Card.Text>
            <Stars value={review.rating}/>
          </Card.Text>
          <Card.Text>
            {review.comment}
          </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default ReviewCard
