// Mock the MongoDB client
jest.mock('./adapters/mongodb', () => ({
  getMongoClient: jest.fn(() => ({
    collection: jest.fn(),
  })),
}));

// Mock bcryptjs
jest.mock('bcryptjs', () => ({
  hash: jest.fn(() => 'hashed_password'),
  compare: jest.fn(() => true),
}));
