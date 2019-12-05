module.exports = {

    create(req, res) {
        const db = req.app.get('db')
        const {product_name, price, image_url} = req.body
        db.create_product([product_name, price, image_url]).then(products => {
            // console.log(products)
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send({errMessage: 'create is broke'})
            console.log(err)
        })
    },

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