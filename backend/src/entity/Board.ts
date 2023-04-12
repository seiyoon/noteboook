import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne} from "typeorm";
import {User} from "./User";
@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 30})
    title: string;

    @Column({length: 15})
    subject: string;

    @Column()
    week: string;

    @Column("text")
    content: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    // user와 관계 설정
    @ManyToOne(type => User, user => user.boards)
    user: User;
    // join 없이 user의 id 가져오기
    @Column()
    userId: number;
}
