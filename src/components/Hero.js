import man from '../asserts/baymax.png';
import { FaLinkedin } from "react-icons/fa";
  
export default function Hero() {
  return (
    <section className="flex flex-col md:flex px-5 py-32 bg-secondary justify-center" >
      <div className="w-1/2 flex flex-col"><h1 className=" text-white text-6xl font-venom-font">🤙🏼Hi,<br/>
                I am <span className="text-black ">Hare</span> shri <span className="text-black ">Raam</span>.N
        <p className="text-2xl">
        I am currently studying BTech 2nd Year.<br/> I am passionate about Robotics and cool Tech stuff👾.
      </p>
      </h1>
      <div classNmae="flex py-15 pr-5">
        <a href='#'className='pr-5 hover:text-white'><FaLinkedin size={40}/></a>
      </div>
      </div>
      <div className="flex w-1/2 justify-center">
        <img src={man} className="md:w-1/3"/>
      </div>
    </section>
  );
}
