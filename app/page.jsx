import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Find & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          Prompts Powered by AI
        </span>
      </h1>
      <p className="desc text-center">
        A step towards Prompt Engineering, Prompt Paradise is an open-source AI
        prompting application that allows users to find, create, and share
        original prompts.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
