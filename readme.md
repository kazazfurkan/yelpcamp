// RESTfull Routes

#Campground Routes
name        url                             verb
====================================================
INDEX       /campgorunds/                   GET
NEW         /campgrounds/new                GET
CREATE      /campgrounds                    POST
SHOW        /campgrounds/:id                GET


NEW         campgrounds/:id/comments/new    GET
CREATE      campgrounds/:id/comments        POST