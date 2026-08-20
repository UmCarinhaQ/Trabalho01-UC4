import { Character } from "./Character";

export class Party {
    private name: string;
    private members: Character[];

    constructor(name: string, members: Character[]) {
        this.name = name;
        this.members = members;
    }

    public getName(): string {
        return this.name;
    }

    public getMembers(): Character[] {
        return this.members;
    }

    public setName(value: string) {
        this.name = value;
    }

    public setMembers(value: Character[]) {
        this.members = value;
    }
    public addMember(character: Character): void {
        this.members.push(character)
    }
    public removeMember(character: Character): void {
        this.members.splice(this.members.indexOf(character), 1)
    }
    public showMembers(): void {
        console.log(`
 ========================
THE DRAGON SLAYERS
========================
`)

for(let character of this.members){
    console.log(character.showInfo())
}
    }

}