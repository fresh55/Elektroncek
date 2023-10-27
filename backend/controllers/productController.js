import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Produkt from '../models/productModel.js';

// Auth user/set token
// route POST /api/users/auth
// access Public
const createProduct = asyncHandler(async(req,res) =>{
    const { ime, opis , cena , SKU , proizvajalec, barva, stanje ,userId,images } = req.body;
     const produkt = await Produkt.create({
        ime : ime,
        opis : opis,
        cena : cena,
        SKU : SKU,
        proizvajalec : proizvajalec,
        barva : barva,
        stanje : stanje,
        userId : userId,
        slike : images
    })
    if (produkt){
    return  res.status(201).json({
        id : id,
        ime : ime,
        opis : opis,
        cena : cena,
        SKU : SKU,
        proizvajalec : proizvajalec,
        barva : barva,
        stanje : stanje,
        userId : userId,
        slike : images

    })}
})

const getProductsByUser = asyncHandler(async(req,res) =>{
    const products = await Produkt.findAll({ where: { userId: req.query.userId }})
    res.json(products);
   
});

const getBadges = asyncHandler(async(req,res) =>{
    const badges = await Produkt.findAll()
    res.json(badges);
   
});



const getProductsByProductId = asyncHandler(async(req,res) =>{
    const product = await Produkt.findOne({ where: { id: req.query.productId }})
    res.json(product);
   
});

const deleteProduct = asyncHandler(async(req,res) =>{
    const { id } = req.params;
    console.log(id);

    try {
        const result = await Produkt.destroy({
            where: {
                id: id
            }
        });

        if (result !== 0) {
            res.json({
                message: `Product with id ${id} was deleted.`
            });
        } else {
            console.log(id);
            res.status(404).json({
                message: `Product with id ${id} not found.`
            });
        }
    } catch (error) {
        res.status(500).json({
            message: `Error occurred: ${error.message}`
        });
    }
   
});




export {createProduct,getProductsByUser,deleteProduct,getProductsByProductId,getBadges};
