import * as fs from 'fs';

const data = fs.readFileSync('world.json', 'utf-8');

const regions = JSON.parse(data);

for (const region of regions.regions) {
    console.log(`\nWelcome to ${region.name}`);
    for (let i = 0; i < region.towns.length; i++) {
        if (i === 0) {
            console.log(`Here, you can meet the wonderful people of ${region.towns[i].name}, such as:`)
        } else {
            console.log(`There is also the people of ${region.towns[i].name}:`)
        }
        for (const person of region.towns[i].notable_people) {
            console.log(person.name)
        }
    }

}