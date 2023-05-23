import React from 'react';


const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="w-[424px] mx-auto mt-20">
            <p className="section-subheading">---{subHeading}---</p>
            <h3 className='section-heading'>{heading}</h3>

        </div>
    );
};

export default SectionTitle;    