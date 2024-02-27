import banner from '/2.png'
import novel from '/1.png'

const Banner = () => {
    return (
        <div>
            <div className='lg:flex justify-center lg:gap-40'>
                <img className='lg:w-[400px] lg:h-[800px]  h-[300px] container lg:mx-0 mx-auto' src={novel} alt="" />
                <div>
                    <div className='lg:text-lg text-sm  my-5 lg:w-[1000px] '>
                        <h1 className='font-bold'> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
                        <ul className='list-disc lg:ml-10 ml-5'>
                            <li>     C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                            <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                        </ul>
                    </div>
                    <img className='lg:w-[1000px] ' src={banner} alt="" />

                    <div>
                        <p className='lg:text-lg text-sm ml-5 lg:w-[1000px]'>
                            Government of India has awarded the <span className='font-bold'> "National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;