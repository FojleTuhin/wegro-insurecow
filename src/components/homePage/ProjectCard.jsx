import Image from 'next/image';
import React from 'react';

const ProjectCard = () => {
    return (
        <div className='bg-[#fff] p-2 rounded-md'>
            <div className="h-[260px] max-w-[418px] min-w-[300px] bg-[url('https://backend.wegro.global/storage/product/251/mbFiAXpUNnUTKU0B3jmUzzV9tDm20Rofe40n0QsF.jpg')] bg-cover bg-no-repeat rounded-lg">
                <Image src='' alt='' height={260} width={418}/>

            </div>
        </div>
    );
};

export default ProjectCard;