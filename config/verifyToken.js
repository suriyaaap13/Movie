const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next){
    console.log(req.headers);
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token);
    if(token==null){return res.status(401).json({
        message: 'Unauthorized',
        status: 401
    });}
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if(err){console.log("Error ",err);return res.status(403).json({
            message: 'Forbidden Error',
            status: 403
        });}
        console.log(user);
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;