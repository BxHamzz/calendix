import nextAppSession from 'next-app-session';

//your session data type

type MySessionData = {
    grantId?: string;
    email?: string;
}

export const session = nextAppSession<MySessionData>({
    //Options
    name: 'calendix_session',
    secret: process.env.SECRET ,
    
});