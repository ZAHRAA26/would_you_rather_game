import { Link } from "react-router-dom";
import { Header } from "semantic-ui-react";
const NotFoundPage = () => {
  return (
    <div>
      <img src="/notFound.png" alt="not Found page" />
      <Header as="h3">
        Oops, looks like you are in the middle of nowhere let me guide you{" "}
        <Link to="/dashboard">back to dashboard</Link>
      </Header>
    </div>
  );
};

export default NotFoundPage;
