import { ShirtColor } from './ShirtColor';
import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToOne, JoinColumn} from "typeorm";
import { User } from "./User";
import { PantsColor } from './PantsColor';
import { ShoeColor } from './ShoeColor';

@Entity()
export class Outfit extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => ShirtColor, {eager: true})
    @JoinColumn({ name: 'shirt'})
    shirt: ShirtColor;

    @OneToOne(type => PantsColor, {eager: true})
    @JoinColumn({ name: 'pants'})
    pants: PantsColor;

    @OneToOne(type => ShoeColor, {eager: true})
    @JoinColumn({ name: 'shoes'})
    shoes: ShoeColor;

    @Column()
    name: string;

    @ManyToOne(type => User, user => user.outfits)
    @JoinColumn({ name: 'user'})
    user: User;
}