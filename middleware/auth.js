import jwt from 'jsonwebtoken';

const { verify } = jwt; // Extract the verify function

export function authenticateToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access Denied' });

    try {
        const verified = verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(403).json({ message: 'Invalid Token' });
    }
}
