import React, { useState } from 'react';
import { SiGmail, SiInstagram } from "react-icons/si";
import { cn } from "@/lib/utils"; // Ensure this utility function is correctly implemented
import { Link } from 'react-router-dom';
import WebMenu from './WebMenu';
import MobileMenu from './MobileMenu';

const Navbar: React.FC = () => {
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
        {
            text: "Photo Gallery",
            path: "/photo-gallery"
        },
    ];

    const [open, setOpen] = useState(false);

    return (
        <nav className={cn("bg-white fixed top-0 left-0 w-full py-10 flex justify-between items-center animate-move-down px-20 z-50")}>
            <div>
                <img src="/MGEM-Logo.png" alt="MGEM" className="h-10" />
            </div>
            <WebMenu links={links} />
            <div className="flex justify-center w-full sm:hidden">
                <button
                    className="shadow-md px-5 py-2 rounded-full text-zinc-500"
                    onClick={() => setOpen(true)}
                >
                 Menu
                </button>
            </div>
            {open && (
                <MobileMenu
                    links={links}
                    close={() => setOpen(false)}
                />
            )}
            <div className="flex items-center gap-5">
                {socials.map((social, index) => {
                    const Icon = social.Icon;
                    return (
                        <a href={social.link} key={index} aria-label={social.label}>
                            <Icon className="w-5 h-5 hover:scale-125 transition-all" />
                        </a>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;
