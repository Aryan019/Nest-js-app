import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { CreateTodo, UpdateTodo } from './todo.dto';

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

        createdAt: new Date().toLocaleString(),
        isComplete: false,
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


@Put('/update/:id')
updateTodos(@Param('id') id:number, @Body() data:UpdateTodo){

    const new_todos = this.todos.map((curr,i)=>{
        if(curr.id==id){
            return {
                ...curr,
                ['title'] : data.title,
                isComplete : true
            }
        }
        return curr
    })

    this.todos = new_todos
    return{
        msg : "todo is updated bro"
    }

    return {
        id
    }

}

@Delete('/delete/:id')
deleteToDo(@Param('id') id:number){

    const new_todos = this.todos.filter((c)=>c.id != id)
    this.todos = new_todos

    return {
        msg : "Deletion is done "
    }
}




}
