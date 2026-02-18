import React from 'react'
import signupImg from "../assets/Images/signup.webp"
import Template from '../Components/Core/Auth/Template'
import { Helmet } from "react-helmet-async";

const Signup = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up | Shree Ji Divine Yatra</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Template
        title="Thinkly"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career..."
        image={signupImg}
        formtype="signup"
      />
    </>
  )
}

export default Signup
