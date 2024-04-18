import Header from "./Header"

function Signup() {

  return (
    <div>
      <Header />
      <div className="bg-slate-300 md:min-h-[92.7vh] min-h-screen">
        <div>
          <form className="flex flex-col justify-center items-center">
            <div className="pt-8 text-xl font-bold w-75">
              <label className="block" htmlFor="fname">First Name</label>
              <input className="" type="text" name="first" required />
            </div>
            <div className="pt-8 text-xl font-bold w-75">
              <label className="block" htmlFor="lname">Last Name</label>
              <input className="" type="text" name="last" required />
            </div>
            <div className="pt-8 text-xl font-bold w-75">
              <label className="block" htmlFor="email">Email</label>
              <input className="" type="email" name="email" required />
            </div>
            <div className=" bg-green-200 rounded-lg py-3 mt-8 px-10 justify-center">
              <button className="">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
