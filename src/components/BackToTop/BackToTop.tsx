import { Fragment, useEffect, useState } from "react";
import './BackToTop.css'; // Add this import for the CSS
import React from "react";

export const BackToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const jumpToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <Fragment>
            {show ? (
                <div className="back-to-top-container">
                    <button
                        onClick={jumpToTop}
                        className="back-to-top-button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="back-to-top-icon"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                    </button>
                </div>
            ) : null}
        </Fragment>
    );
};