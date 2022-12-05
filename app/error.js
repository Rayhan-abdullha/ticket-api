const errorHandler = ((_req, _res, next) => {
    const error = new Error("Resourse Not found!")
    error.status = 404
    next(error)
})

const errorController = ((error, _req, res, _next) => {
    if (error.status){
        return res.status(error.status).json({
            message: error.message
        })
    }
    res.status(500).json({
        message: 'Somthing went to Worng!'
    })
})

module.exports = {
    errorHandler,
    errorController
}