const errorhandler = (err, req, res, next) => {
    console.log("Manejo de errores desde un middleware");
    const defaultmensaje = 'La aplicación está ocupada. Inténtelo nuevamente más tarde.'

    if (process.env.NODE_ENV === 'development') {
        const statusCode = err.statusCode || 500
        const message = err.message || defaultmensaje
        res.status(statusCode).json({
            success: false,
            status: statusCode,
            message: message,
            stack: err.stack
        })
    } else {
        res.status(200).send(defaultmensaje)
    }
}

module.exports = errorhandler