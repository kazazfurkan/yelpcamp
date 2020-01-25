const   express = require("express"),
        router  = express.Router();

const   Campground  = require('../models/campground');
const   middleware  = require('../middleware');

router.get('/new', middleware.isLoggedIn ,(req,res) =>{
   res.render('campgrounds/new'); 
});

// INDEX - All the campgrounds 
router.get('/', (req,res) =>{
    Campground.find({}, (err, allCampgrounds) => {
        if(err){
            console.log(`Couldn\'t retrieve the data! : ${err}`);
        }else{
            console.log('Successfully retrieved the data from database');
            res.render('campgrounds/index', {campground:allCampgrounds});
        }
    })
});


// POST REQUESTS
// Create
router.post('/', middleware.isLoggedIn, (req,res) =>{
    var name = req.body.name;
    var image = req.body.image;
    var location = req.body.location;
    var price = req.body.price;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {name : name, image:image, price:price , location:location, description:description, author: author };
    
    // Add new campground to the database
    Campground.create(newCampground, (err, campground) => {
        if(err){
            console.log(err);
        }else{
            console.log(`Successfully added ${campground.name} to the database!`);
        }
    });
    
    res.redirect('/campgrounds');
});

// SHOW - Show more information about a campground
router.get('/:id', (req,res) =>{
    Campground.findById(req.params.id).populate('comments').exec((err, foundCampground) =>{
       if(err){
           res.redirect('back');
       }else{
           res.render('campgrounds/show', {campground :foundCampground});
       }
    });
});

// EDIT CAMPGROUND ROUTE
router.get('/:id/edit', middleware.checkCampgroundOwnership, (req,res) => {
    Campground.findById(req.params.id, (err, foundCampground) => {
        if(err){
            // handle err
        }else{
            res.render('campgrounds/edit', {campground: foundCampground});
        }
    })
    
});

// UPDATE CAMPGROUND ROUTE
router.put('/:id',middleware.checkCampgroundOwnership ,(req,res) => {
   Campground.findByIdAndUpdate(req.params.id, req.body.campground, (err, campground) => {
      if(err){
          console.log(err);
          res.redirect('/campgrounds')
      }else{
          req.flash('success', 'Campground updated successfully.');
          res.redirect('/campgrounds/' + req.params.id);
      }
   });
});


// DESTROY ROUTE
router.delete('/:id', middleware.checkCampgroundOwnership, (req,res) => {
   Campground.findByIdAndRemove(req.params.id, (err) => {
       if(err){
           res.redirect('/campgrounds/' + req.params.id);
       }else{
           req.flash('success','Removed campground successfully.');
           res.redirect('/campgrounds');
       }
   })
});

module.exports = router;