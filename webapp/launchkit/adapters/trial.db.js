import { getMongoClient } from "./mongodb";
import { LICENSE_DB } from "./license.db";

// Collection name for trials
export const TRIALS_COLLECTION = "trials";

// Initialize trials collection with indexes
export async function initializeTrialsCollection() {
  const db = await getMongoClient(LICENSE_DB);
  
  // Create collection if it doesn't exist
  await db.createCollection(TRIALS_COLLECTION);
  
  // Create indexes
  const collection = db.collection(TRIALS_COLLECTION);
  
  // Unique index on device_id to prevent duplicate trials
  await collection.createIndex({ device_id: 1 }, { unique: true });
  
  // Index on expires_at for efficient expiry queries
  await collection.createIndex({ expires_at: 1 });
  
  // Index on created_at for analytics
  await collection.createIndex({ created_at: 1 });
}

// Helper function to get the trials collection
export async function getTrialsCollection() {
  const client = await getMongoClient(LICENSE_DB);
  return client.collection(TRIALS_COLLECTION);
}