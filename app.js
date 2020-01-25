const express       = require('express'),
      app           = express(),
      bodyParser    = require('body-parser'),
      mongoose      = require('mongoose'),
      flash         = require('connect-flash'),
      Campground    = require('./models/campground'),
      Comment       = require('./models/comment'),
      User          = require('./models/user'),
      seedDB        = require('./seeds'),
      passport      = require('passport'),
      LocalStrategy = require('passport-local'),
      methodOverride= require('method-override');
 
// requiring the routes    
const   commentRoutes   = require('./routes/comments'),
        campgroundRoutes = require('./routes/campgrounds'),
        indexRoutes     = require('./routes/index');
    
//seedDB(); // seed the database

mongoose.connect('mongodb://localhost/yelp_camp_v11_deployed',{useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(flash());

// Passport Configuration
app.use(require('express-session')({
    secret: 'THIS IS THE KEY',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Add middleware -- Should be defined after password configs.
app.use((req, res, next) => {
   res.locals.currentUser = req.user;
   res.locals.error = req.flash('error');
   res.locals.success = req.flash('success');
   next();
});

app.use('/', indexRoutes);
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/comments', commentRoutes);

// ============================
//       SERVER --
// ============================
app.listen(process.env.PORT, ()=>{
    console.log('YelpCamp has started!');
});

