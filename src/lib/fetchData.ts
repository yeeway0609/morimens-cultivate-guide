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

export async function fetchFilteredAwakers(query: string, careerFilter: string) {
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
    `;

    const awakers = data.rows;
    return awakers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all awakers.');
  }

  noStore();
}

export async function fetchAwaker(id: number) {
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
    throw new Error('Failed to fetch all awakers.');
  }

  noStore();
}