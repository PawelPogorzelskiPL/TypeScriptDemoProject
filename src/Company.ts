import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable{
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = "green";

    constructor() {
        this.name = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        };
    };

    markerContent(): string {
        return `
        <div>
            <h2>Company Name is: ${this.name}</h2>
            <h3>Catchphrase is: ${this.catchPhrase}</h3>
        </div>
        `;
    }

}