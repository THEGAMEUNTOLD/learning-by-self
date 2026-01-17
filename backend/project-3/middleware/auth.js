const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.redirect("/login");

        const decoded = jwt.verify(token, "SECRET_KEY");
        const user = await User.findById(decoded.id);

        if (!user) return res.redirect("/login");

        req.user = user;
        next();
    } catch (err) {
        res.redirect("/login");
    }
};
