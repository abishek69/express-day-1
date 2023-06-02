module.exports = {
    
    login: (req, res) => {
        res.render("home", {
            user: req.query.user
        })
    }
}