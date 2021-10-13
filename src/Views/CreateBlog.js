import { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateBlog() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const url = "http://localhost:3000/data";
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(() => {
      history.push("/");
      console.log("Inserted Successfully");
    });
  };
  return (
    <>
      <h2 style={{ marginTop: "40px", textAlign: "center" }}>Create Blogs</h2>
      <form onSubmit={handleSubmit} className="body">
        <div style={{ marginTop: "60px" }} className="form-group">
          <label>Title : </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label>Body : </label>
          <textarea cols="30" rows="10" value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
            required></textarea>
        </div>
        <div className="form-group">
          <label>Autor : </label>
          <select
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            required
          >
            <option value=""></option>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
        </div>
        <br />
        <button className="btn btn-blue" style={{ float: "right" }}>
          Add
        </button>
      </form>
    </>
  );
}

export default CreateBlog;
