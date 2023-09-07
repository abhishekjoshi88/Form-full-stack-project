const express = require("express");
const router = express.Router();
const submissionController = require("../controller/submissionController");

// Define routes
router.post("/submit", submissionController.submitForm);
router.get("/getAllSubmissions", submissionController.getAllSubmissions);

module.exports = router;
