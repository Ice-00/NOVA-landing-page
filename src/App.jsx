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

            <div className="flex gap-4 mt-4 ml-1">
              <button className="bg-black text-white px-3 py-3 rounded">Start a New Project</button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded">View our work</button>
            </div> 

          </div>


          <div className="w-1/2 h-96 bg-black rounded-lg flex flex-col items-center justify-center ">
           <div className=" bg-white rounded-2xl border border-gray-300 px-4 py-2 w-40 text-black text-4xl font-bold text-center">NOVA</div>
           <div className="bg-white w-1/4 h-0.5 rounded mt-4 "></div>
          </div>

        </div>
      </section>

      <section className="max-w-full px-8 py-20 bg-gray-100">
        <h2 className="text-3xl font-bold">What We Do</h2>
        <p className="mt-4">We design and build modern websites, digital products, and automation that help businesses grow.</p>

        <div className="flex gap-4 mt-8">
          <div className="flex-1 bg-white rounded-lg p-6 shadow">
            <h3 className="text-xl font-bold">Web Design</h3>
            <p className="mt-2">We create visually stunning and user-friendly websites that engage your audience.</p>
          </div>

          <div className="flex-1 bg-white rounded-lg p-6 shadow">
            <h3 className="text-xl font-bold">Digital Products</h3>
            <p className="mt-2">We develop innovative digital products that solve real-world problems.</p>
          </div>

          <div className="flex-1 bg-white rounded-lg p-6 shadow">
            <h3 className="text-xl font-bold">Automation</h3>
            <p className="mt-2">We implement automation solutions that streamline your business processes.</p>
          </div>
          
          <div className="flex-1 bg-white rounded-lg p-6 shadow"> 
            <h3 className="text-xl font-bold">UI/UX Design</h3>
            <p className="mt-2">We create intuitive and engaging user interfaces that enhance the overall user experience.</p>
          </div>
        </div>
      </section>

      <section className="w-full px-8 py-20">
        <h2 className="text-3xl font-bold">Selected Works</h2>
        <p className="mt-4">Here are some of the projects we've worked on:</p>

        <div className="grid grid-cols-2 gap-4 mt-8">

          <div className="flex flex-col flex-1 bg-gray-300 rounded-lg h-64 overflow-hidden">
            
            <div className="flex-2 bg-gray-400  flex items-center justify-center">
              <p className="text-white text-lg font-bold">Coming Soon</p>
            </div>

            <h3 className="text-xl font-bold mt-2 ml-2">AutoPost</h3>
            <p className="mt-2 ml-2">A social media automation tool</p>


          </div>

          <div className="bg-gray-200 h-64 rounded-lg flex flex-col items-center justify-center">
           <h3 className="text-xl font-bold">NOVA</h3>
           <p className="mt-2">Digital studio landing Page </p>
          </div>  

          <div className="bg-gray-200 h-64 rounded-lg flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold">Coming Soon</h3>
            <p className="mt-2">Currently in development</p>
          </div>

          <div className="bg-gray-200 h-64 rounded-lg flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold">Coming Soon</h3>
            <p className="mt-2">New works will be displayed here</p>
          </div>

        </div>
      </section>


      <section className="w-full px-8 py-20 bg-gray-100">

        <div className="flex gap-8">

          <div className="w-1/2">

            <h2 className="text-3xl font-bold">About Us</h2>

            <p className="mt-4">  
              NOVA is a digital studio focused on creating modern websites,
              digital products, and automation that solve real problems.
            </p>

          </div>

          <div className="w-1/2">
            <h3 className="text-2xl font-bold mb-4">Our principles</h3>

            <ul>

              <li>
                <div className="flex gap-4">
                  <span className="text-gray-500">01</span>
                  <h3 className="text-lg font-semibold">Design</h3>
                </div>
                 <p className="ml-8"> Make it clear. Make it useful.</p>
              </li>

              <li className="mt-4">
                <div className="flex gap-4">
                  <span className="text-gray-500">02</span>
                  <h3 className="text-lg font-semibold">Build</h3>
                </div>
                <p className="ml-8"> Make it robust. Make it scalable.</p>
              </li>

              <li className="mt-4">
                <div className="flex gap-4">
                  <span className="text-gray-500">03</span>
                  <h3 className="text-lg font-semibold" >Automate</h3>
                </div>
                <p className="ml-8"> Make it efficient. Make it effortless.</p>
              </li>

            </ul>

          </div>

        </div>
      </section>

      <section className="w-full px-8 py-20">

      <h3 className="text-3xl font-bold">Contact Us</h3>
      <p className="mt-4 text-xl">Have a project in mind ? <br/> 
      Let's build something Together 
      </p>

      <button className="bg-black text-white px-3 py-3 rounded mt-4">
        Start a project →
      </button>

      </section>

      <footer className="w-full px-8 py-12 bg-black text-white">

      <div className=" flex justify-between items-center"> 

        <div>
          <h2>NOVA</h2>
          <p>
            Digital Studio <br />
            We build digital experiences that actually move.
          </p>
        </div>

        <div>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        
      </div>
      <p className="text-gray-500 text-sm text-center border-t border-gray-700 mt-8">
        @ 2026 NOVA. All rights reserved.
      </p>
      </footer>
    </>
  )
}

export default App