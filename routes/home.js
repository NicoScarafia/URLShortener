const express = require('express')
const router = express.Router()

router.get('/', (req, res)=> {
    const urls = [
        { fullURL: 'www.google.com/1', shortenURL: 'dgdgdg1'},
        { fullURL: 'www.google.com/2', shortenURL: 'dgdgdg2'},
        { fullURL: 'www.google.com/3', shortenURL: 'dgdgdg3'}
    ]
    res.render('home', { urls })
})

module.exports = router

