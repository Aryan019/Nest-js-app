import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('todo')
export class TodoController {

constructor(private appservice : AppService){}

@Get("/create")
createTodo(){
    return this.appservice.createtodo()
}

@Post("/create/post")
createPost(@Body() data){
    return data.name
}



}
