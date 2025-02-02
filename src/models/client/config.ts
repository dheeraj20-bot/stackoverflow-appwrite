import env from '@/env';

import { Client, Account ,Avatars, Databases, Storage } from 'appwrite';

const client = new Client()
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.projectId); // Replace with your project ID

const databases = new Databases(client);
const storage = new Storage(client);
const avatars = new Avatars(client);
const account = new Account(client);

export {
    databases,
    storage,
    avatars,
    account
}



