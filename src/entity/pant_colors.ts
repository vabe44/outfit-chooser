import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {pant_shoe} from "./pant_shoe";
import {shirt_pant} from "./shirt_pant";


@Entity("pant_colors")
@Index("color_UNIQUE",["color",],{unique:true})
export class pant_colors {

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

    @OneToMany(type=>pant_shoe, pant_shoes=>pant_shoes.pant_color_id)
    pant_shoes:pant_shoe[];

    @OneToMany(type=>shirt_pant, shirt_pants=>shirt_pants.pant_color_id)
    shirt_pants:shirt_pant[];

}
