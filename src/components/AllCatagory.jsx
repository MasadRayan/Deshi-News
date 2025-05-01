import React, { use } from 'react';
import { NavLink } from 'react-router';


const catagoryPromise = fetch('/categories.json')
    .then(res => res.json());

const AllCatagory = () => {
    const catagories = use(catagoryPromise);
    // console.log(catagories);

    return (
        <div>
            <h2 className='text-xl font-bold mb-5'>AllCatagory</h2>
            <div className='grid grid-cols-1 gap-4 w-11/12'>
                {
                    catagories.map(category => (
                        <NavLink 
                        className={'btn bg-base-100 border-0 shadow-none hover:bg-base-200 text-accent text-[17px] '}
                        key={category.id}
                        to={`/category/${category.id}`}
                        >
                            {category.name}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default AllCatagory;