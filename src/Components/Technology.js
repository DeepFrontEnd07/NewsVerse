import React from 'react'
import pic3 from './Images/pic3.jpg'


function Technology(props) {
  return (
    <>
    <div className="my-3">
              <div className="card" style={{width: "18rem"}}>
                <img src={!props.imageUrl?(pic3):props.imageUrl} />
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">
                    {props.desc}
                  </p>
                  <a href={props.newsUrl} target="_blank" className="btn btn-sm btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
    </>
  )
}

export default Technology
