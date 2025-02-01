import React from 'react'
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const links = [
    { href: "https://discord.com", icon: <FaDiscord /> },
    { href: "https://twitter.com", icon: <FaTwitter /> },
    { href: "https://github.com", icon: <FaGithub /> },
    { href: "https://www.linkedin.com", icon: <FaLinkedin /> },
]

const Footer = () => {
    return (
        <footer className='w-screen bg-voilet-300 py-4 text-black'>
            <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
                <p className='text-sm font-robert-medium text-center md:text-left'>
                    &copy;Nova 2024. All rights reserved.
                </p>
                <div className='flex justify-center gap-4 md:justify-start'>
                    {links.map(( link ) => (
                        <a key={links.indexOf(link)} href={link.href} target="_blank" rel="noopener noreferrer" className='hover:text-blue-50 text-black transition-colors duration-500 ease-in-out'>
                            {link.icon}
                        </a>
                    ))}
                </div>
                <a href="#privacy_policy" target="_blank" rel="noopener noreferrer" className='text-sm text-center hover:underline md:text-right font-robert-medium mr-5'>
                    Privacy Policy
                </a>
            </div>
        </footer>
    )
}

export default Footer
