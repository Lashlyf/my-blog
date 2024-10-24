async function getData(){
  const query =`
  *[_type =="blog"]| order(_createdAt asc){title,
  "current":slug.current,publishedAt}`;
}

export default function Home() {
  return (
    <div>
      
      <h1>Hello from the index page</h1>
    </div>
  );
}
