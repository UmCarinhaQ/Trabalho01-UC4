import { Character } from "./Character";
import { Weapon } from "./Weapon";

export class Warrior extends Character {

    private strength: number;
    private weapon: Weapon;

    constructor(
        name: string, damage: number, manaCost: number, strength: number, weapon: Weapon) {
        super(name, damage, manaCost);
        this.strength = strength;
        this.weapon = weapon;
    }

    public getStrength(): number {
        return this.strength;
    }

    public getWeapon(): Weapon {
        return this.weapon;
    }

    public setStrength(value: number): void {
        this.strength = value;
    }

    public setWeapon(value: Weapon): void {
        this.weapon = value;
    }

    public attack(): void {
        console.log(`
        Aragorn attacks ${this.weapon}
        Damage: ${this.takeDamage}
        `);
    }
}