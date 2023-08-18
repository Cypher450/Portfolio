import React from 'react'
import Heart_ml from '../assets/portfolio/Machine-Learning-Project-on-Heart-Disease-Prediction.webp'
import todolist from '../assets/portfolio/to-do-list.jpeg'
import sentimentAnalysis from '../assets/portfolio/sent_analysis.png'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: todolist,
            demo_link: 'https://real-tan-hippo-cap.cyclic.app/',
            code_link: 'https://github.com/Cypher450/To-Do-List'
        },
        {
            id: 2,
            src: Heart_ml,
            demo_link: 'https://colab.research.google.com/drive/1d91ZntK8GiUFwK1Gnxl1HaL9GdqBTFMb?usp=sharing',
            code_link: 'https://colab.research.google.com/drive/1d91ZntK8GiUFwK1Gnxl1HaL9GdqBTFMb?usp=sharing'
        },
        {
            id: 3,
            src: sentimentAnalysis,
            demo_link: 'https://colab.research.google.com/drive/1iV7FLgz5Ths4k1jvxm25ZyKHmMSdCVwA?usp=sharing',
            code_link: 'https://colab.research.google.com/drive/1iV7FLgz5Ths4k1jvxm25ZyKHmMSdCVwA?usp=sharing'
        },
        // {
        //     id: 1,
        //     src: arrayDestruct
        // },
        // {
        //     id: 1,
        //     src: arrayDestruct
        // },
        // {
        //     id: 1,
        //     src: arrayDestruct
        // },
    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here!</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                {
                    portfolios.map(({ id, src, demo_link, code_link }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                                <div className='flex items-center justify-center'>
                                    <a href={demo_link}><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Demo</button></a>
                                    <a href={code_link}><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Code</button></a>
                                </div>
                            </div>
                     ))
                }
                </div>
            </div>
        </div>
    )
}

export default Portfolio