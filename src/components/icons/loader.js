import * as React from 'react';
import "../../styles/components/icons/Loader.scss";

const LoaderIcon = () => {
    return (
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 110">
            <path id="blue1" className="st0" d="M27.2,74.5v18.3c0,4-3.2,7.2-7.2,7.2l0,0c-4,0-7.2-3.2-7.2-7.2V74.5c0-4,3.2-7.2,7.2-7.2l0,0C24,67.3,27.2,70.5,27.2,74.5z"/>
            <path id="blue2" className="st0" d="M58.4,36.3L58.4,36.3c0,4,3.2,7.2,7.2,7.2l0,0c4,0,7.2-3.2,7.2-7.2l0,0c0-4-3.2-7.2-7.2-7.2l0,0C61.6,29.1,58.4,32.3,58.4,36.3z"/>
            <path id="white" className="st1" d="M72.8,62.6v30.2c0,2-0.8,3.8-2.1,5.1c-1.3,1.3-3.1,2.1-5.1,2.1c-4,0-7.2-3.2-7.2-7.2V62.6H27.2c-8,0-14.4-6.5-14.4-14.4V24.5c0-4,1.6-7.6,4.2-10.2S23.2,10,27.2,10h38.4c2,0,3.8,0.8,5.1,2.1c1.3,1.3,2.1,3.1,2.1,5.1c0,4-3.2,7.2-7.2,7.2H27.3v23.7h31.1C66.3,48.1,72.8,54.6,72.8,62.6z"/>
        </svg>
    );
}

export default LoaderIcon;