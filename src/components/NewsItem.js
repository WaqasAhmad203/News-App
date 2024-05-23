import React from 'react'

const NewsItem = (props)=>{
  
    let {title, description, imgUrl, newsurl,author,date} = props; 
    return (
      <div className='my-3'>
        <div className="card" >
          <img src={!imgUrl?"https://images-stag.jazelc.com/uploads/theautopian-m2en/2025_Toyota_Camry_Alanis_King_TS.jpg":imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">by {!author? "Unknown": author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }

export default NewsItem