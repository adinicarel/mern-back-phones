import express from "express";
import {
    listPhones,
    listPhoneById,
    createPhone,
    updatePhone,
    deletePhone,
  } from "../controllers/controllers.js";


const router = express.Router();

router.get("/", listPhones);

router.get("/:id", listPhoneById);

router.post("/", createPhone);

router.put("/:id", updatePhone);

router.delete("/:id", deletePhone);

export default router;