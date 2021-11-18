import { useRouter } from "next/router";

const SSG = ({ tweet }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="card">
        <div className="card-body">{tweet.text}</div>
        <div className="card-footer">Likes - {tweet.likes}</div>
      </div>
    </>
  );
};

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
    revalidate: 10,
  };
};

export default SSG;
