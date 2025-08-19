export default async function ProductsPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/", {
      cache: "no-store", // SSR - always fresh data
    });
    const posts = await res.json();
  
    return (
      <div>
        <h1>All Products</h1><br></br>
        {posts.map((post) => (
          <div key={post.id} style={{ marginBottom: "20px" }}>
            <h2><b>post Title : </b>{post.title}</h2>
            <p><b>Post Body : </b>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }