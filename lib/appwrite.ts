import { Avatars, Client, Account } from 'react-native-appwrite';
import * as Linking from 'expo-linking';

export const config = {
    platform: 'com.mert.restate',
    endpoint: process.env.REACT_APP_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID
    
}

export const client = new Client();

client.setEndpoint(config.endpoint!).setProject(config.projectId!).setPlatform(config.platform);

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function login(email: string, password: string) {
    try {
        const redirectUri = Linking.createURL('/');
        return account.createSession(email, password);
    } catch (error) {
        console.error(error);
        return false;
        
    }
}