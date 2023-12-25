import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { category, product, users } from '../sanity/schema/schemas'

const config = defineConfig({
    projectId: 'knks7h61',
    dataset: 'production',
    title: 'E-commerce',
    apiVersion: '2023-12-23',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: [product, category, users]},
})

export default config