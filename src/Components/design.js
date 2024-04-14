import React from 'react'
import coverimg from '../Assets/home-banner-background.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='bg-center h-[70vh] bg-cover relative'>
            <div className="absolute inset-0 bg-cover bg-center brightness-50" style={{ backgroundImage: `url(${coverimg})` }}></div>
            <div className="relative text-white py-12  lg:py-24 lg:px-8 text-center z-10 ">
                <div class="h-auto flex flex-col mb-5 lg:flex-row justify-center items-center">
                    <h1 className="text-4xl lg:text-6xl font-extrabold mb-2 lg:mb-10">Striving for </h1>
                    <h1 className="ml-4 text-4xl lg:text-6xl font-extrabold mb-2 lg:mb-10 bg-gradient-to-br from-purple-600 to-cyan-400 bg-clip-text text-transparent"> Progress </h1>
                </div>
                <div class="h-auto flex flex-col mb-5 lg:flex-row justify-center items-center">
                    <h1 className="text-4xl lg:text-6xl font-extrabold mb-2 lg:mb-10">Leading Towards </h1>
                    <h1 className="ml-4 text-4xl lg:text-6xl font-extrabold mb-2 lg:mb-10 bg-gradient-to-br from-purple-600 to-cyan-400 bg-clip-text text-transparent"> Perfection </h1>
                </div>
                <p className="text-medium lg:text-lg">You understand your customers better than anyone. We know that, and we can help you turn that knowledge into results.</p>
                <div className='flex mt-[50px] justify-center  '>
                    <Link to='/contact' class="bg-gradient-to-br from-cyan-400 to-purple-400  text-white transition-all ease-in-out text-lg hover:text-sky-100 py-4 px-6 rounded-full mx-10 flex items-center justify-center">
                        <span>Create with us</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h6.586l-2.293-2.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H6a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero;