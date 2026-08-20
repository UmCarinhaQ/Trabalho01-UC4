import { Character } from "./Character"; 
import { Mage } from "./Mage";
import { Party } from "./Party";
import { Spell } from "./Spell";
import { Warrior } from "./Warrior";
import { Weapon } from "./Weapon";

//Weapons
const longsword = new Weapon("Longsword", 35);
const battleAxe = new Weapon("Battle Axe", 45);

//Spells
const fireball = new Spell("Fireball", 50, 30);
const iceBolt = new Spell("Ice Bolt", 30, 20);

// WARRIORS
const aragorn = new Warrior("Aragorn",10,150,20,longsword);
const gimli = new Warrior( "Gimli", 9,170, 25, battleAxe);


// MAGES
const gandalf = new Mage("Gandalf",12,150,100,fireball);
const merlin = new Mage( "Merlin", 8,120,110,iceBolt);

// PARTY
const party = new Party("The Dragon Slayers", []);

party.addMember(aragorn);
party.addMember(gimli);
party.addMember(gandalf);
party.addMember(merlin);

// MOSTRAR PARTY
party.showMembers();