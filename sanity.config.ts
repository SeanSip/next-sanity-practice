import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'lbs5w627',
  dataset: 'production',
  title: 'Sanity Headless CMS Practice',
  apiVersion: '2023-09-19',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
