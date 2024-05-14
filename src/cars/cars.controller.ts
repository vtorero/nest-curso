import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ParamsTokenFactory } from '@nestjs/core/pipes';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService:CarsService
    ){}

    @Get()
    getAllCars( ){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCardById(@Param('id',ParseIntPipe) id:number){
        console.log({id})
        return this.carsService.findOneByID(+id);
     }

     @Post()
        createCar(@Body() body:any){
            return body;
    }

    @Patch(':id')
    updateCar(
        @Param('id',ParseIntPipe) id:number,
        @Body() body
        )
        {
            return body;
        }

    @Delete(':id')
    deleteCar(@Param('id',ParseIntPipe) id:number){
        return{
            id:id,
            method:"delete"
        }

    }




}
