export class Dice {
  constructor(public count = 1, public sides = 1, public modifier = 0) {}

  roll() {
    let total = 0;
    for (let i = 0; i < this.count; ++i) {
      total = total + Math.floor(Math.random() * this.sides) + 1;
    }
    return total + this.modifier;
  }

  static roll(count = 1, sides = 1, modifier = 0) {
    return new Dice(count, sides, modifier).roll();
  }
}
