const BooksService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Paco Yunque',
  },
];

// Va a suplantar nuestro lib y los métodos necesarios
const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return a list of books', async () => {
      // Arrange
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(1);
    });

    test('should return a list of books', async () => {
      // Arrange
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books[0].name).toEqual('Paco Yunque');
    });
  });
});
