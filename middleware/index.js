const Campground = require('../models/campground');
const Comment = require('../models/comment');
// all the middleware goes here

let middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }else{
        req.flash('error', 'You need to be logged in to do that!');
        res.redirect('/login');
    }
};

middlewareObj.checkCampgroundOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, (err, foundCampground) => {
            if(err){
                req.flash('error','Campground not found');
                res.redirect('back');
            }else{
                if(foundCampground.author.id.equals(req.user._id)){
                    return next();
                }else{
                    req.flash('error','You don\'t have permission to do that!');
                    res.redirect('back');
                }
            }
        });
    }else{
        req.flash('error', 'You need to be logged in to do that!');
        res.redirect('back');
    }
};

middlewareObj.checkCommentOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, (err, foundComment) => {
            if(err){
                req.flash('error','Comment not found');
                res.redirect('back');
            }
            if(foundComment.author.id.equals(req.user._id)){
                return next();
            }else{
                req.flash('error','You don\'t have permission to do that!');
            }
        });
    }else{
        req.flash('error', 'You need to be logged in to do that!');
        res.redirect('back');
    }
};

module.exports = middlewareObj;