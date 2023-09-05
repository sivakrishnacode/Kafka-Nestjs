import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './createOrder.dto';
import { ClientKafka } from '@nestjs/microservices';

// class
import { OrderCreateEvent } from './Events/createOrder.event';
import { OrderUpdateEvent } from './Events/updateOrder.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createOrder({ userId, price }: CreateOrderDto) {
    this.billingClient.emit(
      'order_created',
      new OrderCreateEvent('12345', userId, price),
    );
  }

  updateOrder({ userId, price }: any) {
    this.billingClient.emit(
      'order_updated',
      new OrderUpdateEvent('12345', userId, price),
    );
  }
}
