import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"
import { BsFillPersonLinesFill } from "react-icons/bs"

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/seshadev-sahoo/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/Cypher450',
        },
        {
            id: 3,
            child: (
                <>
                    Gmail <BiLogoGmail size={30} />
                </>
            ),
            href: 'mailto:seshadev01012001@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/Resume.pdf',
            style: 'rounded-br-md',
            download: true,
        }
    ]


    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed text-white'>
            <ul>
                {links.map((link) => (
                    // eslint-disable-next-line
                    <li key={link.id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-8px] hover:rounded-md duration-300  bg-gray-500 ${link.style}'}>
                        <a href={link.href} className='flex justify-between items-center w-full text-white' 
                        download={link.download} 
                        target='_blank'
                        rel="noreferrer">
                            {link.child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks
