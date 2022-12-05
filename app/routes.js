const router = require('express').Router()

router.use('/api/v1/tickets', require('../route/ticket'))

router.get("/health", (req, res) => {
    res.status(200).json({
        message: "Successfully responsed."
    })
})

module.exports = router