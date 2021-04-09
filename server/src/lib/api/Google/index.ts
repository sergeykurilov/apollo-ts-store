require("dotenv").config();
const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
    process.env.G_CLIENT_ID,
    process.env.G_CLIENT_SECRET,
    `${process.env.PUBLIC_URL}/login`
);


export const Google = () => {

    const scopes = [
        'https://www.googleapis.com/auth/blogger',
        'https://www.googleapis.com/auth/calendar'
    ];

}