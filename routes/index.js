const express = require("express"),
  passport = require("passport");
router = express.Router();

router.get("/googlemap", function (req, res) {
  res.render("googleshow");
});
module.exports = router;