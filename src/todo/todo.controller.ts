import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { CreateTodo } from './todo.dto';

@Controller('todo')
export class TodoController {

constructor(private appservice : AppService){}

private todos=[]

@Get("/create")
createTodo(){
    return this.appservice.createtodo()
}

// CreateTodo is a validation pipeline here 
// and goes through checks the validation pipeline here is with the name 
// todo.dto.ts

// and a middleware is also there in the main.ts file 
@Post("/create/post")
createPost(@Body() data: CreateTodo){
    // return data

    // Saving the data to the above array
    const item = {

        id: new Date().getTime(),
        // Spreading the data
        ...data,

        createdAt: new Date().toLocaleString()
    }

    this.todos.push(item)

    return {
        msg : "todo is created"
    }
}

@Get('/get')
getAllTodos(){ 

    return {
        todos : this.todos,
        length: this.todos.length,
        msg : "All the movies are listed above "
    }

}



}
