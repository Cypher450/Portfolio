import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-xl mt-20'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto eveniet saepe, inventore laborum sapiente ex tempora nisi! Perferendis recusandae sit nemo esse totam aliquid omnis, distinctio cupiditate expedita. Maxime.
                </p>
                <br />
                <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ea repudiandae ducimus commodi consectetur magnam laboriosam nemo quas adipisci aspernatur, sit odit delectus earum labore ratione dignissimos, asperiores quisquam facilis, neque doloremque vel magni corporis doloribus! Mollitia, odio ex minima asperiores enim quos tenetur error necessitatibus nesciunt, cum hic optio!</p>
            </div>
        </div>
    )
}

export default About