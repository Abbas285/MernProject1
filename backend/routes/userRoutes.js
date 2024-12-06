import express from 'express';
import { protect } from "../middleware/authMiddleWare.js"
const router = express.Router();

import {
    authUser,
    regesterUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,



} from '../controllers/userController.js';


router.post('/', regesterUser)
router.post('/auth', authUser);
router.post('/logout', logoutUser)
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;
