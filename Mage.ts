import { Character } from "./Character";
import { Spell } from "./Spell";

export class Mage extends Character {
    private mana: number;
    private spell: Spell;

    constructor(name: string, damage: number, manaCost: number, mana: number, spell: Spell) {
        super(name, damage, manaCost);
        this.mana = mana;
        this.spell = spell;
    }

    public getMana(): number {
        return this.mana;
    }

    public getSpell(): Spell {
        return this.spell;
    }

    public setMana(value: number) {
        this.mana = value;
    }

    public setSpell(value: Spell) {
        this.spell = value;
    }

    castSpell(): void {
        if (this.mana >= this.spell.getManaCost()) {
            this.mana -= this.spell.getManaCost()

            console.log(`
            ${this.spell}
            Damege: ${this.takeDamage}
            Mana remaining: ${this.mana}`)
        }
        else {
            console.log("Gandalf does not have enough mana!")
        }
    }
}