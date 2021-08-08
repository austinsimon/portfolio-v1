import * as React from 'react';
import Preloader from './preloader';
import UnderDev from './sections/UnderDev';

const Layout = () => {
    return(
        <div className="content">
            <Preloader />
            <UnderDev />
        </div>
    );
}

export default Layout;