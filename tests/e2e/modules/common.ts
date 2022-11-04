import { page } from "../../../hook";

const config = require('../../config/application.config.json')

const openPage = async (pageName: string) => {
    const founded = config.urls.find((item: any) => { return item.name === pageName });
    await page.goto(founded.id);
}

export { openPage }