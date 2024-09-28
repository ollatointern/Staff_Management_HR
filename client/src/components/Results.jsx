import { useAuth } from "../contexts/AuthContexts";

const Results = () => {
  const { user } = useAuth();
  return <div>Your Results: {user?.name} </div>;
};

export default Results;
