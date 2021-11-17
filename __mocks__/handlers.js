import { rest } from "msw";

const handlers = [
  rest.get(
    "https://tuitah-carlos-sergi.herokuapp.com/tweets",
    (req, res, ctx) =>
      res(
        ctx.json([
          { text: "aaaaaaaaa", likes: 0, date: new Date() },
          { text: "iiiiiiiii", likes: 1, date: new Date() },
        ])
      )
  ),
];

export default handlers;
