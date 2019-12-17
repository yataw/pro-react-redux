
class SwapiService {
    baseUrl_ = `https://swapi.co/api/`;

    async getResource(url) {
        const res = await fetch(`${this.baseUrl_}${url}`);
        const body = await res.json();

        if (!res.ok)
            throw `[my] Could not fetch ${url}`;

        return body;
    }

    async getPerson(id) {
        const person = await this.getResource(`people/${id}`);

        return this.transformPerson_(person);
    }

    async getAllPeople() {
        const people = await this.getResource('people');

        return people.results.map(this.transformPerson_);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`planets/${id}`);

        return this.transformPlanet_(planet);
    }

    async getAllPlanets() {
        const planets = await this.getResource('planets');

        return planets.results.map(this.transformPlanet_);
    }

    async getStarship(id) {
        const starship = await this.getResource(`starships/${id}`);

        return this.transformStarship_(starship);
    }

    async getAllStarships() {

        const starships = await this.getResource('starships');

        return starships.results.map(this.transformStarship_);
    }

    extractId(item) {
        const id = (item.url.match(/(\d+)\/$/) || {})[1];

        if (!id)
            throw `Can't extract id from ${item.url}`;

        return id;
    }

    transformPlanet_(planet) {
        const id = this.extractId(planet);

        return {
            id,
            name: planet.name,
            population: planet.population,
            rotaionPeriod: planet.rotaion_period,
            diameter: planet.diameter,
        }
    }

    transformStarship_(starship) {
        const id = this.extractId(starship);

        return {
            id,
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    transformPerson_(person) {
        const id = this.extractId(person);

        return {
            id,
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eveColor: person.eveColor
        }
    }
}

export default new SwapiService();