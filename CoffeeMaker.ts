class CoffeeMaker {
  //not sure if this name has to be the same of file
  //very similiar to java

  private brand: string;
  private hasTimer: boolean;

  constructor(brand: string, hasTimer: boolean) {
    this.brand = brand;
    this.hasTimer = hasTimer;
  }

  getBrand(): string {
    return this.brand;
  }

  setBrand(brand: string): void {
    this.brand = brand;
  }

  getHasTimer(): boolean {
    return this.hasTimer;
  }

  setHasTimer(hasTimer: boolean): void {
    this.hasTimer = hasTimer;
  }
}
