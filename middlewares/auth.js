const fs = require('fs')
const {stars,user1,blogdata,bloguser, dailyfeed} = require('../modal')
module.exports = (req, res, next) => {
    if(user1) {
      const user = user1.find()
    if ( req.body === 'undefined') {
        return req.status(400).json({
            errors: 'problem with sending data'
        })
    }
    


    if (req.body.email === user.email ) {
        
        return req.status(400).json({
            errors: "email matched please try another"
        })
    }
    

}

    next()
}