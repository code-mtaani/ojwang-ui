import jwt_decode from 'jwt-decode';


export const getUser_uid = () =>
{
    // get logged_in_user_token from local storage
    const session = JSON.parse( localStorage.getItem( 'session' ) )
    const loggedInUserToken = session.access

    // decode the token and extract user_uid

    const decodedToken = jwt_decode( loggedInUserToken )

    const user_uid = decodedToken.user_uid
    return user_uid
    
}
