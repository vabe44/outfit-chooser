import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {SkinTone} from "./SkinTone";
import {ShirtColor} from "./ShirtColor";


@Entity("skin_shirt")
@Index("fk_skin_tone_idx",["skin_tone_id",])
@Index("fk_shirt_color_idx",["shirt_color_id",])
export class SkinShirt {

    @ManyToOne(type=>SkinTone, skin_tone_id=>skin_tone_id.skin_shirts, {
        eager: true
    })
    @JoinColumn({ name:'skin_tone_id'})
    skin_tone_id:SkinTone;

    @ManyToOne(type=>ShirtColor, shirt_color_id=>shirt_color_id.skin_shirts, {
        eager: true
    })
    @JoinColumn({ name:'shirt_color_id'})
    shirt_color_id:ShirtColor;

    @Column("int",{
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;

}
