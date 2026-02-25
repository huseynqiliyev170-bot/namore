import directus from "@library/directus-rest-api";
import { readSingleton } from "@directus/sdk";

export const getConfigSettings = async () => {
    try {
        const configData = await directus.request(
            readSingleton("settings")
        );
        //console.log(configData);
        return configData;
    } catch (error) {
        console.log(error);
    }
};

export const getConfigStrings = async () => {
    try {
        const configData = await directus.request(
            readSingleton("strings")
        );
        //console.log(configData);
        return configData;
    } catch (error) {
        console.log(error);
    }
};

export const getConfigHeader = async () => {
    try {
        const configData = await directus.request(
            readSingleton("header", {
                fields: ["*.*.*"]
            })
        );
        //console.log(configData);
        return configData;
    } catch (error) {
        console.log(error);
    }
};

export const getConfigFooter = async () => {
    try {
        const configData = await directus.request(
            readSingleton("footer", {
                fields: ["*.*.*"]
            })
        );
        //console.log(configData);
        return configData;
    } catch (error) {
        console.log(error);
    }
};