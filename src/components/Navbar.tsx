'use client';
import Link from "next/link"
import { useEffect, useState } from "react";
export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        if(isMenuOpen){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    },[isMenuOpen]);
    
    return <header className="baskerville bg-white border border-b-pink-400 py-4">
        <nav className="hidden xl:flex justify-around items-center">
            <ul className="flex justify-center items-center gap-10">
                <li><Link href="/about">About</Link></li>
                <li><Link href="">Services</Link></li>
                <li><Link href="">Contact</Link></li>
            </ul>
            <div className="text-2xl font-bold"><Link href="/">AYA.K</Link></div>
            <ul className="flex justify-center items-center gap-10">
                <li><Link href="">Count Your Calories</Link></li>
                <li><Link href="">Blog</Link></li>
            </ul>
        </nav>
        <nav className="xl:hidden">
            <div className="flex justify-between items-center px-8">
                <div className="text-2xl font-bold"><Link href="/">AYA.K</Link></div>
                <div
                    className="text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >☰</div>
            </div>
            <ul className={`${isMenuOpen ? 'h-[calc(100vh-4em)] flex flex-col justify-center items-center gap-4' : 'hidden'}`}>
                <li onClick={ () => setIsMenuOpen(false) }><Link href="/about">About</Link></li>
                <li onClick={ () => setIsMenuOpen(false) }>Services</li>
                <li onClick={ () => setIsMenuOpen(false) }>Contact</li>
                <li
                    className="text-center text-2xl font-bold border-2 border-y-pink-400 w-1/2 border-x-transparent py-4"
                    onClick={ () => setIsMenuOpen(false) }
                ><Link href="/">AYA.K</Link></li>
                <li onClick={ () => setIsMenuOpen(false) }>Count Your Calories</li>
                <li onClick={ () => setIsMenuOpen(false) }>Blog</li>
            </ul>
        </nav>
    </header>
}