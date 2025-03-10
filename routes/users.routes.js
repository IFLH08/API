import { Router } from "express";
import {getUsers, putUser, deleteUser} from "../controllers/users.controllers.js";

const router = Router();

router.get("/users/",getUsers);
router.get("/users/:id",getUsers);
router.post("/users/",getUsers);
router.put("/users/:id",putUser);
router.delete("/users/:id",deleteUser);

export default router;
