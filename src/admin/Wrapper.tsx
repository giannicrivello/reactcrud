import React, { PropsWithChildren } from 'react';
import Menu from '../components/Menu';
import Nav from '../components/Nav';

const Wrapper = (props: PropsWithChildren<any>) => {
    return (
        <div>
            <Nav />
            <Menu />
            <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-md-4'>
                {props.children}

            </main>
        </div>
    )
}

export default Wrapper;