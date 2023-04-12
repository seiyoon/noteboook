// board entity
import {Board} from "../entity/Board";
// image entity
import {Image} from "../entity/Image";
// user entity
import {User} from "../entity/User";

import {getConnection} from "typeorm";

export class BoardController {

    // 게시글 추가
    static addBoard = async (req, res) => {
        // 게시글 저장
        // body에서 user_id를 추가로 받아옴
        const {title, subject, week, content, uid} = req.body;
        // user_id에 해당하는 user 찾아옴
        const user = await getConnection().getRepository(User).findOne({where:uid});
        const board = new Board();
        board.title = title;
        board.subject = subject;
        board.week = week;
        board.content = content;
        // board에 user 추가
        board.user = user;
        const result = await getConnection().getRepository(Board).save(board);

        // image 저장하면서 one-to-one 관계인 board 추가
        let image: Image = new Image();
        image.data = req.file.buffer;
        image.original_name = req.file.originalname;
        image.mimetype = req.file.mimetype;
        // image에 board 정보 추가
        image.board = result;
        await getConnection().getRepository(Image).save(image);

        res.send({"message": "success!"});
    }

    // 모든 게시글 보기 /list
    static findAllBoard = async (req, res) => {
        const {user_id, page_number, page_size} = req.query;

        const options = {};
        options['select'] = ["id", "title", "subject", "week", "content", "created", "updated"];
        options['order'] = {id: 'DESC'};

        // 쿼리 파라미터가 넘어오지 않으면 전체 목록 리턴!
        if (page_number && page_size) {
            options['skip'] = (page_number - 1) * page_size;
            options['take'] = page_size;
        }

        const boards = await getConnection().getRepository(Board).find(options);
        res.send(boards);
    }

    static findAllUserBoard = async (req, res) => {
        const {page_number, page_size} = req.query;

        const options = {};
        options['select'] = ["id", "title", "subject", "week", "content", "created", "updated"];
        options['order'] = {id: 'DESC'};
        options['relations'] = ['user'];


        // 쿼리 파라미터가 넘어오지 않으면 전체 목록 리턴!
        if (page_number && page_size) {
            options['skip'] = (page_number - 1) * page_size;
            options['take'] = page_size;
        }

        const boards = await getConnection().getRepository(Board).find(options);
        res.send(boards);
    }
    // user가 등록한 board 갯수
    static countUserBoard = async (req, res) => {
        const {uid} = req.params;
        const total = await getConnection().getRepository(Board).find({
            where: {userId: uid},
        })
        res.send({total: total.length});
    }

    // 목록의 전체 갯수 리턴. 페이지네이션 /count
    static countBoard = async (req, res) => {
        const total = await getConnection().getRepository(Board).count();
        res.send({total});
    }

    // 게시글 하나 조회 /:id
    static findOneBoard = async (req, res) => {
        const {id} = req.params;

        const board = await getConnection().getRepository(Board).findOneBy({id});
        res.send(board);
    }

    // 게시글 수정
    static modifyBoard = async (req, res) => {
        const {id, title, subject, week, content} = req.body;

        const updateOption = {
            "title": title,
            "subject": subject,
            "week": week,
            "content": content
        };
        // board 먼저 수정
        const result = await getConnection().createQueryBuilder().update(Board)
            .set(updateOption)
            .where("id = :id", {id})
            .execute();

        // formData에 파일이 있으면 파일 수정!
        if (req.file) {
            const imageUpdateOption = {
                data: req.file.buffer,
                original_name: req.file.originalname,
                mimetype: req.file.mimetype
            }
            const result = await getConnection().createQueryBuilder().update(Image)
                .set(imageUpdateOption)
                .where("board_id = :id", {id})
                .execute();
        }
        res.send({"message": "success!"});
    }

    // 게시글 삭제 /:id
    static removeBoard = async (req, res) => {
        const {id} = req.params;

        const result = await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Board)
            .where("id = :id", {id})
            .execute();

        res.send(result);
    }
}


