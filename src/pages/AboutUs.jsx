import React from 'react'
import Subtitle from './../shared/subtitle'
import { motion } from 'framer-motion'
import { Container } from 'reactstrap'

const AboutUs = () => {


    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
            className="py-14">
            <Container className='mb-5'>
                <div className="hero__content ">
                    <div className="conatiner">

                        <div className="hero__subtitle d-flex align-items-center">
                            <Subtitle subtitle={'Know Before You Go'} />
                        </div>
                        <h1>Traveling opens the door to creating <span className='hightlight'> memories</span></h1>
                        <p className='h4'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Ullam ipsum nobis asperiores soluta voluptas quas voluptates.
                            Molestiae tempora dignissimos, animi praesentium molestias perferendis
                            porro expedita delectus. Soluta natus porro.
                        </p>
                    </div>
                </div>
            </Container>

            <div className="interior_13">
                <div className="responsive-container-block big-container">
                    <div className="responsive-container-block container">
                        <div className="responsive-container-block">
                            <div className="orange-card">
                            </div>
                            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-ipadp-12 wk-desk-6" id="i7wk">
                                <div className="card-content">
                                    <p className="text-blk section-head">
                                        Get in touch
                                    </p>
                                    <p className="text-blk sub-head">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    </p>
                                    <form className="form-box">
                                        <input className="input" name="Email" placeholder="Your Email" />
                                        <button className="submit-btn">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-ipadp-12 wk-desk-6 img-one" id="iwgx">
                                <img className="img-sofa3" id="isvcn" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Mask%20Group%20215.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="contact contact-d etails section -block">
                <div className="container d-flex flex-column flex-lg-row">

                    <div className="leftSide">
                        <h2 className="mb-1">contact us</h2>
                        <div>
                            <h5 className="mb-4"><strong>address:</strong> Palestine, Gaza, Khanyounis</h5>
                            <h5 className="mb-4"><strong>phone:</strong> +972595572743</h5>
                            <h5 className="mb-4"><strong>mobile tel:</strong> +972595572743</h5>
                        </div>
                        <span></span>

                        <span></span>
                    </div>

                    <div className="rightSide">
                        <form id="contact-form" >
                            <label htmlFor="name">full name</label>
                            <input name="name" placeholder="Enter the full name" type="text" required />

                            <label htmlFor="email">email</label>
                            <input name="email" placeholder="Enter the full email" type="email" required />

                            <label htmlFor="phone">phone</label>
                            <input name="phone" placeholder="Enter the full phone" type="text" />

                            <label htmlFor="message">message</label>
                            <textarea
                                rows="6"
                                placeholder="write your message"
                                name="message"
                                required

                            ></textarea>
                            <button type="submit" className="submit-btn btn-primary">Send It</button>
                        </form>
                    </div>

                </div>
            </div> */}
        </motion.div>
    )
}

export default AboutUs

