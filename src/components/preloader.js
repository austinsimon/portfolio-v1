import React, { useEffect, useState } from 'react';
import LoaderIcon from "./icons/loader";
import "../styles/components/preloader.scss";
import anime from "animejs";

const Preloader = () => {

    const [preloaderDisplay, setPreloaderDisplay] = useState({display: 'flex'});

    useEffect(() => {

        const animationSequence = anime.timeline();

        const outlineWhite = ({
            targets: '.icon #white',
            loop: false,
            stroke: '#d5d4d4',
            direction: 'alternate',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutQuint',
            duration: 1500
        });

        const outlineBlue1 = ({
            targets: '.icon #blue1',
            loop: false,
            stroke: '#009fff',
            direction: 'alternate',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutQuint',
            duration: 1500
        });

        const outlineBlue2 = ({
            targets: '.icon #blue2',
            loop: false,
            stroke: '#009fff',
            direction: 'alternate',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutQuint',
            duration: 1500
        });

        const fillWhite = ({
            targets: '.icon #white',
            loop: false,
            direction: 'alternate',
            fill: '#d5d4d4',
            easing: 'easeInOutCirc',
            duration: 1500
        });
        const fillBlue1 = ({
            targets: '.icon #blue1',
            loop: false,
            direction: 'alternate',
            fill: '#009fff',
            easing: 'easeInOutCirc',
            duration: 1500
        });
        const fillBlue2 = ({
            targets: '.icon #blue2',
            loop: false,
            direction: 'alternate',
            fill: '#009fff',
            easing: 'easeInOutCirc',
            duration: 1500
        });

        const fadeOut = ({
            targets: '.loading-bg',
            opacity: ['100%', '0%'],
            easing: 'easeInOutCirc',
            duration: 500,
            complete: function() {
                setPreloaderDisplay({display: 'none'});
            },
            loop: false
        });

        animationSequence.add(outlineBlue1,0);
        animationSequence.add(outlineWhite,200);
        animationSequence.add(outlineBlue2,400);
        animationSequence.add(fillBlue1, 1500);
        animationSequence.add(fillWhite, 1700);
        animationSequence.add(fillBlue2, 1900);
        animationSequence.add(fadeOut, 3000);
    }, []);


    return (
        <div className="loading-bg" style={preloaderDisplay}>
            <LoaderIcon />
        </div>
    );
}

export default Preloader;