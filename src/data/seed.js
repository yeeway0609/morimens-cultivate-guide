const { db } = require('@vercel/postgres');
const awakers = require('./awakers.js');
const destiny_wheels = require('./destiny_wheels.js');
const covenants = require('./covenants.js');

async function seedAwakers(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS awakers (
        id smallint PRIMARY KEY,
        name varchar(20) NOT NULL,
        career varchar(20) NOT NULL,
        type varchar(20) NOT NULL,
        position varchar(20),
        intro text,
        rage_burst text,
        recommend_evolution smallint,
        recommend_evolution_desc text,
        recommend_destiny_wheels_id smallint[],
        recommend_destiny_wheels_desc text[],
        recommend_covenants_id smallint[],
        recommend_covenants_desc text[],
        recommend_teams jsonb[]
      );
    `;

    console.log(`Created "awakers" table`);

    const insertedAwakers = await Promise.all(
      awakers.map(
        (awaker) => client.sql`
          INSERT INTO awakers (id, name, career, type, position, intro, rage_burst, recommend_evolution, recommend_evolution_desc, recommend_destiny_wheels_id, recommend_destiny_wheels_desc, recommend_covenants_id, recommend_covenants_desc, recommend_teams)
          VALUES (${awaker.id}, ${awaker.name}, ${awaker.career}, ${awaker.type}, ${awaker.position}, ${awaker.intro}, ${awaker.rage_burst}, ${awaker.recommend_evolution}, ${awaker.recommend_evolution_desc}, ${awaker.recommend_destiny_wheels_id}, ${awaker.recommend_destiny_wheels_desc}, ${awaker.recommend_covenants_id}, ${awaker.recommend_covenants_desc}, ${awaker.recommend_teams})
        `,
      ),
    );

    console.log(`Seeded ${insertedAwakers.length} awakers`);

    return {
      createTable,
      awakers: insertedAwakers,
    };
  } catch (error) {
    console.error('Error seeding awakers:', error);
    throw error;
  }
}

async function seedDestinyWheels(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS destiny_wheels (
        id smallint PRIMARY KEY,
        name varchar(20),
        effect text,
        description text,
        recommend_awakers_id smallint[]
      );
    `;

    console.log(`Created "destiny_wheels" table`);

    const insertedDestinyWheels = await Promise.all(
      destiny_wheels.map(
        (destiny_wheel) => client.sql`
          INSERT INTO destiny_wheels (id, name, effect, description, recommend_awakers_id)
          VALUES (${destiny_wheel.id}, ${destiny_wheel.name}, ${destiny_wheel.effect}, ${destiny_wheel.description}, ${destiny_wheel.recommend_awakers_id})
        `,
      ),
    );

    console.log(`Seeded ${insertedDestinyWheels.length} destiny wheels`);

    return {
      createTable,
      destinyWheels: insertedDestinyWheels,
    };
  } catch (error) {
    console.error('Error seeding destiny wheels:', error);
    throw error;
  }
}

async function seedCovenants (client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS covenants (
        id smallint PRIMARY KEY,
        name varchar(20),
        effect text,
        description text,
        recommend_awakers_id smallint[]
      );
    `;

    console.log(`Created "covenants" table`);

    const insertedCovenants = await Promise.all(
      covenants.map(
        (covenant) => client.sql`
          INSERT INTO covenants (id, name, effect, description, recommend_awakers_id)
          VALUES (${covenant.id}, ${covenant.name}, ${covenant.effect}, ${covenant.description}, ${covenant.recommend_awakers_id})
        `,
      ),
    );

    console.log(`Seeded ${insertedCovenants.length} covenants`);

    return {
      createTable,
      covenants: insertedCovenants,
    };
  } catch (error) {
    console.error('Error seeding covenants:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  // Only run this once to seed the database
  // await seedAwakers(client);
  // await seedDestinyWheels(client);
  // await seedCovenants(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});