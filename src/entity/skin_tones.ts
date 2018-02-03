import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn, JoinTable} from "typeorm";
import {skin_shirt} from "./skin_shirt";


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

    @OneToMany(type=>skin_shirt, skin_shirts=>skin_shirts.skin_tone_id)
    skin_shirts:skin_shirt[];

}
