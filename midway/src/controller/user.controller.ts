import { Inject, Controller,Post, Body} from '@midwayjs/decorator';
import { Validate } from '@midwayjs/validate';
import { Context } from '@midwayjs/koa';
import {UserLoginDTO} from '../dto/user.dto';
import { JwtService } from '@midwayjs/jwt';
import { UserModel } from '../model/user.model';



@Controller('/api/user')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  UserModel:UserModel;


  @Inject()
  JwtService: JwtService;

  @Post('/login')
  @Validate()
  async login(@Body()user:UserLoginDTO){
    const result = await this.UserModel.getUserByUsernameAndPassword(user.username,user.password)
    if(result){
      return{
        code: 200,
        result: "success",
        message: "登录成功",
        data: {
          token:this.JwtService.signSync({
            username:result.username,
            time:Date.now()
          })
        }
      }
    }else{
      return{
        code: 400,
        result: "error",
        message: "账号或密码不正确",
        data: null
      }
    }
  }


}
