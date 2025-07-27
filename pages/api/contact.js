import { connectDatabase } from '@/lib/db-util';

async function insertContact(client, data) {
  console.log('Inserting comment:', data);
  const { email, name, message } = data;

  await client.connect();
  return await client.query(
    'INSERT INTO contacts(email, name, message) VALUES($1, $2, $3) RETURNING *',
    [email, name, message]
  );
}

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Database connection failed.' });
      return;
    }

    try {
      await insertContact(client, newMessage);
      res
        .status(201)
        .json({ message: 'Successfully stored message!', message: newMessage });
    } catch (error) {
      res.status(500).json({ message: 'Database error.' });
    }

    await client.end();
  }
}

export default handler;
