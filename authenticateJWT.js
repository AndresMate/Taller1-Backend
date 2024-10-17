const jwt = require('jsonwebtoken');
const key = 'GLE53 Coupe'; // Puedes cambiar esto para usar process.env.SECRET

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, key, (err, payload) => {
            if (err) {
                return res.status(401).send({ error: 'Token inválido' });
            }

            if (Date.now() >= payload.exp) {
                return res.status(401).send({ message: 'Token expirado' });
            }

            req.user = payload;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = authenticateJWT;
