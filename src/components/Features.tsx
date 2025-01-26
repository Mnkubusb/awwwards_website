"use client"
import React, { useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti';

const BentoTilt = ({ children, className }: { children: React.ReactNode, className?: string }) => {

    const [transformStyle , setTransformStyle] = useState('');
    const itemRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = ( e : React.MouseEvent) => {
        if(!itemRef.current) {
            return;
        }

        const { left , top , width , height } = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY =( e.clientY - top) / height;

        const tiltX = (relativeY - 0.5)* 5;
        const tiltY = (relativeX - 0.5)* -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
        setTransformStyle(newTransform);
    }
    const handleMouseLeave = () => {
        setTransformStyle('');
    }
    return (
        <div ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} 
        style={{ transform: transformStyle }}
        className={className}>
            {children}
        </div>
    )
}

interface BentoCardProps {
    scr: string;
    title?: React.ReactNode;
    description?: string;
    isComingSoon?: boolean;
}

const BentoCard = ({ scr, title, description }: BentoCardProps) => {
    return (
        <div className='relative size-full'>
            <video className='size-full absolute left-0 top-0 object-center object-cover ' autoPlay muted loop src={scr}
            />
            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
                <div>
                    <h1 className='bento-title special-font'>
                        {title}
                    </h1>
                    <p className='mt-3 font-robert-regular max-w-64 text-xs md:text-base'>
                        {description}
                    </p>
                </div>
            </div>

        </div>
    )
}



const Features = () => {
    return (
        <section className='bg-black pb-52'>
            <div className='container mx-auto px-3 md:px-10'>
                <div className='px-16 py-32 '>
                    <p className='font-robert-regular text-lg text-blue-50'>
                        Explore the zentry universe
                    </p>
                    <p className='max-w-md font-robert-regular text-lg text-blue-50/50'>
                        Immerse yourself in an IP-rich product universe where AI-driven gamification and hyper-personalization lead humans & AI into a global play economy
                    </p>
                </div>
                <BentoTilt className='border-hsla relative mx-auto mb-7 h-96 w-[85vw] overflow-hidden rounded-md md:h-[75vh]'>
                    <BentoCard scr="/videos/feature-1.mp4"
                        title={<>radia<b>n</b>t</>}
                        description="The game of games transforming your in-game actions across Web2 & Web3 titles into a rewarding adventure."
                    />
                </BentoTilt>
                <div className='grid h-[145vh] grid-cols-2 grid-rows-3 gap-7 w-[85vw] mx-auto'>
                    <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 '>
                        <BentoCard scr="/videos/feature-2.mp4"
                        title={<>zig<b>m</b>a</>}
                        description='The NFT collection merging Zentry’s IP, AI, and gaming—pushing the boundaries of NFT innovation.'
                        />
                    </BentoTilt>
                    <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
                        <BentoCard scr='/videos/feature-3.mp4' 
                        title={<>n<b>e</b>xus</>}
                        description='The player portal uniting humans & AI to play, compete, earn and showcase—gamifying social & Web3 experiences.'
                        />
                    </BentoTilt>
                    <BentoTilt className='bento-tilt_1 row-span-1 me-32 md:col-span-1  md:me-0'>
                        <BentoCard scr='/videos/feature-4.mp4' 
                        title={<>Az<b>u</b>l</>}
                        description='The agent of agents elevating agentic AI experience to be more fun and productive.'
                        />
                    </BentoTilt>
                    <BentoTilt className='bento_tilt_2'>
                        <div className='flex size-full flex-col justify-between bg-voilet-300 p-5 rounded-lg '>
                            <h1 className='bento-title special-font text-2xl text-black max-w-64'>
                                M<b>o</b>re co<b>m</b>ing s<b>o</b>on
                            </h1>
                            <TiLocationArrow className='m-5 scale-[5] self-end text-black' />
                        </div>
                    </BentoTilt>
                    <BentoTilt className='bento_tilt_2'>
                        <video className='size-full object-center object-cover ' autoPlay muted loop src='/videos/feature-5.mp4'
                        />
                    </BentoTilt>
                </div>
            </div>
        </section>
    )
}

export default Features
