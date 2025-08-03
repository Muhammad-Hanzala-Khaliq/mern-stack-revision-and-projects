import express from 'express'
import { User } from '../models/userSchema.js';
import { createUser, getAllUsers, getSingleUser } from '../controllers/userController.js';

const router = express.Router();

router.get("/all",getAllUsers);
router.post("/new",createUser);
router.get("/userid/:id",getSingleUser);


export default router