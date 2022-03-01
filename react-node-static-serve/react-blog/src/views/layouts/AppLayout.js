import React from 'react';

import Nav from '../../components/themes/Nav';
import Header from '../../components/themes/Header';
import Footer from '../../components/themes/Footer';

const AppLayout = ({children}) => {
    return (
        <>
            <Nav/>
            <Header/>
            
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    {children}
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default AppLayout;