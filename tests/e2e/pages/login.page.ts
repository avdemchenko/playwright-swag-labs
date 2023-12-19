import { page } from "../../../hook";

const USER_NAME_FIELD_CSS = '#user-name';
const PASSWORD_FIELD_CSS = '#password';
const LOGIN_BUTTON_CSS = '#login-button';

export const provideUsername = async (username: string) => {
    await page.fill(USER_NAME_FIELD_CSS, username);
}

export const providePassword = async (password: string) => {
    await page.fill(PASSWORD_FIELD_CSS, password);
}

export const clickLoginButton = async () => {
    await page.click(LOGIN_BUTTON_CSS);
}
