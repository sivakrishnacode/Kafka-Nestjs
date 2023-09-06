import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrderDto } from './createOrder.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/create')
  @ApiResponse({
    description: 'create description',
    type: CreateOrderDto,
  })
  createOrder(@Body() data: CreateOrderDto) {
    this.appService.createOrder(data);
  }

  @Post('/update')
  updateOrder(@Body() data: CreateOrderDto) {
    this.appService.updateOrder(data);
  }
}
