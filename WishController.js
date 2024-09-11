const WishModel = require('./WishModel');

module.exports.getWish = async(req, res) => {
    const myWish = await WishModel.find();
    res.send(myWish)
}

module.exports.saveWishes = async(req, res) => {
    const { title } = req.body;
    WishModel.create({ title })
    .then((data) => { console.log('Wish added')
        res.send(data)
    })
}

module.exports.deleteWish = async(req, res) => {
    const {_id} = req.body;
    WishModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted wish'))
}

module.exports.editWish = async(req, res) => {
    const {_id, title } = req.body;
    WishModel.findByIdAndUpdate(_id, {title})
    .then(() => res.send("Edited wish"))
}