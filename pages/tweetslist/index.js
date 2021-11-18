const tweetslist = ({ tweetsList }) => (
  <>
    <h2>Listado de tweets</h2>
    <ul>
      {tweetsList.map((tweet) => (
        <li key={tweet.id}>
          <h2>{tweet.text}</h2>
        </li>
      ))}
    </ul>
  </>
);

export async function getServerSideProps() {
  const response = await fetch(
    "https://tuitah-carlos-sergi.herokuapp.com/tweets"
  );
  const tweetsList = await response.json();
  return { props: { tweetsList } };
}

export default tweetslist;
