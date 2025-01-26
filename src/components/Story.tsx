"use client"
import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap'
import RoundedCorners from './RoundedCorners'
import Button from './Button'

const Story = () => {
    const frameRef = useRef<HTMLImageElement | null>(null)

    const handleMouseLeave = () => {
        const element = frameRef.current;
        gsap.to(element, {
            rotateX : 0,
            rotateY : 0,
            duration: 0.3,
            ease: 'power1.inOut'
        })
    }
    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return ;

        const { left, top, width, height } = element.getBoundingClientRect();

        const x = clientX - left;
        const y = clientY - top;

        const centerX = width / 2;
        const centerY = height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.3,
            transform: 'perspective(500px)',
            ease: 'power1.inOut'
        });
    }
    return (
        <div id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
            <div className='flex size-full flex-col items-center py-10 pb-24 '>
                <p className='font-general text-sm uppercase md:text-[10px] font-medium'>
                    THe open IP UNiverse
                </p>
                <div className='relative size-full '>
                    <AnimatedTitle title='The st<b>o</b>ry of <br/> a Hidden R<b>e</b>alm'
                        className='!text-white mt-5 pointer-events-none mix-blend-difference relative z-10 flex flex-col gap-1 text-7xl uppercase leading-[.9] sm:px-32 md:text-[6rem] font-zentry font-black'
                        sectionId='#story'
                    />
                    <div className='story-img-container'>
                        <div className="story-img-mask">
                            <div className='story-img-content'>
                                <img
                                    ref={frameRef}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                    src="/img/entrance.webp" alt="entrance"
                                    className='object-contain'
                                />
                            </div>
                        </div>
                        <RoundedCorners/>
                    </div>
                </div>
                <div className='-mt-80 flex w-full justify-center md:justify-end md:-mt-64 md:me-44'>
                    <div className='flex h-full w-fit flex-col items-center md:items-start'>
                        <p className='mt-3 max-w-sm font-robert-regular text-xs text-violet-50 md:text-start'>
                        Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite opportunities.
                        </p>
                        <Button id='realm' title='Discover Prolouge' className='mt-5' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story
