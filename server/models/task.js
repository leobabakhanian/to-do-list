import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  message: String,
  author: String,
  done: {
    type: [String],
    default: [],
  },
});

var TaskMessage = mongoose.model("Task", taskSchema);

export default TaskMessage;
