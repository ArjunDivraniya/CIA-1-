export default async function ProductsPage({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
      cache: "no-store", // SSR - always fresh data
    });
    const posts = await res.json();
  
    return (
      <div>
       
        
          <div key={posts.id} style={{ marginBottom: "20px" }}>
            <h2><b>post Title : </b>{posts.title}</h2>
            <p><b>Post Body : </b>{posts.body}</p>
          </div>

      </div>
    );
  }