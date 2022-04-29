import { Router } from "express";
import UserController from "../controllers/UserController.js";
import isLoggedIn from "../middlewares/isLoggedIn.js"

const router = Router();

router.get('/user', UserController.find);
router.get('/user/:id', UserController.findOne);
router.post('/user', isLoggedIn, UserController.create);
router.put('/user/:id', isLoggedIn, UserController.updateOne);
router.delete('/user/:id', isLoggedIn, UserController.deleteOne);


export default router;
