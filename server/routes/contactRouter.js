const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const { contact } = require('../controllers/contact');

router.post('/contact',
    [
        body('name').trim().notEmpty().withMessage('Name is required').escape(),
        body('email').trim().notEmpty().withMessage('Email is required').escape(),
        body('message').trim().notEmpty().withMessage('Message is required').escape(),
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({error: error.array() });
        }
        next();
    },
    contact
);

export default contactRouter;