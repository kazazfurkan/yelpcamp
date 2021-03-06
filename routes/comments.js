const   express = require('express'),
        router  = express.Router({mergeParams:true});

const   Campground  = require(('../models/campground')),
        Comment     = require('../models/comment'),
        middleware  = require('../middleware');

// NEW
router.get('/new',middleware.isLoggedIn, (req,res) => {
    Campground.findById(req.params.id, (err,foundCampground) => {
        if(err){
            console.log(err);
        }else{
            res.render('comments/new',{campground:foundCampground}); 
        }
    });
});


// CREATE
router.post('/', middleware.isLoggedIn , (req,res) => {
    Campground.findById(req.params.id, (err, foundCampground) => {
        if(err){
            console.log(err);
            res.redirect('/campgrounds');
        }else{
            Comment.create(req.body.comment, (err, comment) => {
                if(err){
                    console.log(err);
                    res.redirect('/campgrounds');
                }else{
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    // push and save the comment
                    foundCampground.comments.push(comment);
                    foundCampground.save();
                    req.flash('success', 'Successfully added comment');
                    res.redirect('/campgrounds/'+req.params.id);
                }
            });
        }
    });
});


// EDIT
router.get('/:comment_id/edit',middleware.checkCommentOwnership ,(req,res) => {
    Comment.findById(req.params.comment_id, (err, foundComment) => {
        if(err){
            res.redirect('/campgrounds/'+ req.params.id);
        }
        res.render('comments/edit', {campground_id: req.params.id, comment:foundComment});
    });
});

// UPDATE
router.put('/:comment_id',middleware.checkCommentOwnership ,(req,res) => {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, (err, updatedComment) => {
        if(err){
            res.redirect('back');
        }
        req.flash('success', 'Successfully updated the comment.');
        res.redirect('/campgrounds/'+ req.params.id);
    });
});

// DELETE
router.delete('/:comment_id',middleware.checkCommentOwnership ,(req,res) => {
    Comment.findByIdAndRemove(req.params.comment_id, (err) => {
        if(err){
            res.redirect('back');
        }
        req.flash('success', 'Successfully deleted the comment.');
        res.redirect('/campgrounds/'+req.params.id);
    });
});

module.exports = router;