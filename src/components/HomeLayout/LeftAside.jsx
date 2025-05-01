import React, { Suspense } from 'react';
import AllCatagory from '../AllCatagory';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-bars loading-xl "></span>}>
                <AllCatagory></AllCatagory>
            </Suspense>
        </div>
    );
};

export default LeftAside;