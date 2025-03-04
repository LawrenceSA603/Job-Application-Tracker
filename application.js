const express = require('express');
const Application = require('../models/Application');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');

// Middleware to verify token
router.use(verifyToken);

// Get applications
router.get('/', async (req, res) => {
  const applications = await Application.find({ userId: req.user.id });
  res.json(applications);
});

// Add application
router.post('/', async (req, res) => {
  const application = new Application({ ...req.body, userId: req.user.id });
  await application.save();
  res.status(201).json(application);
});

// Update application
router.put('/:id', async (req, res) => {
  const application = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(application);
});

// Delete application
router.delete('/:id', async (req, res) => {
  await Application.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
