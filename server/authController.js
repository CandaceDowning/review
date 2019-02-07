const bcrypt = require('bcryptjs')


module.exports = {

    //gets data from body
    //database has username set as unique so no need to check for current user
    //else hash Pass 
    //add user to db
    //capture response
    //add response(user) to session
    //send back session or user

    signup: async (req, res) => {
        const {username, password} =  req.body
        const db = req.app.get('db')
        const hash = await bcrypt.hash(password, 12)
        try{
            const response =  await db.add_user([username, hash]);
            req.session.user = {username: response[0].username};
            res.status(200).json(response[0].username)
        } catch(error){
            console.log(error)
            res.status(401).json("An error occurred")
        }
    },

    //takes the information from the front end through the index to make the post to login

    //get data from body
    //get database
    //find user
    //if none send error
    //check check has from db to given password hashed
    //if cred bad send error
    //if cred true set session
    //send response
    login: (req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db')
        db.find_user(username).then(async response => {
            console.log(response)
            if(!response.length){
                res.status(401).json("No user found")
            }else{
                const isMatch = await bcrypt.compare(password, response[0].hash);
                if(!isMatch){
                    res.status(401).json({error: "Incorrect password"})
                }else{
                    console.log(response[0].username)
                    req.session.user = {username: response[0].username}
                    res.json({username: response[0].username})
                }
            }
        })
    },

    getUser: (req,res)=>{
        if(req.session.user){
            res.json(req.session.user)
        }else{
            res.status(401).json({error: "Please log in"})
        }
    }
}