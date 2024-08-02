export class Pool {
  constructor(private maximum: number, private minimum = 0) {
    this.current = this.maximum;
  }
  private current: number;

  reset() {
    this.current = this.maximum;
  }

  subtract(amount = 1) {
    this.current = Math.max(
      Math.min(this.current - amount, this.maximum),
      this.minimum
    );
  }

  add(amount = 1) {
    this.current = Math.max(
      Math.min(this.current + amount, this.maximum),
      this.minimum
    );
  }
}
