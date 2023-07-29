import React, { useContext, useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import '../styles/login.css'
import { Link, useNavigate } from 'react-router-dom'
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'
import { motion } from 'framer-motion'
import { notify } from '../components/Toast'

const Login = () => {
   const [credentials, setCredentials] = useState({
      email: "test@gmail.com",
      password: "test"
   })

   const { dispatch } = useContext(AuthContext)
   const navigate = useNavigate()

   const handleChange = e => {
      setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
   }

   const handleClick = async e => {
      e.preventDefault()

      dispatch({ type: 'LOGIN_START' })

      try {
         const res = await fetch(`${BASE_URL}/auth/login`, {
            method: 'post',
            headers: {
               'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(credentials)
         })

         const result = await res.json()
         // if (result.success) {
            console.log(result.data)

            dispatch({ type: "LOGIN_SUCCESS", payload: result.data })
            navigate('/')
            notify({ info: "User successfully Login", status: "success" });
         // } else {
         //    console.log(result)

         //    notify({ info: result.message, status: "failed" });
         // }
      } catch (err) {
         dispatch({ type: "LOGIN_FAILURE", payload: err.message })
      }
   }

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
      // exit={{ opacity: 1, transition: { duration: 0.1 } }}
      >
         <Container>
            <Row>
               <Col lg='8' className='m-auto'>
                  <div className="login__container d-flex justify-content-between">
                     <div className="login__img">
                        <img src={loginImg} alt="" />
                     </div>

                     <div className="login__form">
                        <div className="user">
                           <img src={userIcon} alt="" />
                        </div>
                        <h2>Login</h2>

                        <Form onSubmit={handleClick}>
                           <FormGroup>
                              <input type="email" placeholder='test@gmail.com' id='email' onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="password" placeholder='test' id='password' onChange={handleChange} required />
                           </FormGroup>
                           <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
                        </Form>
                        <p>Don't have an account? <Link to='/register'>Create</Link></p>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </motion.div>
   )
}

export default Login