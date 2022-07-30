import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line import/prefer-default-export
export const PORT = process.env.APP_PORT || '4000';
