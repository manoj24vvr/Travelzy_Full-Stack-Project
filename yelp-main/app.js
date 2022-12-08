if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const express = require('express');
const path = require('path');   
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local')

const mongoSanitize = require('express-mongo-sanitize');
const helmet = require("helmet");

const Campground = require('./models/campground');
const Review = require('./models/review');
const User = require('./models/user');

const ExpressError = require('./utils/ExpressError');
const catchAsync = require('./utils/catchAsync');

const { campgroundSchema, reviewSchema  } = require('./schemas');

const campgroundRoutes = require('./routes/campgrounds')
const reviewRoutes = require('./routes/reviews');
const userRoutes = require('./routes/users');

const app = express();

const MongoDBStore = require('connect-mongo');

const dbUrl = process.env.DB_URL || "mongodb+srv://nikhith10:Nikhith99!@test.ye9uzeg.mongodb.net/test";
const secret = process.env.SECRET || 'thisshoudbeabettersecret!';

mongoose.connect(dbUrl)
    .then(() => {
        console.log("Database Connected!!");
    })
    .catch(err => {
        console.log("OH NO ERROR!")
        console.log(err);  
    });


app.engine('ejs',ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const store = MongoDBStore.create({
    mongoUrl: dbUrl,
    secret,
    touchAfter: 24 * 60 * 60
});

store.on("error", function (e) {
    console.log("SESSION STORE ERROR", e)
})

const sessionConfig = {
    store,
    name: 'session',
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: 
    {

        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }

}
app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize()); 
app.use(passport.session()); 
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})


app.use('/', userRoutes);
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/reviews',reviewRoutes);

app.get('/', (req, res) => {
    res.render('home')
});

app.use((req, res, next) => 
{
    console.log("Data from browser",req.query);

    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})
app.use('/', userRoutes);
app.all('*', (req,res,next) => {
    next(new ExpressError('Page Not Found', 404))
})
    
app.use((err,req,res,next) => {
    const { statusCode = 500 } = err;
    if(!err.message) err.message = `Oh no, Something went wrong!`
    res.status(statusCode).render('error',{ err });
    
})


const port = process.env.PORT || 6234;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})






