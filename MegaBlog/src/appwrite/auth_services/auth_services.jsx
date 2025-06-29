import { Client, Account,ID } from "appwrite";
import config from '../../config/index';
class Auth_services {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwrite_url) // Your API Endpoint
      .setProject(config.appwrite_projectId) //project id
      
    this.account = new Account(this.client);
  }

  async create_account({ email, password, name }) {
    try {
      const Account = await this.account.create(ID.unique(), email, password, name);
      if (Account) {
        return await this.Login({ email, password });
      } else {
        return Account;
      }
    } catch (error) {
      console.log("Error in create_account", error);
    }
  }

  async Login({ email, password }) {
    try {
      await this.account.createEmailPasswordSession(email, password);
      return await this.getUser_status(); 
    } catch (error) {
      console.error("Login failed:", error);
      throw error; 
    }
  }

  async Logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Error in Logout", error);
    }
    return null;
  }

  async getUser_status() {
    try {
      return await this.account.get();
    } catch (error) {
      if (error.code === 401) {
        console.log("No active session - user is not logged in");
        return null;
      }
      console.error("Failed to fetch user:", error);
      throw error;
    }
  }
}

 const auth_services = new Auth_services();

 export default auth_services;
