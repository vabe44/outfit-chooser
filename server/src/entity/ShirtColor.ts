import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {ShirtPants} from "./ShirtPants";
import {SkinShirt} from "./SkinShirt";
import { Outfit } from "./Outfit";


@Entity("shirt_colors")
@Index("color_UNIQUE",["color",],{unique:true})
export class ShirtColor {

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
        name:"color"
        })
    color:string;

    @Column("varchar",{
        nullable:false,
        length:45,
        name:"colorcode"
        })
    colorcode:string;

    @OneToMany(type=>ShirtPants, shirt_pants=>shirt_pants.shirt_color_id)
    shirt_pants:ShirtPants[];

    @OneToMany(type=>ShirtPants, skin_shirts=>skin_shirts.shirt_color_id)
    skin_shirts:ShirtPants[];

}
