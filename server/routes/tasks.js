import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  doneTask,
} from "../controllers/tasks.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", auth, createTask);
router.patch("/:id", auth, updateTask);
router.delete("/:id", auth, deleteTask);
router.patch("/:id/doneTask", auth, doneTask);

export default router;
