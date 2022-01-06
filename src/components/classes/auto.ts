class Auto {
  num: number;

  name: string;

  color: string;

  carElement: HTMLElement;

  constructor(num: number, name: string, color: string, carElement: HTMLElement) {
    this.num = num;
    this.name = name;
    this.color = color;
    this.carElement = carElement;
  }
}

export { Auto };
