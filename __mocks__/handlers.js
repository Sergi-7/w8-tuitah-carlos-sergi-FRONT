import { rest } from "msw";

const handlers = [
  rest.get(
    "https://tuitah-carlos-sergi.herokuapp.com/tweets",
    (req, res, ctx) =>
      res(
        ctx.json([
          {
            id: 1,
            text: "aaaaaaaaa",
            likes: 0,
            date: "2021-11-18T22:27:37.347Z ",
          },
          {
            id: 2,
            text: "iiiiiiiii",
            likes: 1,
            date: "2021-11-18T22:27:37.347Z",
          },
        ])
      )
  ),
  rest.get(
    "https://tuitah-carlos-sergi.herokuapp.com/tweets/1",
    (req, res, ctx) =>
      res(
        ctx.json({
          id: 1,
          text: "aaaaaaaaa",
          likes: 0,
          date: "2021-11-18T22:27:37.347Z ",
        })
      )
  ),
];

export default handlers;
