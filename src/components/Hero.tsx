"use client"
import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import RoundedCorners from './RoundedCorners';

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
    const [CurrentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, sethasClicked] = useState(false);
    const [isLoading , setIsLoading] = useState(false);
    const [loadedVideos , setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVdRef = useRef(null);

    useEffect(() => {  
        if(loadedVideos === totalVideos - 2) {
            setIsLoading(false);
        }
    },[loadedVideos])

    useGSAP(() => {
        if (hasClicked) {
            gsap.set('#next-video', { visibility: 'visible' });
            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
            })
            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                width: 0,
                height: 0,
                duration: 1.5,
                ease: 'power1.inOut',
            })
        }
    }, { dependencies: [CurrentIndex], revertOnUpdate: true });

    useGSAP(() => {
        // gsap.set('#video-frame', {
        //     clipPath: 'polygon(14% 0, 78% 0, 100% 100%, 0% 100%)',
        // });
        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            ease: 'power1.inOut',
        })
        gsap.to('#video-frame', {
            clipPath: 'polygon(14% 0, 75% 0, 88% 89%, 2% 88%)',
            rotateX: 9,
            borderRadius: '8px',
            duration: 5,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            }
        })
    })
    useGSAP(() => {
        gsap.from('#video-frame', {
            clipPath: 'polygon(14% 0, 75% 0, 88% 89%, 2% 88%)',
            ease: 'power1.inOut',
        })
        gsap.to('#video-frame', {
            clipPath: 'polygon(14% 0, 75% 0, 85% 90%, 10% 60%)',
            duration: 2,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'bottom center',
                scrub: true,
            }
        })
    })

    const upcomingVide0Index = (CurrentIndex % totalVideos) + 1;

    const getVideoSrc = (index: number) => `/videos/hero-${index}.mp4`;

    const handleMiniVdClick = () => {
        sethasClicked(true);
        setCurrentIndex(upcomingVide0Index);
    }

    const handleLoadedVideo = () => {
        setLoadedVideos((prev) => prev + 1);
    }

    return (
        <>
        <div className='relative h-dvh w-screen overflow-x-hidden'>
            {isLoading && (
            <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50'>  
                <div className='three-body'>
                    <div className='three-body__dot'></div>
                    <div className='three-body__dot'></div>
                    <div className='three-body__dot'></div>
                </div>
            </div>
        )}
            <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden bg-blue-75'>
                <div>
                    <div className='mask-clip-path absolute-center z-[999] size-64 cursor-pointer overflow-hidden rounded-lg '>
                        <div className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 rounded-lg ' onClick={handleMiniVdClick} >
                            <video ref={nextVdRef} src={getVideoSrc(CurrentIndex + 1 === totalVideos + 1 ? 1 : CurrentIndex + 1)} loop muted id='current-video' className='size-64 origin-center scale-[3] object-cover object-center rounded-lg'
                            onLoadedData={handleLoadedVideo}
                            />
                        </div>
                    </div>
                    <video ref={nextVdRef} src={getVideoSrc(CurrentIndex)} loop muted id='next-video'
                        autoPlay
                        className='absolute-center z-20 invisible absolute size-64 object-cover object-center '
                        onLoadedData={handleLoadedVideo}
                    />
                    <video src={getVideoSrc(CurrentIndex === totalVideos - 1 ? 1 : CurrentIndex)} autoPlay loop muted className='absolute left-0 top-0 size-full object-cover object-center'
                   onLoadedData={handleLoadedVideo}
                    />
                </div>
                <h1 className='special-font hero-heading absolute bottom-5 right-5 text-blue-75 z-40'>
                    G<b>a</b>ming
                </h1>
                <div className='left-0 top-0 absolute z-40 size-full'>
                    <div className='mt-24 px-4 sm:px-10'>
                        <h1 className='special-font hero-heading text-blue-100'>
                            Redefi<b>n</b>e
                        </h1>
                        <p className='mb-5 max-w-64 font-robert-regular text-blue-100 font-medium text-base'>
                            Enter the Metagame <br /> Unleash the play Economy
                        </p>
                        <Button id="watch-trailer" title="Watch Trailer" leftIcon={<TiLocationArrow size={20} color='black' />}
                           className="!bg-yellow-300 flex-center gap-1"
                        />
                    </div>
                </div>
            </div>
            <h1 className='special-font hero-heading absolute bottom-5 right-5 text-black'>
                G<b>a</b>ming
            </h1>
       </div>
       <RoundedCorners />
        </>
    )
}

export default Hero
