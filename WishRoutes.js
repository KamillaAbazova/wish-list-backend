const {Router} = require('express');
const { getWish, saveWishes, deleteWish, editWish } = require('./WishController');
const router = Router();

router.get('/', getWish);
router.post('/saveWishes', saveWishes);
router.post('/deleteWish', deleteWish);
router.post('/editWish', editWish);

module.exports = router;