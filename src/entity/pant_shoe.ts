import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {pant_colors} from "./pant_colors";
import {shoe_colors} from "./shoe_colors";


@Entity("pant_shoe")
@Index("fk_pant_color2_idx",["pant_color_id",])
@Index("fk_shoe_color_idx",["shoe_color_id",])
export class pant_shoe {

    @Column("int",{
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;

    @ManyToOne(type=>pant_colors, pant_color_id=>pant_color_id.pant_shoes)
    @JoinColumn({ name:'pant_color_id'})
    pant_color_id:pant_colors;

    @ManyToOne(type=>shoe_colors, shoe_color_id=>shoe_color_id.pant_shoes)
    @JoinColumn({ name:'shoe_color_id'})
    shoe_color_id:shoe_colors;

}
