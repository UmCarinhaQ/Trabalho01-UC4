export class Weapon {
    private name: string;
    private damage: number;

    constructor(name: string, damage: number) {
        this.name = name;
        this.damage = damage;
    }


    public getNname(): string {
        return this.name;
    }


    public getDamage(): number {
        return this.damage;
    }


    public setName(value: string) {
        this.name = value;
    }

    public setDamage(value: number) {
        this.damage = value;
    }

    public showInfo() {
        console.log(`
        ========================
               Weapon
       ========================
Name: ${this.name}
Damage: ${this.damage}
        `)
    }
}