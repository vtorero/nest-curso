import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

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
    getCardById(@Param('id',ParseUUIDPipe) id:string){
        console.log({id})
        return this.carsService.findOneByID(id);
     }

     @Post()
     @UsePipes(ValidationPipe)
        createCar(@Body() createCardDto:CreateCarDto){
            return  this.carsService.create(createCardDto);
    }

    @Patch(':id')
    updateCar(
        @Param('id',ParseUUIDPipe) id:string,
        @Body() updateCarDto:UpdateCarDto
        )
        {
            return this.carsService.update(id,updateCarDto);
        }

    @Delete(':id')
    deleteCar(@Param('id',ParseUUIDPipe) id:string){
        this.carsService.delete(id);
        return{
            id:id,
            method:"delete"
        }

    }



}
