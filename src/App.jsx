import logo from '/logo.png'
import Banner from './Banner'
import Mechanism from './Mechanism'
import Footer from './Footer'
function App() {


  return (
    <>
      <div >

        <img className='container mx-auto w-[500px]' src={logo} alt="" />
        <Banner></Banner>

        <h1 className='uppercase lg:text-lg text-sm font-semibold text-center mt-14'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </h1>

        <Mechanism></Mechanism>

        <Footer></Footer>

      </div>
    </>
  )
}

export default App
