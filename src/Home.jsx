import Header from "./Header"
import OppenheimerPoster from './assets/OppenheimerPoster.jpg'
import DunePartTwoPoster from './assets/DunePartTwoPoster.png'
import JawanPoster from './assets/JawanPoster.jpg'
import ExMachinePoster from './assets/ExMachinePoster.jpg'
import TheImitationGamePoster from './assets/TheImitationGamePoster.jpg'
import Tiger3Poster from './assets/Tiger3Poster.jpg'
import { Link } from "react-router-dom"
import Booking from "./Booking"
function Home() {
  const movies = {
    Oppenheimer: {
      name: "Oppeheimer",
      img: OppenheimerPoster,
      synopsis: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
      ticketPrice: 320,
    },
    Jawan: {
      name: "Jawan",
      img: JawanPoster,
      synopsis: "A prison warden recruits inmates to commit outrageous crimes that shed light on corruption and injustice - and that lead him to an unexpected reunion.",
      ticketPrice: 220,
    },
    ImitationGame: {
      name: "The Imitation Game",
      img: TheImitationGamePoster,
      synopsis: "During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians while attempting to come to terms with his troubled private life.",
      ticketPrice: 200,
    },
    ExMachina: {
      name: "ExMachima",
      img: ExMachinePoster,
      synopsis: "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.",
      ticketPrice: 200,
    },
    Dune2: {
      name: "Dune Part Two",
      img: DunePartTwoPoster,
      synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
      ticketPrice: 320,
    },
    Tiger3: {
      name: "Tiger 3",
      img: Tiger3Poster,
      synopsis: "Tiger and Zoya are back - to save the country and their family. This time it's personal.",
      ticketPrice: 200,
    },
  }
  return (
    <div>
      <Header />
      <div className=" bg-slate-300 md:min-h-[92.7vh] min-h-screen">
        <div className="px-5">
          <div className="font-semibold text-4xl px-[6vh] pt-10 text-black">Book a Movie</div>
          <div className="flex flex-row flex-wrap justify-evenly py-10 *:rounded-lg *:border-s-amber-700 *:border-4 ">
            <Link to="/booking" state={movies.Oppenheimer}>
              <img className="w-60 hover:scale-125 hover:ease-in-out hover:duration-500" src={OppenheimerPoster} />
            </Link>
            <Link to="/booking" state={movies.Jawan}>
              < img className="w-60 hover:scale-125 hover:ease-in-out hover:duration-500" src={JawanPoster} />
            </Link>
            <Link to="/booking" state={movies.ImitationGame}>
              <img className="w-60 hover:scale-125 hover:ease-in-out hover:duration-500" src={TheImitationGamePoster} />
            </Link>
            <Link to="/booking" state={movies.ExMachina}>
              <img className="w-60 hover:scale-125 hover:ease-in-out hover:duration-500" src={ExMachinePoster} />
            </Link>
            <Link to="/booking" state={movies.Dune2}>
              <img className="w-60 hover:scale-125 hover:ease-in-out hover:duration-500" src={DunePartTwoPoster} />
            </Link>
            <Link to="/booking" state={movies.Tiger3}>
              <img className="w-60 hover:scale-125 hover:ease-in-out hover:duration-500" src={Tiger3Poster} />
            </Link>
            {/* <img className="w-60 hover:scale-125 hover:ease-in hover:duration-200" src={JawanPoster} />
            <img className="w-60 hover:scale-125 hover:ease-in hover:duration-200" src={TheImitationGamePoster} />
            <img className="w-60 hover:scale-125 hover:ease-in hover:duration-200" src={ExMachinePoster} />
            <img className="w-60 hover:scale-125 hover:ease-in hover:duration-200" src={DunePartTwoPoster} />
            <img className="w-60 hover:scale-125 hover:ease-in hover:duration-200" src={Tiger3Poster} /> */}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
