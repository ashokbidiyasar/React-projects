

const config = {
  appwrite_url: String(import.meta.env.VITE_APPWRITE_URL),
  appwrite_projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwrite_databaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwrite_collectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwrite_bucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  Tiny_mce_api_key: String(import.meta.env.VITE_TINY_MCE_API_KEY),
};

export default config;