import React from 'react'
import Header from './Header'

function About() {
    return (
        <div>
            <Header />
            <div className="bg-slate-300 md:min-h-[92.7vh] min-h-screen">
                <div className='border-2 border-red-500 p-4 md:w-2/3 text-center w-full m-auto font-medium text-2xl'>
                    <div className='py-5'>
                        A fully responsive movie ticket booking website made using ReactJS and TailwindCSS. The route "/booking" is the same for all movies. It displays data dynamically based on the movie chosen by the user.
                    </div>
                    <a href='https://github.com/KrishnaV2/Movie-Booking-Site' className='underline'>Github</a>
                </div>
            </div>
        </div>
    )
}

export default About
