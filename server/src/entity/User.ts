import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import {Outfit} from "./Outfit";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(type => Outfit, outfit => outfit.user) // note: we will create author property in the Photo class below
    photos: Outfit[];

}