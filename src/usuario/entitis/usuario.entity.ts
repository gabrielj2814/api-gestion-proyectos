import {Column,PrimaryColumn, Entity} from "typeorm"

@Entity("usuario")
export class usuario{

    @PrimaryColumn()
    email:string

    @Column("varchar",{ length: 145 })
    nombre:string

    @Column("varchar", { length:255 })
    password:string

    @Column("varchar", { length:1 })
    status:string

    @Column()
    fecha_create:Date
    
    @Column()
    fecha_update:Date
}
