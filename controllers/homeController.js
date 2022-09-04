const Url = require('../models/Urls')
const { nanoid } = require("nanoid");

const leerURLs = async (req, res) => {
    try {
        const urls = await Url.find().lean()
        res.render('home', { urls })
    } catch (error) {
        console.log(error)
        res.send('Algo se rompió 🙃')
    }
}

const crearURL = async (req, res) => {
    const { fullURL } = req.body
    try {
        const url = new Url({ fullURL: fullURL, shortURL: nanoid(8) })
        await url.save()
        res.redirect('/')
    } catch (error) {
        console.log(error)
        res.send('Algo se rompió 🙃')
    }
}

const FormEditarURL = async (req, res) => {
    const {id} = req.params
    try {
        const url = await Url.findById(id).lean()
        res.render('home', {url})
    } catch (error) {
        console.log(error)
        res.send('Algo se rompió 🙃')
    }
}
const editarURL = async (req, res) => {
    const {id} = req.params
    const {fullURL} = req.body
    try {
        await Url.findByIdAndUpdate(id, {fullURL})
        res.redirect('/')
    } catch (error) {
        console.log(error)
        res.send('Algo se rompió 🙃')
    }
}

const eliminarURL = async (req, res) => {
    const {id} = req.params
    try {
        await Url.findByIdAndDelete(id)
        res.redirect('/')
    } catch (error) {
        console.log(error)
        res.send('Algo se rompió 🙃')
    }
}

const redireccionamiento = async (req, res) => {
    const { shortURL } = req.params
    try {
        const urlDB = await Url.findOne({shortURL: shortURL})
        res.redirect(urlDB.fullURL)
    } catch (error) {
        console.log(error)
        res.send('Algo se rompió 🙃')
    }
}

module.exports = {
    leerURLs,
    crearURL, 
    FormEditarURL,
    editarURL,
    eliminarURL, 
    redireccionamiento
}