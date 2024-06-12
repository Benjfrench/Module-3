  // Question 8
  const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

for (const property in sydney) {
    console.log(`${property}: ${sydney[property]}`);
  }

  const perth = {
    name: 'Perth',
    population: 1_985_000,
    state: 'WA',
    founded: '12 August 1829'
  }

  for (const property in perth) {
    console.log(`${property}: ${perth[property]}`);
  }

