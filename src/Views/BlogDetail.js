import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import useFetch from "../Shared/useFetch";

function BlogDetail() {
  const history = useHistory();
  const endPoint = "http://localhost:3000/data/";
  const { id } = useParams();
  const { data: blog, isLoading } = useFetch(endPoint + id);
  const handleDelete = () => {
    fetch(endPoint + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="body">
      <h2 style={{ marginTop: "50px", textAlign: "center" }}>Blog Details</h2>
      {isLoading && <div>loading...</div>}
      {blog && (
        <>
          <button
            className="btn"
            style={{ float: "right" }}
            onClick={handleDelete}
          >
            delete
          </button>
          <h3 style={{ marginTop: "50px" }}>{blog.title}</h3>
          <p style={{ marginTop: "10px", textAlign: "justify", textJustify: "inter-word" }}>{blog.body}</p>
          <h5 style={{ marginTop: "50px", marginBottom: "50px" }}>Author By : {blog.author}</h5>
        </>
      )}
    </div>
  );
}

export default BlogDetail;
