import express from "express";
import {
  getGallery,
  addImage,
  deleteImage,
} from "../controllers/galleryController.js";

const router = express.Router();

router.get("/", getGallery);
router.post("/", addImage);
router.delete("/:id", deleteImage);

export default router;
