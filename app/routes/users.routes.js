import { Router } from "express";
import { getUsers,InsertUser,DeleteUser,UpdateUser } from "../controllers/users.controller.js";
const router = Router(); 

router.get("/users", getUsers)

// router.get("/users/:id",getUserbyId)

router.post("/users", InsertUser)

router.delete("/users/:id",DeleteUser )

router.put("/users/:id",UpdateUser )


export default router;