import express from  'express';

const router = express.Router();
import {
    createProduct,getProductsByUser,deleteProduct,getProductsByProductId,getBadges} from '../controllers/productController.js';

router.post('/ustvari', createProduct);
router.get('/getProductsId', getProductsByUser);
router.get('/getBadges',getBadges)
router.get('/getProductsbyProductId', getProductsByProductId);
router.delete('/deleteProduct/:id', deleteProduct);

export default router;