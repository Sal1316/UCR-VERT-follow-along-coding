import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

const SingleThought = () => {
  const { thoughtId } = useParams();

  // TODO: Set up the useQuery to take query for a single thought by its ID
  const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    variable: { thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {thought.thoughtAuthor} <br />
        <span style={{ fontSize: "1rem" }}>
          had this thought on {thought.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: "1.5rem",
            fontStyle: "italic",
            border: "2px dotted #1a1a1a",
            lineHeight: "1.5",
          }}
        >
          {thought.thoughtText}
        </blockquote>
      </div>
    </div>
  );
};

export default SingleThought;
