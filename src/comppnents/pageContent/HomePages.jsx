import React from 'react'
import About from '../home/about/About'
import Blog from '../home/blog/Blog'
import Branding from '../home/Branding'
import Home from '../home/homes/Home'
import Skill from '../home/Skill'
import Wrapper from '../home/Wrapper'
import WrapperOne from '../home/WrapperOne'

const HomePages = () => {
  return (
    <>
       <Home />
       <Branding />
       <About />
       <Blog /> 
       <Wrapper />
       <Skill />
       <WrapperOne />
    </>
  )
}

export default HomePages
