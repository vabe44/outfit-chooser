import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {pant_shoe} from "./pant_shoe";


@Entity("shoe_colors")
@Index("id_UNIQUE",["id",],{unique:true})
@Index("color_UNIQUE",["color",],{unique:true})
export class shoe_colors {

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

    @OneToMany(type=>pant_shoe, pant_shoes=>pant_shoes.shoe_color_id)
    pant_shoes:pant_shoe[];

}
