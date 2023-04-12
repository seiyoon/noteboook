import {Router} from "express";
// src/router/board.ts 라우팅 모듈
import board from "./board";
// src/router/image.ts 라우팅 모듈
import image from "./image";
// src/router/auth.ts 라우팅 모듈
import auth from "./auth";
// 인증 미들웨어
import {AuthMiddleware} from "../middleware/AuthMiddleware";

const routes = Router();

routes.use('/board', board);

routes.use('/image', image);

routes.use('/auth', auth);

export default routes;
