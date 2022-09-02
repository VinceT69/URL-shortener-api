const express = require('express');
const router = express.Router();
const { shortenRoute, getLink } = require('../controllers/url');

router.route('/shorten').post(shortenRoute);
router.route('/:slug').get(getLink);
module.exports = router;
