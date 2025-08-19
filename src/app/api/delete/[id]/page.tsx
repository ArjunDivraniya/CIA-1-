export default async function ProductsPage({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
      method :"DELETE", // SSR - always fresh data
    });
    const posts = await res.json();
  
    return (
      <div>
       
        
          <div key={posts.id} style={{ marginBottom: "20px" }}>

            <h1>DELETE Succesfully : {params.id}</h1>
          
          </div>

      </div>
    );
  }