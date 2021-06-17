const router = require('express').Router();
const { Project, User }  = require('../models');
const withAuth = require('../utils/auth');


// Get all our projects for the homepage

router.get('/', withAuth, async (req, res) => {
    try{
        const projectData = await Project.findAll({
            include: {
                all: true
            }        
        }).catch((err) => {res.json(err);
        });

        const projects = projectData.map((project) =>
        project.get({plain: true})
        );

        res.render('homepage', {projects, logged_in: req.session.logged_in, user_id: req.session.user_id});
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login route
router.get( '/login', ( req, res ) => {
    // console.log(res.session.logged_in);
    // If the user is already logged in, redirect to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    // Otherwise, render the 'login' template
    res.render('login');
  });

  // Signup route
router.get( '/signup', ( req, res ) => {
    // console.log(res.session.logged_in);
    // If the user is already logged in, redirect to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    // Otherwise, render the 'login' template
    res.render('signup');
  });

  router.post('/signup', async (req, res) => {
    try {
      const dbUserData = await User.create({
        email: req.body.email,
        password: req.body.password,
      });
  
      // Set up sessions with a 'loggedIn' variable set to `true`
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
 
module.exports = router;