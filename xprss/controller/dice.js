function roll(req, res, next){
    const value = Math.round(Math.random() * 100);
    let color = 'blue';

    if( value < 20 ){
        color = 'green';
    }
    else if( value < 50 ){
        color = 'orange';
    }
    else if( value < 100 ){
        color = 'red';
    }

    res.render('dice', {color: color, value: value});
}

module.exports = {
    roll
};