import ThoughtList from "../components/ThoughtList";
import { QUERY_THOUGHTS } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  const thoughts = data?.thoughts || []; // chaining basically says that if data is undefined, the everything following is undefined too.

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
