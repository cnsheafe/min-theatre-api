const search = require("../services/search-service");

jest.mock("node-fetch");
const fetch = require("node-fetch");

describe("Search", function () {
  beforeAll(function () {
    fetch.mockImplementation((url, options) => {
      return new Promise((resolve) => {
        resolve(new MockResponse(200));
      });
    });
  });

  test("should return list of results", function () {
    expect.assertions(1);
    return search("my-url").then(items => {
      expect(items).toHaveLength(5);
    });
  })
});

class MockResponse {
  constructor(status) {
    this.status = status;
  }

  json() {
    return new Promise(resolve => resolve({
      items: [1, 2, 3, 4, 5]
    }));
  }
}