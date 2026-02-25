"use client";

import { useContext, useEffect } from 'react';
import { BasicContext } from "@context/basicContext";

const ThemeContext = ( { stringsData, settingsData } ) => {
    const { strings, setStrings, settings, setSettings } = useContext(BasicContext);

    useEffect(() => {
        setStrings(stringsData);
        setSettings(settingsData);
    }, []);

    return (
        <></>
    );
};
export default ThemeContext;