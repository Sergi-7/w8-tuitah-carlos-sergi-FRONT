import server from "../__mocks__/server";
import { getServerSideProps } from "../pages/tweetslist/index";
import "whatwg-fetch";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given a getServerSideProps function", () => {
  describe("When it is invoked", () => {
    test("Then it should return an object with a list of tweets inside a property props", async () => {
      const expectedProps = {
        props: {
          tweetsList: [
            { text: "aaaaaaaaa", likes: 0, date: new Date() },
            { text: "iiiiiiiii", likes: 1, date: new Date() },
          ],
        },
      };
      const props = await getServerSideProps();

      expect(props).toEqual(expectedProps);
    });
  });
});
