import React,{useRef} from 'react'
import './search-bar.css'
import {Col,Form,FormGroup} from "reactstrap";
const SearchBar = () => {
  const locationRef = useRef('')
  const distanceRef = useRef('')
  const maxGroupSizeRef = useRef('')


  const searchHandler = ()=>{
    const location = locationRef.current.value
    const distance = distanceRef.current.value
    const maxGroupSize = maxGroupSizeRef.current.value
    if(location==='' || distance==='' || maxGroupSize==='')
      return alert('all fields are required')
  }
  return (
   <Col lg='12'>

   <div className="search_bar">
    <Form style={{ 
        display: 'flex', 
        gap: '15px', 
        alignItems: 'center'
      }}>
        <FormGroup style={{display: 'flex',gap: '3px'}} className='form_group'>
          <span><i class="ri-map-pin-line"></i>
          </span>
          <div>
            <h6>Location</h6>
            <input type='text' placeholder='Where are you going?' ref={locationRef}/>
          </div>
        </FormGroup>
        <FormGroup style={{display: 'flex',gap: '3px'}} className='form_group'>
          <span><i class="ri-map-pin-time-line"></i>
          </span>
          <div>
            <h6>Distance</h6>
            <input type='number' placeholder='Distance k/m'ref={distanceRef}/>
          </div>
        </FormGroup>
        <FormGroup style={{display: 'flex',gap: '3px'}} className='form_group'>
          <span><i class="ri-group-line"></i>
          </span>
          <div>
            <h6>Max People</h6>
            <input type='number' placeholder='0'ref={maxGroupSizeRef}/>
          </div>
        </FormGroup>
        <span className='search_icon' type='submit' onClick={searchHandler}>
          <i class="ri-search-line"></i>
        </span>
      </Form>
   </div>
   </Col>
  )
};

export default SearchBar