const   mongoose    = require('mongoose'),
        Campground  = require('./models/campground'),
        Comment     = require('./models/comment');

let data = [
    {
        name: "Robin's Nest", 
        image: "https://images.unsplash.com/photo-1497900304864-273dfb3aae33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        location: "Turkey",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Nisi est sit amet facilisis magna etiam tempor orci eu. Sed ullamcorper morbi tincidunt ornare. In cursus turpis massa tincidunt dui ut ornare lectus. Congue eu consequat ac felis donec et odio pellentesque. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Dignissim convallis aenean et tortor at. Sem fringilla ut morbi tincidunt augue. Bibendum neque egestas congue quisque egestas diam in. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus feugiat in ante metus. Mattis pellentesque id nibh tortor. Sed vulputate odio ut enim. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Egestas diam in arcu cursus euismod quis. Nullam non nisi est sit amet facilisis. Amet facilisis magna etiam tempor orci eu lobortis."
    },
    {
        name: "Desert Mesa", 
        image: "https://images.unsplash.com/photo-1477581265664-b1e27c6731a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        location: "UK",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Nisi est sit amet facilisis magna etiam tempor orci eu. Sed ullamcorper morbi tincidunt ornare. In cursus turpis massa tincidunt dui ut ornare lectus. Congue eu consequat ac felis donec et odio pellentesque. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Dignissim convallis aenean et tortor at. Sem fringilla ut morbi tincidunt augue. Bibendum neque egestas congue quisque egestas diam in. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus feugiat in ante metus. Mattis pellentesque id nibh tortor. Sed vulputate odio ut enim. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Egestas diam in arcu cursus euismod quis. Nullam non nisi est sit amet facilisis. Amet facilisis magna etiam tempor orci eu lobortis."
    },
    {
        name: "Canyon Floor", 
        image: "https://images.unsplash.com/photo-1512862413804-7d90a3069054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        location: "India",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Nisi est sit amet facilisis magna etiam tempor orci eu. Sed ullamcorper morbi tincidunt ornare. In cursus turpis massa tincidunt dui ut ornare lectus. Congue eu consequat ac felis donec et odio pellentesque. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Dignissim convallis aenean et tortor at. Sem fringilla ut morbi tincidunt augue. Bibendum neque egestas congue quisque egestas diam in. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus feugiat in ante metus. Mattis pellentesque id nibh tortor. Sed vulputate odio ut enim. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Egestas diam in arcu cursus euismod quis. Nullam non nisi est sit amet facilisis. Amet facilisis magna etiam tempor orci eu lobortis."
    },
    {
        name: "North Rim", 
        image: "https://images.unsplash.com/photo-1540329957110-b87b06f5718e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        location: "USA",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Nisi est sit amet facilisis magna etiam tempor orci eu. Sed ullamcorper morbi tincidunt ornare. In cursus turpis massa tincidunt dui ut ornare lectus. Congue eu consequat ac felis donec et odio pellentesque. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Dignissim convallis aenean et tortor at. Sem fringilla ut morbi tincidunt augue. Bibendum neque egestas congue quisque egestas diam in. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus feugiat in ante metus. Mattis pellentesque id nibh tortor. Sed vulputate odio ut enim. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Egestas diam in arcu cursus euismod quis. Nullam non nisi est sit amet facilisis. Amet facilisis magna etiam tempor orci eu lobortis."
    },
    {
        name: "Great Mumbra", 
        image: "https://images.unsplash.com/photo-1563074492-9e3ab8659b3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        location: "USA",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Nisi est sit amet facilisis magna etiam tempor orci eu. Sed ullamcorper morbi tincidunt ornare. In cursus turpis massa tincidunt dui ut ornare lectus. Congue eu consequat ac felis donec et odio pellentesque. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Dignissim convallis aenean et tortor at. Sem fringilla ut morbi tincidunt augue. Bibendum neque egestas congue quisque egestas diam in. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus feugiat in ante metus. Mattis pellentesque id nibh tortor. Sed vulputate odio ut enim. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Egestas diam in arcu cursus euismod quis. Nullam non nisi est sit amet facilisis. Amet facilisis magna etiam tempor orci eu lobortis."
    },
    {
        name: "Alstra Crawl", 
        image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        location: "Australia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Nisi est sit amet facilisis magna etiam tempor orci eu. Sed ullamcorper morbi tincidunt ornare. In cursus turpis massa tincidunt dui ut ornare lectus. Congue eu consequat ac felis donec et odio pellentesque. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Dignissim convallis aenean et tortor at. Sem fringilla ut morbi tincidunt augue. Bibendum neque egestas congue quisque egestas diam in. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus feugiat in ante metus. Mattis pellentesque id nibh tortor. Sed vulputate odio ut enim. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Egestas diam in arcu cursus euismod quis. Nullam non nisi est sit amet facilisis. Amet facilisis magna etiam tempor orci eu lobortis."
    }
];
        
function seedDB(){
    //Remove all campgrounds
    Campground.deleteMany({}, (err) => {
        if(err){
            console.log(err);
        }
        console.log('removed campgrounds')
        
        //Add a few campgrounds
        data.forEach((seed) => {
            Campground.create(seed, (err,campground) => {
                if(err){
                    console.log(err);
                }else{
                    console.log('added a campground');
                    Comment.create({
                        text:'This place is great,but I wish I there was internet',
                        author:'Homer'
                    }, (err, comment) => {
                        if(err){
                            console.log(err);
                        }else{
                            campground.comments.push(comment);
                            campground.save();
                            console.log('Created new comment')
                        }

                    })
                }
            });
        });
    });
    

    
    //Add a few comments
}

module.exports = seedDB;