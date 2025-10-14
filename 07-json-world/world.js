import * as fs from 'fs';

const data = fs.readFileSync('world.json', 'utf-8');

const regions = JSON.parse(data);

for (const region of regions.regions) {
    console.log(`${region.name} (${region.climate})`);
}