export class Character {
    private name: string;
    private level: number;
    private health: number;

    constructor(name: string, level: number, health: number) {
        this.name = name;
        this.level = level;
        this.health = health;
    }

    public getName(): string {
        return this.name;
    }

    public getLevel(): number {
        return this.level;
    }

    public getHealth(): number {
        return this.health;
    }

    public setName(value: string) {
        this.name = value;
    }

    public setLevel(value: number) {
        this.level = value;
    }


    public setHealth(value: number) {
        this.health = value;
    }

    public showInfo(): void {
        console.log(`
            ========================
            Character
            ========================
Name: ${this.name}
Level: ${this.level}
Health: ${this.health}`
        )
    }

    public takeDamage(amount: number): void {
      this.health -= amount
      if(this.health <= 0){
        this.health = 0
      }
    }
}