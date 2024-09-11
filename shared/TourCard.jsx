import React from 'react'
import {Card,CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import './Tour-Card.css';
import calculateAvgRating from '../utils/avgRating';
const TourCard = ({tour}) => {
    const {id,title,photo,city,price,featured,reviews} = tour;
    const {totlRating,avgRating} = calculateAvgRating(reviews)
    
  return (
    <div className="tour_card">
        <card>
            <div className="tour_img">
                <img src={photo} alt='tour-img'/>
                {featured &&<span>Featured</span>}
            </div>
        </card>
       <CardBody>
        <div className="card_top" style={{display:'flex',textAlign:'center',justifyContent:'space-between'}}>
            <span className='tour_location' style={{display:'flex',alignItems:'center',gap:1}}>
            <i class="ri-map-pin-line"></i>{city}
            </span>
            <span className='tour_rating' style={{display:'flex',alignItems:'center',gap:1}}>
            <i class="ri-star-fill"></i>{avgRating === 0 ? null : avgRating}
            {totlRating === 0 ? ('Not rated' ): (<span>({reviews.length})</span>
            )};
            </span>
        </div>
        <h5 className='tour_title'>
            <Link to={'/tours/${id}'}>{title}</Link>
    
        </h5>
        <div className="card_bottom" style={{display:'flex',textAlign:'center',justifyContent:'space-between', marginTop: 3}}>
            <h5>
                ${price} <span>/per person</span>
            </h5>
            <button className='btn booking_btn'>
                <Link to={'/tours/${id}'}>Book Now</Link>
            </button>
        </div>
       </CardBody>
    </div>
  );
};

export default TourCard