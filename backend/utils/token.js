import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => { 

    // Generate JWT token with the given userId and sign it with the secret key
    // Sign the token using the secret key, and set expiration time (15 days)
    // 'process.env.JWT_SECRET' is the secret key used to sign the token
    // The token is then stored in a cookie with the 'jwt' key in the response object (res) with the maxAge parameter set to 15 days in milliseconds
    // The cookie is set to httpOnly, so it can only be accessed by the server-side and not by client-side JavaScript.
    // The cookie is set to 'Strict' SameSite mode, to prevent cross-site scripting (XSS) attacks.
    // The cookie is only sent over HTTPS in production environment.

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });
    
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, 
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV !== 'development'
    });
}

export default generateTokenAndSetCookie;