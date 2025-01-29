const express = require('express');
const router = express.Router();
const Idea = require('../models/Idea');

// Get all items
router.get('/', async (req, res) => { 
  try {
    const ideas = await Idea.find();
    res.status(200).json({
      success: true,
      data: ideas
    });

  } catch(err) {
    console.log(err);
    res.status(500).json({
      sucess: false,
      message: err
    })
  }
});

// Get one item
router.get('/:id', async (req, res) => { 
  try {
    const idea = await Idea.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: idea
    });

  } catch(err) {
    console.log(err);
    res.status(500).json({
      sucess: false,
      message: err
    })
  }
});

// Add an idea
router.post('/', async (req, res) => {
  const idea = new Idea ({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });

  try {
    const savedIdea = await idea.save();
    res.status(201).json({
      success: true,
      data: savedIdea
    });

  } catch(err) {
    console.log(err);
    res.status(404).json({
      success: false,
      error: err
    });
  }
  
}); 

// Update an idea
router.put('/:id', async (req, res) => { 
  try {
    const updateIdea = await Idea.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      success: true,
      data: updateIdea
    });
    
  } catch(err) {
    console.log(err);
    res.status(404).json({
      success: false,
      error: err
    });
  }
});

// Delete idea
router.delete('/:id', async (req, res) => {
  try {
    await Idea.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'Success',
      data: null
    });

  } catch(err) {
    console.log(err);
    res.status(404).json({
      success: false,
      error: err
    });
  }
});


module.exports = router;