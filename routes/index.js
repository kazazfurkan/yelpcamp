const   express = require('express'),
        router  = express.Router();
        
const   User        = require('../models/user'),
        passport    = require('passport'),
        middleware  = require('../middleware');
        
// homepage
router.get('/', (req,res) =>{
    res.render('landing');
});

// show register form
router.get('/register', (req,res) => {
   res.render('register'); 
});

// handle sign up logic
router.post('/register', (req,res) => {
    var newUser = new User({username: req.body.username});
    
    User.register(newUser, req.body.password, (err, user) => {
        if(err){
            req.flash('error',err.message);
            res.redirect('back')
        }
        passport.authenticate('local')(req, res, () => {
           req.flash('success','Welcome to Yelpcamp!')
           res.redirect('/campgrounds'); 
        });
   });
});

// show login form

router.get('/login', (req,res) => {
    res.render('login');
})

// handling login logic
router.post('/login', passport.authenticate('local', 
    {
      successRedirect: '/campgrounds',
      failureRedirect: '/login'
   }),(req,res) => {});

// logout route
router.get('/logout', (req,res) => {
    req.logout();
    req.flash('success', 'Logged you out!')
    res.redirect('/campgrounds')
})


module.exports = router;
