import {compareSync, hashSync} from "bcryptjs";
import {User} from "../entity/User";
import {getConnection} from "typeorm";
import jwt from "jsonwebtoken";

export class AuthController {
    static signUp = async (req, res) => {
        const {email, password, nickname} = req.body;

        const user = new User();
        user.email = email;
        // 패스워드 복호화
        user.password = hashSync(password, 8);
        user.nickname = nickname;

        // 이메일 중복 체크
        const existUser = await getConnection().getRepository(User)
            .findOne({where: {email}});

        if (existUser) {
            return res.status(400).send({ message: "이미 존재하는 이메일입니다" });
        }
        // 닉네임 중복 체크
        const existUsername = await getConnection().getRepository(User)
            .findOne({where:{nickname}});
        if (existUsername) {
            return res.status(400).send({message: "이미 존재하는 닉네임입니다"});
        }


        const result = await getConnection().getRepository(User).save(user);

        res.send(result);
    }

    static signIn = async (req, res) => {
        const {email, password, nickname} = req.body;

        const user = await getConnection().getRepository(User)
            .findOne({where:{email}});

        if (!user) {
            return res.status(400).send({ message: "존재하지 않는 이메일입니다" });
        }

        if (!compareSync(password, user.password)) {
            return res.status(400).send({ message: "비밀번호가 일지하지 않습니다" });
        }

        // token 생성
        const token = jwt.sign({ jti: user.uid, email: user.email, nickname: user.nickname },
            process.env.secret, {
                subject: user.nickname,
                algorithm: 'HS512',
                expiresIn: process.env.expirationSecondMs
            });

        res.send({jwt: token});
    }

}