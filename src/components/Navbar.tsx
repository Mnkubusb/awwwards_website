"use client"
import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

const NavItems = ["Nexus" , "Vault" , "Prolouge" , "About", "Contact"]

const Navbar = () => {
    const navRef = useRef(null);
    const audioElement = useRef(null);
    const [isAudioOn, setIsAudioOn ] = useState(false); 
    const [isIndicatorActive , setIsIndicatorActive ] = useState(false);
    const { y: scrollY } = useWindowScroll();
    const [ lastScrollY, setLastScrollY ] = useState(0);
    const [isNavVisible , setIsNavVisible] = useState(true);
    const toggleAudioIndicator = () => {
        setIsAudioOn((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    }
    useEffect(() => {
        if(scrollY === 0){
            setIsNavVisible(true);
            navRef.current?.classList.remove('floating-nav');
        }else if (scrollY > lastScrollY){
            setIsNavVisible(false);
            navRef.current?.classList.add('floating-nav');
        }else if(scrollY < lastScrollY ){
            setIsNavVisible(true);
            navRef.current?.classList.add('floating-nav');
        }
        setLastScrollY(scrollY);
    },[scrollY , lastScrollY])

    useEffect(() => {
            gsap.to(navRef.current , { y: isNavVisible ? 0 : -100 , opacity: isNavVisible ? 1 : 0 , duration: 0.2 , ease: 'power1.inOut' })
    },[isNavVisible])

    useEffect(() => {
        if(isAudioOn){
            audioElement.current?.play();
        }else{
            audioElement.current?.pause();
        }

    }, [isAudioOn])


    

    return (
        <div ref={navRef} className=' fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 ease-in-out sm:inset-x-6'>
            <header className='absolute top-1/2 w-full -translate-y-1/2'>
                <nav className='flex size-full items-center justify-between p-4'>
                    <div className='flex items-center gap-7'>
                        <img
                            src='/img/logo.png'
                            alt='logo'
                            className='w-10'
                        />
                        <Button id='product' title='Products' className='!bg-violet-50 !py-2 !px-4 md:flex gap-2 items-center hidden text-sm pb-1' rightIcon={<TiLocationArrow />} />
                        <Button id='whitepaper' title='WhitePaper' className='!bg-violet-50 !py-2 !px-4 md:flex gap-2 items-center hidden text-sm pb-1'  />
                    </div>
                    <div className='flex h-full items-center'>
                        <div  className='hidden md:flex gap-5 '>
                            {NavItems.map((item, index )=>(
                                <Button key={index} 
                                    id='product'
                                    title={item}
                                    className='!bg-transparent !py-2 !px-4 md:flex gap-2 items-center hidden text-sm pb-1 !text-white'   
                                />
                            ))}
                        </div>
                        <button className='ml-10 flex items-center gap-[2px] space-x-0.5 ' 
                        onClick={toggleAudioIndicator}
                        >
                            <audio ref={audioElement} src="/audio/loop.mp3" className='hidden' loop />
                           {[1,2,3,4].map((bar )=>(
                                <div key={bar} className={`indicator-line  ${isIndicatorActive ? 'active' : ''}`}  style={{animationDelay: `${bar * 0.2}s` }}/>
                           ))} 
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
