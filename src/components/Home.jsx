import React from 'react';
import HeroImage from '../assets/p3.jpeg';
import {FaArrowRight } from "react-icons/fa";
import {Link} from "react-scroll"

const Home = () => {
  return (
    
    <div name="home" className='flex items-center justify-center h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center 
        h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am a computer science undergrad</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                I'm a lifelong learner who loves to take on challenges and make a difference. I'm always looking for new opportunities to grow and improve, and I'm excited to see what the future holds.
                </p>

                <div>
                    <Link to='portfolio' smooth duration={500} className='group hover:cursor-pointer text-white w-fit px-6 py-3 my-2 pl-8 flex items-center rounded-md 
                    bg-gradient-to-r from-cyan-500 to-blue-500'>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300'>
                        <FaArrowRight size={20} className='mx-2'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home;
