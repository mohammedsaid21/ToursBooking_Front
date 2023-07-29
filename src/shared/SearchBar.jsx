import React, { useRef } from 'react'
import './search-bar.css'
import { Col, Form, FormGroup } from 'reactstrap'
import { BASE_URL } from '../utils/config'
import { useNavigate } from 'react-router-dom'
import { notify } from '../components/Toast'

const SearchBar = () => {
   const locationRef = useRef('')
   const distanceRef = useRef(0)
   const maxGroupSizeRef = useRef(0)
   const navigate = useNavigate()

   const searchHandler = async () => {
      const location = locationRef.current.value
      const distance = distanceRef.current.value
      const maxGroupSize = maxGroupSizeRef.current.value

      if (location === "" || distance === 0 || maxGroupSize === 0) {
         return notify({ info: "All fields are required!", status: "failed" });
      } else {

         const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)
         if (!res.ok) notify({ info: "Check You Info", status: "failed" });

         const result = await res.json()
         notify({ info: "Operation the search is success", status: "success" });

         navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, { state: result.data })
      }
   }

   return <Col lg="12" title="search from here!">
      <div className="search__bar">
         <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
               <span><i className='ri-map-pin-line'></i></span>
               <div>
                  <h6>Location</h6>
                  <input type="text" className='bg-light p- ps-4 rounded-1' placeholder='Where are you going?' ref={locationRef} />
               </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
               <span><i className='ri-map-pin-time-line'></i></span>
               <div>
                  <h6>Distance</h6>
                  <input type="number" className='bg-light p- ps-4 rounded-1' placeholder='Distance k/m' ref={distanceRef} />
               </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-last'>
               <span><i className='ri-group-line'></i></span>
               <div>
                  <h6>Max People</h6>
                  <input type="number" className='bg-light p- ps-4 rounded-1' placeholder='0' ref={maxGroupSizeRef} />
               </div>
            </FormGroup>

            <span className='search__icon' type='submit' onClick={searchHandler}>
               <i className='ri-search-line'></i>
            </span>
         </Form>
      </div>
   </Col>
}

export default SearchBar