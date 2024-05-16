import { IsString, MinLength } from "class-validator";

export class CreateCarDto{

    @IsString({message:'El modelo esta incorrecto'})
    readonly model:string;
    @IsString({message:'La marca esta incorrecta'})
    @MinLength(3)
    readonly brand:string;

}