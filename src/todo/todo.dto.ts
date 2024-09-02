import { IsEmail, IsNotEmpty } from "class-validator";

// Applying the validations to the validation pipline
export class CreateTodo{

    @IsNotEmpty({message : 'Name chahiye bhai '})
    title : string


    // Applying in the email validations here 
    // @IsEmail({})
    @IsNotEmpty()
    desc : string
}

// Creating in the 2nd validation pipeline
export class UpdateTodo{

    @IsNotEmpty()
    title : string
}