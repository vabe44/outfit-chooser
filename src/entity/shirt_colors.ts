import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {shirt_pant} from "./shirt_pant";
import {skin_shirt} from "./skin_shirt";


@Entity("shirt_colors")
@Index("color_UNIQUE",["color",],{unique:true})
export class shirt_colors {

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

    @OneToMany(type=>shirt_pant, shirt_pants=>shirt_pants.shirt_color_id)
    shirt_pants:shirt_pant[];

    @OneToMany(type=>skin_shirt, skin_shirts=>skin_shirts.shirt_color_id)
    skin_shirts:skin_shirt[];

}
