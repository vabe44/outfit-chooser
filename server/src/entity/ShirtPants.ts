import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {ShirtColor} from "./ShirtColor";
import {PantsColor} from "./PantsColor";


@Entity("shirt_pant")
@Index("fk_shirt_color2_idx",["shirt_color_id",])
@Index("fk_pant_color_idx",["pant_color_id",])
export class ShirtPants {

    @Column("int",{
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;

    @ManyToOne(type=>ShirtColor, shirt_color_id=>shirt_color_id.shirt_pants)
    @JoinColumn({ name:'shirt_color_id'})
    shirt_color_id:ShirtColor;

    @ManyToOne(type=>PantsColor, pant_color_id=>pant_color_id.shirt_pants)
    @JoinColumn({ name:'pant_color_id'})
    pant_color_id:PantsColor;

}
