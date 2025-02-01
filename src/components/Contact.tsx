import React from 'react'
import Button from './Button'

const ImageClipPath = ( { src , clipClass} : {src: string, clipClass: string} ) => (
    <div className={clipClass}>
        <img src={src} alt="Contact" />
    </div>
)

const Contact = () => {
    return (
        <div id='Contact' className='my-20 min-h-96 w-screen px-10'>
            <div className='relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden'>
                <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'>
                    <ImageClipPath src="/img/contact-1.webp" clipClass='contact-clip-path-1 ' />
                    <ImageClipPath src="/img/contact-2.webp" clipClass='contact-clip-path-2 lg:translate-y-40 translate-y-60' />
                </div>
                <div className='absolute left-16 -top-40 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20  lg:w-80'>
                <ImageClipPath src="/img/swordman-partial.webp" clipClass='absolute md:scale-125'/>
                <ImageClipPath src="/img/swordman.webp" clipClass='sword-man-clip-path md:scale-125'/>
                </div>
                <div className='flex flex-col items-center text-center '>
                    <p className='font-general text-[10px] uppercase '>
                        Join Zentry
                    </p>
                    <p className='special-font mt-10 w-full font-zentry font-black text-5xl leading-[0.9] md:text-[6rem]'>
                        Let&apos;s b<b>u</b>ild the <br/> new <b>e</b>ra <br/> of g<b>a</b>ming t<b>o</b>gether  
                    </p>

                    <Button title='Contact Us' className='mt-10 cursor-pointer justify-center flex items-center'  id='contact-button' />
                </div>
            </div>
        </div>
    )
}

export default Contact
