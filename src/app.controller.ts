import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(){
    // return this.appService.getHello();

    return {
      "msg" : "Welcome to the base url"
    }
  }


  // First the route comes 
  // After that the function which will be executed when the / login route is hitted 
  @Get("/login")
  loginFunction(){
    return "Hitting in the login part"
  }
}
