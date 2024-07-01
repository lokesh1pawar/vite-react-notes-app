import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    
    const ref = useRef(null)

    const data = [
{desc: "Lokesh demo lorem dolor sit amet consectetur, adipisicing elit. Consectetur porro numquam sunt. Perferendis commodi ?",
 fileSize: ".9mb",
 close: false,
 tagDetails: {isopen: true, tagTitle: "Download Now", tagColor: "green"},       
},
{desc: "Lokesh 3 demo lorem dolor sit amet consectetur, adipisicing elit. Consectetur porro numquam sunt. Perferendis commodi ?",
 fileSize: ".9mb",
 close: false,
 tagDetails: {isopen: false, tagTitle: "Download Now", tagColor: "green"},       
},
{desc: "Lokesh 2 demo lorem dolor sit amet consectetur, adipisicing elit. Consectetur porro numquam sunt. Perferendis commodi ?",
 fileSize: ".9mb",
 close: false,
 tagDetails: {isopen: true, tagTitle: "Upload", tagColor: "blue"},       
}
    ]



  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index)=>(
            <Card data={item} reference={ref} />
        ))}
     </div>
  )
}

export default Foreground