const { URL } = require('url')

const validarUrl = (req, res, next) => {
    try {
        const { fullURL } = req.body
        const URLIngresada = new URL (fullURL) 
        if (URLIngresada.origin !== 'null') {
            return next()
        }
        else {
            throw new Error('URL no válida')
        }
    } catch (error) {
        console.log(error)
        res.send('❌ No se ingresó una URL válida')
    }
}

module.exports = validarUrl