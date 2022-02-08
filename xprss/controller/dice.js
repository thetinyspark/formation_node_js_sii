function doRoll(limit){
    const value = Math.round(Math.random() * limit);
    let color = 'blue';

    if( value < 20 ){
        color = 'green';
    }
    else if( value < 50 ){
        color = 'orange';
    }
    else if( value < limit ){
        color = 'red';
    }

    return {
        color, 
        value
    };
}

function roll(req, res, next){
    res.render('dice', doRoll(100));
}

function changeLimit(req, res, next){
    res.render('dice', doRoll(req.body.limit || 100));
}

module.exports = {
    roll, 
    changeLimit
};