import './index.css'



function App() {
  return (
    <>
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="text-2xl font-bold">NOVA</div>

        <div className="flex gap-4">
          <a href="#">Services</a>
          <a href="#">Work</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>


      <section className="max-w-full px-8 py-20"> 

        <div className="flex w-full gap-4"> 

          <div className="w-1/2">
            <h1 className="text-6xl font-bold">We build digital experiences that actually move.</h1>

            <p className="mt-4 ml-1">We design and build modern websites, digital products, and automation that help businesses grow.</p>

            <div className="flex gap-4 mt-4 ml-4">
              <button className="bg-black text-white px-3 py-3 rounded">Start a New Project</button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded">View our work</button>
            </div> 

          </div>


          <div className="w-1/2 h-96 bg-black">
            {/* visual  */}
          </div>

        </div>
      </section>

   </>
  )
}

export default App