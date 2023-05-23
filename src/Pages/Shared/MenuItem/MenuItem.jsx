import React from 'react';

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px] mr-8" src={image} alt="" />
            <div >
                <h3 className="uppercase menu-item-title">{name}----------</h3>
                <p className="menu-recipe">{recipe}</p>
            </div>
            <p className="text-[#BB8506] font-inter font-normal text-xl">${price}</p>
        </div>
    );
};

export default MenuItem;