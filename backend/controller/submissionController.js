//import model
const Submission = require("../model/Submission");

//logic

exports.submitForm = (req, res) => {
  const { name, email, message } = req.body;

  const newSubmission = new Submission({
    name,
    email,
    message,
  });

  newSubmission
    .save()
    .then(() => res.json({ success: true }))
    .catch((err) =>
      res.status(500).json({ success: false, error: err.message })
    );
};

// exports.getAllSubmissions = (req, res) => {
//   Submission.find({}, (err, submissions) => {
//     if (err) {
//       return res.status(500).json({ success: false, error: err.message });
//     }
//     res.json({ success: true, submissions });
//   });
// };

exports.getAllSubmissions = async (req, res) => {
  let submissions = await Submission.find();
  res.json({ success: true, submissions });
};
