import { page } from "../../../hook";

const config = require('../../config/application.config.json')

export const openPage = async (pageName: string) => {
    const founded = config.urls.find((item: any) => {
        return item.name === pageName
    });
    await page.goto(founded.id);
}

export const getUser = async (userType: string) => {
    const founded = config.users.find((item: any) => {
        return item.name === userType
    });
    return founded.id;
}

export const getPassword = async () => {
    return config.password;
}