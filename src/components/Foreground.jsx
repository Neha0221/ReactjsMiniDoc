import React, { useState } from "react";
import Card from "./Card";


function Foreground(){
    const data=[
        {
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize:".9mb",
            close:false,
            tag:{isOpen:true, tagTitle:"Download", tagColor:"green"},
        },

        {
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize:".9mb",
            close:false,
            tag:{isOpen:true, tagTitle:"Download", tagColor:"blue"},
        },

        {
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize:".9mb",
            close:false,
            tag:{isOpen:true, tagTitle:"Download", tagColor:"green"},
        },

        {
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize:".9mb",
            close:false,
            tag:{isOpen:true, tagTitle:"Download", tagColor:"blue"},
        },

        {
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize:".9mb",
            close:false,
            tag:{isOpen:true, tagTitle:"Download", tagColor:"green"},
        },

        {
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize:".9mb",
            close:false,
            tag:{isOpen:true, tagTitle:"Download", tagColor:"blue"},
        },

        {
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize:".9mb",
            close:false,
            tag:{isOpen:true, tagTitle:"Download", tagColor:"green"},
        },

        {
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize:".9mb",
            close:false,
            tag:{isOpen:true, tagTitle:"Download", tagColor:"blue"},
        },
    ];
    return(
        <div className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
            {data.map((item,index)=>(
                <Card data={item}/>
            ))}
            
        </div>
    )
}

export default Foreground