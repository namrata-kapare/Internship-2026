const express = require("express");
const router = express.Router();
const{
    handleAddBookController,
    handlegetAllBookController,
    handleDeleteBookController,
    handleUpdateBookController
} = require("../controller/bookController");

router.get("/getmsg", (req, res) => {
    res.send("Hello");
});
router.post("/addbook", handleAddBookController);

router.get("/getbook", handlegetAllBookController);

router.delete("/addbook",handleDeleteBookController);

router.put("/addbook",handleUpdateBookController);

module.exports = router;