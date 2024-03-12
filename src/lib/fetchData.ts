import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

interface Awaker {
  id: number;
  name: string;
  career: string;
  type: string;
  position: string;
  intro: string;
  recommend_evolution: number;
  recommend_evolution_desc: string;
  rage_burst: string;
  recommend_destiny_wheels_id: number[];
  recommend_destiny_wheels_desc: string[];
  recommend_covenants_id: number[];
  recommend_covenants_desc: string[];
  recommend_teams: AwakerTeam[];
}

interface AwakerTeam {
  awaker_id: number[];
  awaker_position: string[];
  team_desc: string;
}

interface DestinyWheel {
  id: number;
  name: string;
  effect: string;
  description: string;
  recommend_awakers_id: number[];
}

interface Covenant {
  id: number;
  name: string;
  effect: string;
  description: string;
  recommend_awakers_id: number[];
}

// Example: fetchAllAwakers('朵', '混沌') will return the awakers whose name contains "朵" and career contains "混沌".
export async function fetchFilteredAwakers(query: string, careerFilter: string) {
  noStore();

  try {
    const data = await sql<Awaker>`
      SELECT
        id,
        name,
        career
      FROM awakers
      WHERE
        name ILIKE ${`%${query}%`} AND
        career ILIKE ${`%${careerFilter}%`}
      ORDER BY id
    `;

    const awakers = data.rows;
    return awakers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all awakers.');
  }
}

// Example: fetchAwakersByCareer(1) will return all data about tha awaker "拉蒙娜"
export async function fetchAwaker(id: number) {
  noStore();
  try {
    const data = await sql<Awaker>`
      SELECT
        id,
        name,
        career,
        type,
        position,
        intro,
        recommend_evolution,
        recommend_evolution_desc,
        rage_burst,
        recommend_destiny_wheels_id,
        recommend_destiny_wheels_desc,
        recommend_covenants_id,
        recommend_covenants_desc,
        recommend_teams
      FROM awakers
      WHERE
        id = ${id}
    `;

    const awakers = data.rows[0];
    return awakers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch the awakers.');
  }
}

// Example: fetchDestinyWheelsNameById([1, 2, 3]) will return ["溯洄時針", "騎士之心", "星天之獸"].
export async function fetchDestinyWheelsNameById(id_array: any) {
  noStore();

  try {
    const data = await sql<DestinyWheel>`
      SELECT name
      FROM destiny_wheels
      WHERE id = ANY (${id_array})
      ORDER BY array_position(${id_array}, id)
    `;

    const destiny_wheels = data.rows.map((row) => row.name);
    return destiny_wheels;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch the destiny wheels.');
  }
}

// Example: fetchCovenantsNameById([1, 2, 3]) will return ["機械降神", "扭曲雙子 · 白", "扭曲雙子 · 黑"].
export async function fetchCovenantsNameById(id_array: any) {
  noStore();

  try {
    const data = await sql<Covenant>`
      SELECT name
      FROM covenants
      WHERE id = ANY (${id_array})
      ORDER BY array_position(${id_array}, id)
    `;

    const covenants = data.rows.map((row) => row.name);
    return covenants;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch the destiny wheels.');
  }
}