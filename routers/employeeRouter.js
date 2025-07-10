const express = require("express");
const employeeController = require("../controllers/employeeController");
const router = express.Router();

router.post("/create", employeeController.create);
router.get("/all", employeeController.fetch_all);
router.get("/one/:id", employeeController.fetch_one);
router.delete("/delete/:id", employeeController.destroy);
router.put("/update/:id", employeeController.update);

module.exports = router;