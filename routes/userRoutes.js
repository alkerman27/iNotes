const express = require('express');
const router = express.Router();
const {
  getAllUser,
  createNewUser,
  updateUser,
  deleteUser,
} = require('../controllers/usersController');

router
  .route('/')
  .get(getAllUser)
  .post(createNewUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
