import React from 'react'
import { FaRegFileAlt } from "react-icons/fa"
import { MdOutlineFileDownload } from "react-icons/md"
import { IoClose } from "react-icons/io5"
import { motion } from "framer-motion"

const Card = ({data, reference}) => {
  return (
    <motion.div 
    drag dragConstraints={reference}
    whileDrag={{scale: 1.2}} 
    dragElastic={1.3} 
    dragTransition={{bounceStiffness:400, bounceDamping:80}}
    className='relative w-60 h-72 flex-shrink-0 rounded-[40px] text-white px-8 py-10 bg-zinc-400/10 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-8 mb-3'>
                <h5>{data.fileSize}</h5>
                <span className='w-7 h-5 bg-zinc-300 rounded-full flex items-center justify-center'>
                {data.close ? <IoClose size=".7em" color='#000'/> : 
                <MdOutlineFileDownload size=".7em" color='#000'/>
                }                
                </span>
            </div>
                {data.tagDetails.isopen && ( 
                <div className={`tag w-full h-10 bottom-2 ${data.tagDetails.tagColor == "blue" ? "bg-blue-600" : "bg-green-600" } flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tagDetails.tagTitle}</h3>
                </div>) }
           
        </div>
    </motion.div>
  )
}

export default Card