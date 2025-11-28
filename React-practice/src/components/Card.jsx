import React from 'react'

const Card = (props) => {

  console.log(props);
  
  return (
     <div className="card">
      <div>
                <div className="top">
          <img
            src={props.brandlogo}
            alt=""
          />
          <button>Save</button>
        </div>
        <div className="center">
          <h3>
            {props.company} <span>{props.daysAgo}</span>
          </h3>
          <h2>{props.position}</h2>
          <div className="level">
            <button>{props.type[0]}</button>
            <button>{props.type[1]}</button>
          </div>
        </div>
      </div>
        <hr />
        <div className="bottom">
          <div className="detail">
            <h3>{props.salary}</h3>
            <p>{props.location}</p>
          </div>
          <button className="apply">Apply Now</button>
        </div>
      </div>
  )
}

export default Card
