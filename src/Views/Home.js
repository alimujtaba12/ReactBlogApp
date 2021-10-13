import { Blog } from "../Components/index";
import useFetch from "../Shared/useFetch";

function Home() {
  const endPoint = 'http://localhost:3000/data';
  const { data: blogs, isLoading } = useFetch(endPoint);
  return (
    <>
      {isLoading && <div>loading...</div>}
      {blogs && <Blog blogs={blogs} />}
    </>
  );
}

export default Home;


