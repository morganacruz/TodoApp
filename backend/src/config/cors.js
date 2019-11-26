module.exports = function(req, res, next){
    res.header('Accesss-Control-Allow-Origin', '*')
    res.header('Accesss-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Accesss-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}