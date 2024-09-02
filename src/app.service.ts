import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(){
    return{
   "name" : "Aryan", 
    }
  }


  createtodo(){
    return "controller as service using it"
  }
}
