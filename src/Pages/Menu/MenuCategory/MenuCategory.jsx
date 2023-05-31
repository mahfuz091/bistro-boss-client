import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className='pt-8'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='max-w-[1320px] mx-auto'>
                <div className="grid md:grid-cols-2 gap-10 my-16">
                    {
                        items.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
                <Link to={`/order/${title}`}>
                    <div className="text-center"> <button className="btn btn-outline border-0 border-b-4 mt-4 mb-5">Order Now</button></div>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;