export class OrderCreateEvent {
  constructor(
    public readonly orderId: string,
    public readonly userId: string,
    public readonly price: number,
  ) {}

  toString() {
    return JSON.stringify({
      order: this.orderId,
      userId: this.userId,
      price: this.price,
    });
  }
}
