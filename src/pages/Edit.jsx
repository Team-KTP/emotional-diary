import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();

  return <h1>Edit{params.id}</h1>;
};

export default Edit;
