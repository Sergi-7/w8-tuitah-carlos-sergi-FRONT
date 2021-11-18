import Link from "next/link";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import axios from "axios";

TimeAgo.addDefaultLocale(en);

const tweetslist = ({ tweetsList }) => {
  const deleteTweet = async (id) => {
    await fetch(
      `https://tuitah-carlos-sergi.herokuapp.com/tweets/delete/${id}`,
      {
        method: "DELETE",
      }
    );
  };

  const likeTweet = async (tweet) => {
    await axios.patch(
      "https://tuitah-carlos-sergi.herokuapp.com/tweets/like",
      tweet
    );
  };

  return (
    <>
      <h2>Listado de tweets</h2>
      <ul>
        {tweetsList.map((tweet) => (
          <li key={tweet.id}>
            <h2>{tweet.text}</h2>
            <p>{`Likes : ${tweet.likes}`}</p>
            <ReactTimeAgo
              date={Date.parse(tweet.date)}
              locale="en-US"
              timeStyle="round"
            ></ReactTimeAgo>
            <button onClick={() => deleteTweet(tweet.id)}>Delete</button>
            <button onClick={() => likeTweet(tweet)}>Like</button>
            <Link href={`tweetslist/${tweet.id}`}>Ver más</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch(
    "https://tuitah-carlos-sergi.herokuapp.com/tweets"
  );
  const tweetsList = await response.json();
  tweetsList.reverse();
  return { props: { tweetsList } };
}

export default tweetslist;
