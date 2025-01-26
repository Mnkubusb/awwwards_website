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
        clipAnimation.fromTo('.about-image', {clipPath: 'path("M 865.212 112.06 L 865.212 112.06 Q 873.055 113.64 874.383 121.529 L 941.694 521.261 Q 943.022 529.15 935.035 529.602 L 608.724 548.074 Q 600.736 548.526 600.626 540.527 L 594.092 65.4239 Q 593.982 57.4247 601.824 59.0044 Z")'}, {clipPath: 'path("M 1520.59 -404.203 L 1520.59 -404.203 Q 1528.59 -404.203 1528.59 -396.203 L 1528.59 1125.8 Q 1528.59 1133.8 1520.59 1133.8 L -1.40625 1133.8 Q -9.40625 1133.8 -9.40625 1125.8 L -9.40625 -396.203 Q -9.40625 -404.203 -1.40625 -404.203 Z")'})
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
            <div className='mask-clip-path about-image'>
                <img src="/img/about.webp" alt='Background' className='absolute left-0 top-0 size-full object-cover' />
            </div>
            <div className='h-dvh w-screen absolute z-50'>
                <img src="/img/custom-home-intro-desktop-outer@lg.webp" alt="" className='size-full scale-125 sm:scale-75 object-cover object-center' />
            </div>
        </div>
    </div>
  )
}

export default About
