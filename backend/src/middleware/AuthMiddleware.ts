import {verify} from 'jsonwebtoken';

export class AuthMiddleware {
    static verifyToken = async (req, res, next) => {

        if (!req.headers["authorization"] || !req.headers["authorization"].startsWith("Bearer ")) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }

        const token = req.headers["authorization"].substring(7);

        verify(token, process.env.secret, (err, decoded) => {
            console.log(err);
            if (err) {
                return res.status(401).send({
                    message: "Unauthorized!"
                });
            }
            console.log(decoded);
            req.userId = decoded.jti;
            req.roles = decoded.roles;
            next();
            // next() : 현재 라우터에서 판단하지 않고 다음 라우터에서 response를 처리하겠다는 의미
        });
    }
}
