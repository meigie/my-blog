import { Client } from 'pg';

export async function connectDatabase() {
  const connectionString = `postgres://${process.env.postgres_username}@localhost:${process.env.postgres_port}/${process.env.postgres_database}`;

  const client = await new Client({
    connectionString: connectionString,
  });

  return client;
}
