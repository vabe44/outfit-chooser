import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn, JoinTable} from "typeorm";
import {SkinShirt} from "./SkinShirt";


@Entity("skin_tones")
@Index("id_UNIQUE",["id",],{unique:true})
export class SkinTone {

    @Column("int",{
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;

    @Column("varchar",{
        nullable:false,
        length:45,
        name:"tone"
        })
    tone:string;

    @OneToMany(type=>SkinShirt, skin_shirts=>skin_shirts.skin_tone_id)
    skin_shirts:SkinShirt[];

}
