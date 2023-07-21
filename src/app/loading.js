import React from 'react';

const loading = () => {
    return (
        <section className='h-screen flex justify-center items-center'>
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        </section>
    );
};

export default loading;