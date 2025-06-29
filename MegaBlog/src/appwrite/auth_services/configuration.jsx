 import { Client,Databases,ID ,Storage,Query} from "appwrite";
 import config from "../../config";
class Database_services {
  client = new Client();
  databases;
  Storage_bucket;

  constructor() {
    this.client.setEndpoint(config.appwrite_url).setProject(config.appwrite_projectId);

    this.databases = new Databases(this.client);
    this.Storage_bucket = new Storage(this.client);
  }

  async createPost({ content, title, featuredImage, status, slug, userId }) {
    try {
      return await this.databases.createDocument(config.appwrite_databaseId, config.appwrite_collectionId, slug, {
        title,
        content,
        featuredImage,
        status,
        userId,
      });
    } catch (error) {
      console.log("Error in the create_post", error);
    }
  }

  async UpdatePost(slug, { content, title, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(config.appwrite_databaseId, config.appwrite_collectionId, slug, {
        content,
        title,
        featuredImage,
        status,
      });
    } catch (error) {
      console.log("Error in the UpdatePost", error);
    }
  }

  async RemovePost(slug) {
    try {
      await this.databases.deleteDocument(config.appwrite_databaseId, config.appwrite_collectionId, slug);

      return true;
    } catch (error) {
      console.log("Error in RemovePost", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(config.appwrite_databaseId, config.appwrite_collectionId, slug);
    } catch (error) {
      console.log("Appwrite serive :: getPost :: error", error);
      return false;
    }
  }

  async GetPosts() {
    try {
      return await this.databases.listDocuments(config.appwrite_databaseId, config.appwrite_collectionId, [
        Query.equal("status", "active"),
      ]);
    } catch (error) {
      console.log("Error in RemovePost", error);
      return false;
    }
  }

  async UploadFile(file) {
    try {
      return await this.Storage_bucket.createFile(config.appwrite_bucketId, ID.unique(), file);
    } catch (error) {
      console.log("Error in Upload file", error);
    }
  }

  async DeleteFile(fileId) {
    try {
      await this.Storage_bucket.deleteFile(config.appwrite_bucketId, fileId);
      return true;
    } catch (error) {
      console.log("Error in DeleteFile", error);
      return false;
    }
  }

  GetFilePreview(fileId) {
    try {
      const url = this.Storage_bucket.getFileView(config.appwrite_bucketId, fileId);
      return url;
    } catch (error) {
      console.log("Error in GetFilePreview", error);
      return null;
    }
  }
}
const Database_service = new Database_services()

export  default   Database_service;