module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db')
        db.get_products().then(products => {
            // console.log('It worked!!! Woohoo!!!')
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send({errorMessage: 'Broke!'})
        })
    },
}