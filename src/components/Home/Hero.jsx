import React from 'react'
import { Container, Row, Col, CardSubtitle } from 'reactstrap'
import heroImg from '../../assets/images/hero-img01.jpg'
import heroImg02 from '../../assets/images/hero-img02.jpg'
import heroVideo from '../../assets/images/hero-video.mp4'
import worldImg from '../../assets/images/world.png'

import Subtitle from '../../shared/subtitle'
import SearchBar from '../../shared/SearchBar'

const Hero = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'} />
                <img src={worldImg} alt="" />
              </div>
              <h1>Traveling opens the door to creating <span className='hightlight'> memories</span></h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ullam ipsum nobis asperiores soluta voluptas quas voluptates.
                Molestiae tempora dignissimos, animi praesentium molestias perferendis
                porro expedita delectus. Soluta natus porro.
              </p>
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box hero__video-box mt-4">
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>

          <SearchBar />
        </Row>
      </Container>
    </section>
  )
}

export default Hero