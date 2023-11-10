import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: 'v95jruta',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-11-10',


})
const builder = imageBuilder(client);

export const urlFor = source=> builder.image(source);

export default client;