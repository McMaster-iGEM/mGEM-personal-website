import React from 'react';
import { Link } from 'react-router-dom';

interface LinkData {
    text: string;
    path: string;
}

const WebMenu = ({ links }: { links: LinkData[] }) => {
    return (
        <div className="text-zinc-400 flex gap-6 items-center shadow-md border border-zinc-300 rounded-full px-5 py-3 bg-white">
            {links.map(({ text, path }: LinkData, index: number) => (
                <Link
                    key={index}
                    to={path} // Use "to" instead of "href" for React Router's Link
                    className="hover:text-red-800 cursor-pointer"
                >
                    {text}
                </Link>
            ))}
        </div>
    );
}

export default WebMenu;
