const { posts } = require('../models')
const express = require('express');
const router = express.Router();

//get
router.get('/', async ( req, res ) => {
	const listOfPosts = await posts.findAll();
	res.json(listOfPosts);
});

//post
router.post('/', async ( req, res ) => {
	const post = req.body;
	await posts.create(post);
	res.json(post);
});

module.exports = router;