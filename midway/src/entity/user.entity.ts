import { Provide } from "@midwayjs/decorator"
import { Column, PrimaryGeneratedColumn } from "typeorm"

@Provide()
export class UserEntity {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "用户的自增ID",
  })
  id: Number
  @Column("varchar", {
    name: "username",
    comment: "用户名",
    length: 64,
  })
  username: string
  @Column("varchar", {
    name: "password",
    comment: "用户密码",
    nullable: true,
    length: 64,
  })
  password: string | null
}
