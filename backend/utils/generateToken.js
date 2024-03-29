import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie= (userId, res)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: '15d'
    }) //ese hi banta h jwt token, argument m payload leta h jo ki yaha {userId} h
    // {userId} is used within the curly braces to create an object with a key named userId, and the value of the userId variable is assigned to it. This object is then passed as the payload to the jwt.sign() function to generate the JWT token.

    //jis endpoint se response ayega us response ki cookie m send krdiya ye jwt, with expire time n other stuff
    res.cookie("jwt", token,{
        maxAge: 15*24*60*60*1000, //millisecond format
        httpOnly: true,  // prevent XSS attacks(Cross site scripting attacks); also so that it cant be accessed from JavaScript
        sameSite: "strict", //ensures that the cookie is sent only in first-party contexts and not in cross-origin requests.
        secure: process.env.NODE_ENV!=="development"
    }
    )
};

export default generateTokenAndSetCookie;