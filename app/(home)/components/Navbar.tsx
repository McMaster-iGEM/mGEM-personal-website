import React from 'react';
import { SiGmail, SiInstagram } from "react-icons/si";
import { cn } from "@/lib/utils";
import {Link} from 'react-router-dom';
import WebMenu from './WebMenu';

const Navbar = () => {
    const socials = [
        {
            link: "mailto:igemmcmaster@gmail.com",
            label: "Gmail", 
            Icon: SiGmail
        },
        {
            link: "https://www.instagram.com/igemmcmaster/?hl=en",
            label: "Instagram",
            Icon: SiInstagram
        },
    ];

    const links = [
        {
            text: "Home",
            path: "/"            
        },
        {
            text: "Our Team",
            path: "/our-team"
        },
        {
            text: "Projects",
            path: "/projects"
        },
        {
            text: "Get Involved",
            path: "/get-involved"
        },
    ];

    return (
        <nav className={cn(" bg-white fixed top-0 left-0 w-full py-10 flex justify-between items-center animate-move-down px-20 z-50")}>
            <div>
                <img src="/MGEM-Logo.png" alt="MGEM" className="h-10"></img>
            </div>
            <WebMenu links={links} />
            <div className="flex items-center gap-5">
                {socials.map((social, index) => {
                    const Icon = social.Icon;
                    return (
                        <a href={social.link} key={index} aria-label={social.label}>
                            <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
                        </a>
                    );
                })}
            </div> 
        </nav>
    );
}

export default Navbar;
