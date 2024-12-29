import Image from 'next/image';
import React from 'react';

const Card = ({img, heading, subheading}) => {
    return (
        <div className='max-w-[434px]'>
            <Image src={img} alt='img' height={285} width={434} className='mb-8 bg-contain rounded-md'/>
            <p className='mb-[10px] text-[24px] font-semibold '>{heading}</p>
            <p className='text-[#8C8C8C] text-[20px] font-medium'>{subheading}.</p>

        </div>
    );
};

export default Card;