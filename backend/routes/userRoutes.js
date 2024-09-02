import express from 'express';
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
router.route('/logout', logoutUser)
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
