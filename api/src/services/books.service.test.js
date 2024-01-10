const { generateManyBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

/* const fakeBooks = [{
  _id: 1,
  name: 'Harry Potter',
},  {
  _id: 2,
  name: 'Don Quijote de la Mancha',
},
]; */

const mockGetAll = jest.fn();

/* const MongoLibStub = {
  getAll: spyGetAll,
  create: () => { },
}; */

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => { },
})));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });
  describe('Test for getBooks', () => {
    test('should return a list book', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(20)
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log('books: ', books);
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
    test('should return a list book', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(20)
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log('books: ', books);
      // Assert
      expect(books[0].name).toEqual(fakeBooks[0].name);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
  });
});
