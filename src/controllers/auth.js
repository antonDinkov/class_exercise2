module.exports = {
    loginGet: (req, res) => {
        res.render('login');
    },
    loginPost: (req, res) => {
        const {username, password} = req.body;
        if(username!= 'peter' || password != '123'){
            res.status(403);
            res.send('Incorrect username or pasword');
            return;
        }
        
        req.session.user = 'peter'
        res.redirect('/')
    },
    logoutGet: (req, res) => {
        req.session.user = undefined;
        res.redirect('/');
    }
};