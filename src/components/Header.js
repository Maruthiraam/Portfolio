import  { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'
export default function Header()
{   const[ToggleMenu,setToggleMenu]=useState(false);
    return <header className="flex justify-between px-5 py-2 bg-primary">
        <a className="font-bold text-black"href="#">Ram Vibe</a>
        <nav className="hidden md:block">
        <ul className="flex  text-white">
            <li><a href="#">HOME</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Connect with</a></li>
        </ul>
        </nav>
        {ToggleMenu &&<nav className="block md:hidden ">
        <ul className="flex flex-col  text-white phone-nav">
            <li><a href="#">HOME</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Connect with</a></li>
        </ul>
        </nav>}
        <button onClick={()=> setToggleMenu(!ToggleMenu)} className="block md:hidden"><Bars3Icon className='text-black h-7'/></button>
    </header>
}