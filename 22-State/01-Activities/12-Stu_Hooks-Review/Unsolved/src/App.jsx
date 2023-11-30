import { useState, useEffect } from "react";
import IssueList from "./components/IssueList";

function App() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    getRepoIssues("facebook/react");
  }, []);

  const getRepoIssues = async (repo) => {
    let issuesURL = `https://api.github.com/repos/${repo}/issues?direction=asc`;
    const response = await fetch(issuesURL);
    const data = await response.json();
    setIssues(data);
  };

  return (
    <div className="container">
      <h2 className="header">GitHub issues for React</h2>
      <span className="text-primary">
        Stored in state variable <code>issues</code>
      </span>
      <hr></hr>
      <div className="ui grid">
        <div className="row">
          <div className="col-11">
            <IssueList issues={issues} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
