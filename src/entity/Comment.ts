import {Entity,ManyToOne,Column,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn} from "typeorm";
import {Episode} from "./Episode";
import {User} from "./User";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    content: string;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

    @ManyToOne(type => Episode, episode=> episode.comments,{onDelete:'CASCADE'})
    episode: Episode;

    @ManyToOne(type => User, user=> user.comments,{onDelete:'CASCADE'})
    user:User;



}
