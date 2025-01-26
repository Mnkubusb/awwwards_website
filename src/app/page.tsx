import About from '@/components/About'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Story from '@/components/Story'
import React from 'react'

const Home = () => {
  return (
    <main className='relative w-screen min-h-screen overflow-x-hidden scroll-smooth bg-blue-75' >
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
    </main>
  )
}

export default Home
