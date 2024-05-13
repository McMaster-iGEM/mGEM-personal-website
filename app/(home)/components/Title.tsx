import React from 'react';

export default function Title({text, className}: {text:string, className?:string}){
    return (
        <div className={className}>
            <div>
                <h1 className="text-2xl font-bold hover:text-red-800 transition-all">
                    {text}
                </h1>
            </div>
        </div>
    )
}
