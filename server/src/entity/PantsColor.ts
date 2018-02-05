import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {PantsShoes} from "./PantsShoes";
import {ShirtPants} from "./ShirtPants";


@Entity("pant_colors")
@Index("color_UNIQUE",["color",],{unique:true})
export class PantsColor {

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

    @OneToMany(type=>PantsShoes, pant_shoes=>pant_shoes.pant_color_id)
    pant_shoes:PantsShoes[];

    @OneToMany(type=>ShirtPants, shirt_pants=>shirt_pants.pant_color_id)
    shirt_pants:ShirtPants[];

}
