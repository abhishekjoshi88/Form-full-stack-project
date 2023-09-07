const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Submission = mongoose.model("Submission", SubmissionSchema);

module.exports = Submission;
