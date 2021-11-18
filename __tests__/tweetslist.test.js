/**
 * @jest-environment jsdom
 */

import server from "../__mocks__/server";
import { getServerSideProps } from "../pages/tweetslist/index";
import "whatwg-fetch";
import { getStaticProps } from "../pages/tweetslist/[id]";

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
            {
              id: 2,
              text: "iiiiiiiii",
              likes: 1,
              date: "2021-11-18T22:27:37.347Z",
            },
            {
              id: 1,
              text: "aaaaaaaaa",
              likes: 0,
              date: "2021-11-18T22:27:37.347Z ",
            },
          ],
        },
      };
      const props = await getServerSideProps();

      expect(props).toEqual(expectedProps);
    });
  });
});

describe("Given a getStaticProps function", () => {
  describe("When it is invoked", () => {
    test("Then it should return an object with a tweet and a revalidate property with value 10", async () => {
      const params = { id: 1 };
      const expectedProps = {
        props: {
          tweet: {
            id: 1,
            text: "aaaaaaaaa",
            likes: 0,
            date: "2021-11-18T22:27:37.347Z ",
          },
        },
        revalidate: 10,
      };
      const props = await getStaticProps({ params });
      expect(props).toEqual(expectedProps);
    });
  });
});
