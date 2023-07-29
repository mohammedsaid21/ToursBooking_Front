import React from 'react'
import { Container, Row, Col, CardSubtitle } from 'reactstrap'

import Subtitle from '../../shared/subtitle'
import SearchBar from '../../shared/SearchBar'

import experienceImg from '../../assets/images/experience.png'

const Experience = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'} />
              <h2>With our all experience <br /> we will serve you</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <br /> Quas aliquam, hic tempora inventore suscipit unde. </p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Year experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Experience