import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

TimeAgo.addLocale(en);

const SSG = ({ tweet }) => (
  <>
    <h2>{tweet.text}</h2>
    <p>{tweet.likes}</p>
    <div>
      <ReactTimeAgo date={Date.parse(tweet.date)} locale="en-US"></ReactTimeAgo>
    </div>
  </>
);

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://tuitah-carlos-sergi.herokuapp.com/tweets"
  );
  const tweets = await response.json();

  const paths = tweets.map((tweet) => ({
    params: { id: tweet.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://tuitah-carlos-sergi.herokuapp.com/tweets/${params.id}`
  );
  const tweet = await response.json();
  return {
    props: { tweet },
  };
};

export default SSG;
