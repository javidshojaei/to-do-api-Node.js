// const mongoose = require("mongoose");

// const todoSchema = new mongoose.Schema(
//     {
//         title: {
//             type: String,
//             required: true,
//         },
//         completed: {
//             type: Boolean,
//             default: false,
//         },
//     },
//     { timestamps: true }
// );

// module.exports = mongoose.model("Todo", todoSchema);

const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    completed: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);