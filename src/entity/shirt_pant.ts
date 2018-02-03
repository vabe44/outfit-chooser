import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {shirt_colors} from "./shirt_colors";
import {pant_colors} from "./pant_colors";


@Entity("shirt_pant")
@Index("fk_shirt_color2_idx",["shirt_color_id",])
@Index("fk_pant_color_idx",["pant_color_id",])
export class shirt_pant {

    @Column("int",{
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;

    @ManyToOne(type=>shirt_colors, shirt_color_id=>shirt_color_id.shirt_pants)
    @JoinColumn({ name:'shirt_color_id'})
    shirt_color_id:shirt_colors;

    @ManyToOne(type=>pant_colors, pant_color_id=>pant_color_id.shirt_pants)
    @JoinColumn({ name:'pant_color_id'})
    pant_color_id:pant_colors;

}
