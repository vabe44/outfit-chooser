import { ShirtColor } from './ShirtColor';
import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToOne, JoinColumn} from "typeorm";
import { User } from "./User";
import { PantsColor } from './PantsColor';
import { ShoeColor } from './ShoeColor';

@Entity()
export class Outfit extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => ShirtColor, {eager: true})
    @JoinColumn()
    shirt: ShirtColor;

    @OneToOne(type => PantsColor, {eager: true})
    @JoinColumn()
    pants: PantsColor;

    @OneToOne(type => ShoeColor, {eager: true})
    @JoinColumn()
    shoes: ShoeColor;

    @Column()
    name: string;

    @ManyToOne(type => User, user => user.outfits)
    user: User;
}