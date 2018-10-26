var express = require('express');
var passport = require('passport');
var router = express.Router();


/* GET Google Authentication API. */
router.get(
	"/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
	"/google/callback",
	passport.authenticate("google", { failureRedirect: "/", session: false }),
	function(req, res) {
		var token = req.user.token;
		res.redirect("http://localhost:3000?token=" + token);
	}
);


/* Get Twitter Authentication API */
router.get(
    "/twitter",
    passport.authenticate("twitter", { scope: ["profile", "email"] })
);

router.get(
    "/twitter/callback",
    passport.authenticate("twitter", { failureRedirect: "/", session: false }),
    function(req, res) {
        var token = req.user.token;
        res.redirect("http://localhost:3000?token=" + token);
    }
);


/* Get Facebook Authentication API */
router.get(
    "/facebook",
    passport.authenticate("facebook", { scope: ["profile", "email"] })
);
  
router.get(
    "/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/", session: false }),
    function(req, res) {
        var token = req.user.token;
        res.redirect("http://localhost:3000?token=" + token);
    }
);


/* Get Instagram Authentication API */
// router.get(
//     "/instagram",
//     passport.authenticate("instagram", { scope: ["profile", "email"] })
// );
  
// router.get(
//     "/instagram/callback",
//     passport.authenticate("instagram", { failureRedirect: "/", session: false }),
//     function(req, res) {
//         var token = req.user.token;
//         res.redirect("http://localhost:3000?token=" + token);
//     }
// );

module.exports = router;