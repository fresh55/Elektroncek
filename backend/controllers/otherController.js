import asyncHandler from 'express-async-handler';
import {data} from'../utils/cities.js'
const getCities = asyncHandler(async(req,res) =>{
    const cityNames = data.map(city => city.city);
    res.status(201).json(cityNames);
    
 })

 export {
    getCities,

 };
