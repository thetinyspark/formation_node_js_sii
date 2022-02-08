function index(req, res, next) {
    res.render('index', { title: 'Amazon' });
}

module.exports = {
    index
};