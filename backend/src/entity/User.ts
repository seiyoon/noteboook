import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    OneToMany,
    Unique
} from "typeorm";
import {Board} from "./Board";

@Entity()
@Unique(['email'])
export class User {
    @PrimaryGeneratedColumn({type: "bigint"})
    uid: number;

    @Column({length: 255})
    email: string;

    @Column({length: 255})
    password: string;

    @Column({length: 10})
    nickname: string;


    @OneToMany(type => Board, board => board.user)
    boards: Board[];


}