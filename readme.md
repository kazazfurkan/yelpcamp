# YelpCamp

Full stack RESTfull Node.js project
* User-authentication 
* add/edit/delete posts 
* add/edit/delete comments

For deployed version visit https://shrouded-eyrie-29996.herokuapp.com/

## RESTfull Routes

| name    | url                                 | HTML verb |
| ------- | ----------------------------------- |---------- |
| INDEX   | /campgorunds/                       | GET       |
| NEW     | /campgrounds/new                    | GET       |
| CREATE  | /campgrounds                        | POST      |
| SHOW    | /campgrounds/:id                    | GET       |
| EDIT    | /campgorunds/:id/edit               | GET       |
| UPDATE  | /campgorunds/:id                    | PUT       |
| DESTROY | /campgorunds/:id                    | DELETE    |
| NEW     | /campgrounds/:id/comments/new       | GET       |
| CREATE  | /campgrounds/:id/comments           | POST      |
| EDIT    | /campgorunds/:id/comments/:id/edit  | GET       |
| UPDATE  | /campgorunds/:id/comments/:id       | PUT       |
| DESTROY | /campgorunds/:id/comments/:id       | DELETE    |
