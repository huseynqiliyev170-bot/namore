"use client";

import { useEffect } from "react";

import { ScrollAnimation } from "@common/scrollAnimation";
import { BasicProvider } from "@context/basicContext";

const ThemeLayoutAnimation = ({ children }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            ScrollAnimation();
        }, 100);
    
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <BasicProvider>{children}</BasicProvider>
        </>
    );
};
export default ThemeLayoutAnimation;