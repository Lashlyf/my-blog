import { Card } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from 'next/image';

async function getData(){
  const query =`
  *[_type =="blog"]| order(_createdAt asc){title,
  "current":slug.current,publishedAt,image}`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  
  const data: simpleBlogCard[] = await getData();
console.log(data);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 mt-5">
      {data.map((post,idx)=>(
        <Card key={idx}>
          <Image 
          src={urlFor(post.image).url()} alt="image" height={500} width={500} className="rounded-t-lg h-[200px] object-cover"/>
        </Card>
      ))}
      
    </div>
  );
}
