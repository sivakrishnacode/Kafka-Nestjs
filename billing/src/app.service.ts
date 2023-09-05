import { Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from './orderCreatedEvent';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleOrderCreated(orderCreateedEvent: OrderCreatedEvent) {
    console.log('order created topic');
    console.log(orderCreateedEvent);
  }

  handleOrderUpdated(orderUpdatedEvent: any) {
    console.log('order updated topic');
    console.log(orderUpdatedEvent);
  }
}
