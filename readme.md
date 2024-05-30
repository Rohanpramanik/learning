Learning Express--

ejs setup karne k lia

1 ejs install : npm i ejs
2 configure ejs : app.set("view engine", "ejs");
3 create a folder with name "views" and create all the ejs file inside that
4 remove send and use render in place of send : while rendering only use those ejs which is inside views and just use file name not the type(.ejs)

static files setup

1 create a folder with name public inside that create three more folder with name images, stylesheets, javascripts

express-generator :

it gives us the folder structure and the setup like ejs and static files setup. and it also provide the boilerplate code as well.

1 install it : npm i express-generator -g
2 express projectName --views=ejs or express --ejs

MongoDb :

it is database where all the data gets stored. its a non relational database
2 type of database : relational, non relational

 code side           Mongo DB side
 DB setup            DB formation
 Model                Collection
 Schema                Documents


cosider amazon database me kafi kuch store hota group wise like user data, product data, admin data, employee data. each single group is called collection. ex users data mtlb user collection. 

when we create the group of same type of data or collection in code that is called model.
user model database me user collection banata h 
ex : models(code) => collection (database)

and when we talk about single user that means document.
schema means sabse choti entity me kya kya hoga.
schema (code) = documents (database)


 1 . install mongoDB
 2 . install mongoose.js
 3 . require and setup connection
 4 . make schemas
 5 . create model and export

 cookies and session

 client - cookies, 
 server - session

 for creating session

 --install express-session
 create : req.session.koivnaam = koivvalue;
 read : req.session.koivnaam 
 delete : req.session.destroy

 for creating cookie 

 create : res.cookie("name", value);
 read : req.cookies.name;
 delete : res.clearCookie("name");
