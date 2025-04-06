import { Client, Account, Avatars, OAuthProvider } from "react-native-appwrite";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

export const config = {
  platform: "com.homifi",
  endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
};

export const client = new Client();

client
  .setEndpoint(config.endpoint!) 
  .setProject(config.projectId!)
  .setPlatform(config.platform!);

export const avator = new Avatars(client);
export const account = new Account(client);

function setPlatform(arg0: string) {
  throw new Error("Function not implemented.");
}

async function openAuthSessionAsync(url: string, redirectUrl: string) {
  const result = await WebBrowser.openAuthSessionAsync(url, redirectUrl);
  return result;
}

export async function login() {
  try {
    const redirectUrl = Linking.createURL("/");
    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUrl
    );
    if (!response) throw new Error("Failed to login");

    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirectUrl
    );

    if (browserResult.type !== "success") throw new Error("Failed to login");

    const url = new URL(browserResult.url);

    const secret = url.searchParams.get("secret")?.toString();
    const userId = url.searchParams.get("userId")?.toString();

    if (!secret || !userId) throw new Error("Failed to login");

    const session = await account.createSession(userId, secret);
    if (!session) throw new Error("Failed to create session");

    return true;
  } catch (error) {
    console.error("Error logging in:", error);
    return false;
  }
}

export async function logout() {
    try {
        const session = await account.deleteSession("current");
        if (!session) throw new Error("Failed to logout");
        return true;
    } catch (error) {
        console.error("Error logging out:", error);
        return false;
    }
}

export async function getUser() {
  try {
    const response = await account.get();

    if(response.$id){
        const userAvator =avator.getInitials(response.name);
        return {
            ...response,
            avator: userAvator.toString(),
        }
    }
    
  } catch (error) {
    console.error("Error getting user:", error);
    return null;
  }
}
