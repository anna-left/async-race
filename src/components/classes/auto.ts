class Auto {
  num: number;

  name: string;

  color: string;

  carElement: HTMLElement;

  isSelected: boolean;

  constructor(num: number, name: string, color: string, carElement: HTMLElement, isSelected = false) {
    this.num = num;
    this.name = name;
    this.color = color;
    this.carElement = carElement;
    this.isSelected = isSelected;
  }
}

export { Auto };
