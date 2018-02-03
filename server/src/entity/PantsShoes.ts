import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {PantsColor} from "./PantsColor";
import {ShoeColor} from "./ShoeColor";


@Entity("pant_shoe")
@Index("fk_pant_color2_idx",["pant_color_id",])
@Index("fk_shoe_color_idx",["shoe_color_id",])
export class PantsShoes {

    @Column("int",{
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;

    @ManyToOne(type=>PantsColor, pant_color_id=>pant_color_id.pant_shoes)
    @JoinColumn({ name:'pant_color_id'})
    pant_color_id:PantsColor;

    @ManyToOne(type=>ShoeColor, shoe_color_id=>shoe_color_id.pant_shoes)
    @JoinColumn({ name:'shoe_color_id'})
    shoe_color_id:ShoeColor;

}
