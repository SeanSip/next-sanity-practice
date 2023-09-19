import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import project from './sanity/schemas/project-schema';

const config = defineConfig({
  projectId: 'lbs5w627',
  dataset: 'production',
  title: 'Sanity Headless CMS Practice',
  apiVersion: '2023-09-19',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: [project] },
});

export default config;
