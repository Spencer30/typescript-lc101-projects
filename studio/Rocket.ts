import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';


//Stopped at: 27.8.3.3. Rocket Class - 4. Methods
export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: string[] = [];
    astronauts: string[] = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name,
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass( items: Payload[] ): number{
        
        return 3
    }

    currentMassKg(): number {
        return 2
    }

    canAdd(item: Payload): boolean {
        return false
    }

    addCargo(cargo: Cargo): boolean {
        return true
    }

    addAstronaut(astronaut: Astronaut) {
        return true
    }
    
}