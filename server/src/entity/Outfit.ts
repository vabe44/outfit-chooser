import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity()
export class Outfit extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user: number;

    @Column()
    shirt: number;

    @Column()
    pants: number;

    @Column()
    shoes: number;

    @Column()
    name: string;
}