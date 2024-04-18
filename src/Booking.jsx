import React from 'react'
import Header from './Header';
// import OppenheimerPoster from './assets/OppenheimerPoster.jpg'
// import DunePartTwoPoster from './assets/DunePartTwoPoster.png'
// import JawanPoster from './assets/JawanPoster.jpg'
// import ExMachinePoster from './assets/ExMachinePoster.jpg'
// import TheImitationGamePoster from './assets/TheImitationGamePoster.jpg'
// import Tiger3Poster from './assets/Tiger3Poster.jpg'
import { useLocation } from 'react-router-dom'

function Booking(props) {
    const location = useLocation();
    const movie = location.state;
    console.log(movie)
    return (
        <div>
            <Header />
            <div className='bg-slate-300 md:min-h-[92.7vh] flex flex-row justify-center min-h-screen'>
                <div className=' flex flex-row flex-wrap justify-center md:w-2/3'> {/*container of all elements- row-[col-[title,img], col- [synopsis,upi]]*/}
                    <div className='md:w-1/3 py-5 items-center flex flex-col flex-wrap'> {/* title,img */}
                        <div className="pt-5 font-semibold text-4xl text-black">{movie.name}</div>
                        <img className="pt-5 w-60" src={movie.img} />
                    </div>
                    <div className='md:w-2/3 py-5 flex flex-col flex-wrap *:pt-5 px-3'> {/* synopsis,UPI_QR */}
                        <div className="font-semibold text-3xl text-wrap text-black">
                            {movie.synopsis}
                        </div>
                        <div className='text-3xl'>
                            Ticket Price: {movie.ticketPrice}- Get Yours Now!
                        </div>
                        <div className='text-3xl'>
                            Pay Here!
                            <img src='' alt='UPI_QR' />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="bg-slate-300 md:min-h-[92.7vh] min-h-screen">
                <div className="px-5 flex flex-row">
                    <div>
                        <div className="font-semibold text-4xl px-[6vh] pt-10 text-black">{movie.name}</div>
                        <img className="w-60 my-5 ml-10" src={movie.img} />
                    </div>
                    <div className="font-semibold text-3xl px-[6vh] pt-10 text-black">{movie.synopsis}
                        <div>
                            <div className='px-10 py-10 text-3xl'>Ticket Price: {movie.ticketPrice} Get Yours Now!</div>
                            <div className='px-10 pb-10 text-3xl'>Pay Here!
                                <img src='' alt='mera UPI' />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Booking