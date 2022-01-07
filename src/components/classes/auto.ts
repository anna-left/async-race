class Auto {
  id: number;

  name: string;

  color: string;

  carElement: HTMLElement;

  isSelected: boolean;

  // timer: NodeJS.Timer;

  // constructor(id: number, name: string, color: string, carElement: HTMLElement, isSelected = false, timer = 0) {
  constructor(id: number, name: string, color: string, carElement: HTMLElement, isSelected = false) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.carElement = carElement;
    this.isSelected = isSelected;
    // this.timer = timer;
  }
}

export { Auto };
