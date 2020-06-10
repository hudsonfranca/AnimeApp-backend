import { Entity, Column, ManyToOne, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn } from "typeorm";
import { Anime } from "./Anime";
import { MyList} from "./MyList";

@Entity()
export class AnimesToMyList {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public animeId!: number;

    @Column()
    public myListId!: number;

    @Column()
    public date!: Date;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

    @ManyToOne(type => Anime,anime => anime.animesToMyList,{onDelete:"CASCADE"})
    public anime!: Anime;

    @ManyToOne(type => MyList, myList => myList.animesToMyList,{onDelete:"CASCADE"})
    public myList!:MyList;
}