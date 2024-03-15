import { useFetch } from "../../hooks/useFetch";

const Blog = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading data............</p>;
  if (error) return <p>error.....................</p>;

  return (
    <div>
      <h1>Blog 2</h1>
      <ul>
        {data.forEach((el) => {
          <li key={el.id}>{el.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Blog;
