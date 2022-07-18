import React from 'react';
import PropTypes from 'prop-types'

export default function Home(props) {
  return (
    <>
      <div className="Home">
        <h1 className='name'>Hello {props.name}</h1>
        <h5 className='course'>Welcome to {props.course} course</h5>
        <h5 className='timeline'>Timeline to finish {props.course} course is {props.timeline} days</h5>
        <button className='btn btn-primary'>Click Me</button>
      </div>
    </>
  )
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
  course: PropTypes.string,
  timeline: PropTypes.number,
}

Home.defaultProps = {
  name:'Set Name Here'
}
