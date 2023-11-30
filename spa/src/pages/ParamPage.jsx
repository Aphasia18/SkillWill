import { useParams } from "react-router-dom";
const data = [
  { id: 1, name: "she stole her coat" },
  { id: 2, name: "coat is very very expensive" },
  { id: 3, name: "she can go invisible" },
];
const ParamPage = () => {
  const { factId } = useParams();

  const fact = data.find((fact) => fact.id === parseInt(factId));
  if (!fact) {
    return <div>user nor found</div>;
  }
  return (
    <div>
      <h1>{fact.name}</h1>
    </div>
  );
};

export default ParamPage;
