import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto{

    @IsString()
    @IsUUID()
    readonly id:string;

    @IsString({message:'El modelo esta incorrecto'})
    @IsOptional()
    readonly model:string;

    @IsString({message:'La marca esta incorrecta'})
    @MinLength(3)
    @IsOptional()
    readonly brand:string;

}