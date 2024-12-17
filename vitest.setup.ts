import { config } from 'dotenv-safe';

// If not in CI, load the .env file and check for missing variables using dotenv-safe.
if (!process.env.CI) config();
