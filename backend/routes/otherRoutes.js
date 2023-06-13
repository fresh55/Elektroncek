import express from  'express';

const router = express.Router();

import {
    getCities,
    } from '../controllers/otherController.js';


router.get('/', getCities);


export default router;