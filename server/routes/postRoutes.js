const router = require('express').Router();
const Post = require('../models/postModel');

router.post('/', async (req, res) => {

    //retrive the data from the request
    const {title, createdAt, description} = req.body;
   
    //construct the post model
    const newPost = new Post({
        title,
        createdAt,
        description,
    });

    //save post model
    try {
        const savedPost = await newPost.save();
        res.json(savedPost)
    } catch (error) {
        console.error(error);
    }


});


router.get('/' , async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

router.get('/:id' , async (req, res) => {
    const posts = await Post.findById(req.params.id)
    res.json(posts);
});



module.exports = router;