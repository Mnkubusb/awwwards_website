"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: "center center",
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing:true,
            }
        })
        clipAnimation.fromTo('.about-image', {clipPath: 'polygon(40% 14%, 60% 17%, 62% 78%, 39% 77%)'}, {clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'})
    });

  return (
    <div id='about' className='min-h-screen w-screen'>
        <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
            <h2 className='font-general text-sm uppercase md:text-[10px] font-bold text-black'>
                Wecome to Zentry
            </h2>
            <AnimatedTitle title='Disc<b>o</b>ver the World&apos;s <br/> largest shared <b>a</b>dventure' className='!text-black text-8xl' />
            <div className='about-subtext text-black '>
                <p>The Metagames begins-your life, now an epic MMORPG</p>
                <p className='text-gray-400 text-sm text-medium'>
                    Zentry is the unified play layer that bridges players, agentic AI, and blockchains,creating a new economic paradigm
                </p>
            </div>
        </div>
        <div className='h-dvh w-screen' id='clip'>
            <div className='mask-clip-path about-image'  >
                <img src="/img/about.webp" alt='Background' className='absolute left-0 top-0 size-full object-cover' />
            </div>
            <div className='h-dvh w-screen absolute z-50'>
                <img src="/img/custom-home-intro-desktop-outer@lg.webp" alt="" className='size-full scale-75 sm:scale-125 object-cover object-center' />
            </div>
        </div>
    </div>
  )
}

export default About
