"use client"
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
interface AnimatedTitleProps{
    title:string,
    className?:string
    sectionId?:string
}

const AnimatedTitle = ( { title , className , sectionId  }:AnimatedTitleProps) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "100 bottom", 
                    end: 'center bottom',
                    toggleActions: "play none none reverse",
                }
            });
            titleAnimation.to('.animated-word', { transform:'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)', opacity: 1, stagger: 0.05, ease: 'power2.inOut' })
        }, containerRef)
        return () => ctx.revert();
    }, [])
    

    return (
        <div 
        id={sectionId}
        ref={containerRef}
        className={className}>
            <div>
              {title.split("<br/>").map((line,index)=>(
                <div key={index} className='flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3'>
                    {line.split(' ').map((word, index) => (
                        <span key={index} className='animated-word text-[3rem] md:text-[6rem]'
                         dangerouslySetInnerHTML={{ __html : word}} />
                    ))}
                </div>
              ))}
            </div>
        </div>
    )
}

export default AnimatedTitle
