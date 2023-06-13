import asyncHandler from 'express-async-handler';
import generateToken  from '../utils/generateToken.js';
import User from '../models/userModel.js';
// Auth user/set token
// route POST /api/users/auth
// access Public
const authUser = asyncHandler(async(req,res) =>{
 console.log("hej");
   const { email, password} = req.body;
   const user = await User.findOne({ where: { email: email } });
   if(user && (await user.validatePassword(password) )){
    
    
    return res.status(201).json({
        _id: user.id,
        name: user.userName,
        email : user.email,
        password : user.password

    })
    }
    else{
        res.status(404).json({ message: "Napačen email ali geslo" });
        return;
}


   
});

// Register a new User
// route POST /api/users
// access Public
const registerUser = asyncHandler(async(req,res) =>{
    const { username, password , email} = req.body;
    const emailExist = await User.findOne({ where: { email: email } });
    const userExist = await User.findOne({ where: { userName: username } });
    if (userExist || emailExist){
        
        res.status(409).json({ message: "Uporabnik ze obstaja"});
        return;
    }
    const user = await User.create({
        userName : username,
        email : email,
        password : password

})

  
if(user){
    generateToken(res, user.id)
    res.status(201).json({
        _id: user.id,
        username: user.userName,
        email : user.email,
        password : user.password

    })}
    else{
        res.status(400)
        throw new Error('Invalid user data');
}

return user;

});

// Auth user/set token
// route POST /api/users/auth
// access Public
const logoutUser = asyncHandler(async(req,res) =>{
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({message: 'User logged out'})
});

// Get User profile
// route GET /api/users/profile
// access Private
const getUserProfile = asyncHandler(async(req,res) =>{
    const user = await User.findOne({ where: { id: req.query.id }})
    console.log(user);
    return res.status(201).json({
      id: user.id,
      name: user.userName,
      email : user.email,
  
  
  })
});


// update user profile
// route Put /api/users/profile
// access Private
const updateUserProfile = asyncHandler(async(req,res) =>{
   const user = await User.findOne({ where: { id: req.user.id }})
    if (user) {

        user.userName = req.body.userName || user.userName;
        user.email = req.body.email || user.email;

        const updatedUuser = await user.save();
        res.status(200).json({
            id: updatedUuser.id,
            userName: updatedUuser.userName,
            email: updatedUuser.email
        })

    }
    else{
        res.status(404);
        throw new  Error('User not found');

    }
});



export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,

 };
