function index(request, reply){
    return '<h1>'+JSON.stringify(request.params)+'</h1>';
}

module.exports = {
    index
};