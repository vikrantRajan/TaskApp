module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `todo` ORDER BY id ASC";

        db.query(query, (err, result) => {
            console.log("resullts ", result);
            if(err) {
                res.redirect('/');
            }
                res.render('index.ejs', {
                    title: 'Welcome To the Task App | View all taks',
                    todo: result
                });
            
        });
    }
};