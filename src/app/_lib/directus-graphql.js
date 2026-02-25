import { createDirectus, staticToken, graphql } from '@directus/sdk';

const directus2 = createDirectus( process.env.DIRECTUS_URL ).with(staticToken(process.env.DIRECTUS_TOKEN)).with(graphql());

export default directus2;