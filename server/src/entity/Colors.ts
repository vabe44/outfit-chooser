import { Outfit } from './Outfit';
import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {PantsShoes} from "./PantsShoes";
import {ShirtPants} from "./ShirtPants";


@Entity("colors")
@Index("color_UNIQUE",["name",],{unique:true})
export class Color {

    @Column("int",{
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;

    @Column("varchar",{
        nullable:false,
        length:45,
        name:"name"
        })
    name:string;

    @Column("varchar",{
        nullable:false,
        length:45,
        name:"hex"
        })
    hex:string;

    @Column("varchar",{
        nullable:false,
        length:45,
        name:"rgb"
        })
    rgb:string;

    @OneToMany(type=>PantsShoes, pant_shoes=>pant_shoes.pant_color_id)
    pant_shoes:PantsShoes[];

    @OneToMany(type=>ShirtPants, shirt_pants=>shirt_pants.pant_color_id)
    shirt_pants:ShirtPants[];

    @OneToMany(type=>ShirtPants, skin_shirts=>skin_shirts.shirt_color_id)
    skin_shirts:ShirtPants[];
}
