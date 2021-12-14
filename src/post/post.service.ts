import { connection } from '../database/mysql';

export const getPosts = async () => {
  const statement = `
      SELECT 
        post.id, 
        post.title, 
        post.content,
        JSON_OBJECT(
          'id',user.id,
          'name',user.name
        )as user       
      FROM post LEFT JOIN user
      ON userId = user.id
      `;

  const [data] = await connection.promise().query(statement);
  return data;
};
