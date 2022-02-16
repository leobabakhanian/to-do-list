import express from "express";
import mongoose from "mongoose";
import Task from "../models/task.js";

const router = express.Router();

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const task = req.body;

  const newTask = new Task({
    ...task,
    author: req.userId,
  });

  try {
    await newTask.save();

    res.status(201).json(newTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { author, message } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No task with id: ${id}`);

  const updatedTask = { author, message };

  await Task.findByIdAndUpdate(id, updatedTask, { new: true });

  res.json(updatedTask);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No task with id: ${id}`);

  await Task.findByIdAndRemove(id);

  res.json({ message: "Task deleted successfully." });
};

export const doneTask = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) {
    return res.json({ message: "Not authenticated" });
  }

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No task with id: ${id}`);

  const task = await Task.findById(id);

  const index = task.done.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    task.done.push(req.userId);
  } else {
    task.done = task.done.filter((id) => id !== String(req.userId));
  }
  const updatedTask = await Task.findByIdAndUpdate(id, task, {
    new: true,
  });
  res.status(200).json(updatedTask);
};

export default router;
