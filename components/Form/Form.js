const { useState } = require("react");

const Form = () => {
  const initialPost = {
    text: "",
  };
  const [tweet, setTweet] = useState(initialPost);

  const handleOnChange = (event) => {
    setTweet({ ...tweet, [event.target.id]: event.target.value });
  };

  const createTweet = async () => {
    const response = await fetch(
      "https://tuitah-carlos-sergi.herokuapp.com/tweets/new",
      {
        method: "POST",
        body: JSON.stringify(tweet),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    await response.json();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createTweet(tweet);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="text">Text : </label>
      <textarea
        type="text"
        maxLength="200 "
        id="text"
        onChange={handleOnChange}
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default Form;
