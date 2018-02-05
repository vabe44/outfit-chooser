import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {PantsShoes} from "./PantsShoes";


@Entity("shoe_colors")
@Index("id_UNIQUE",["id",],{unique:true})
@Index("color_UNIQUE",["color",],{unique:true})
export class ShoeColor {

    @Column("int",{
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

    @OneToMany(type=>PantsShoes, pant_shoes=>pant_shoes.shoe_color_id)
    pant_shoes:PantsShoes[];

}
