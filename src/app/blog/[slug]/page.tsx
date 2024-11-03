import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import Image from 'next/image'

async function getData(slug:string){
    const query = `
    *[_type == "blog" && slug.current =='${slug}']
    {
        "current": slug.current,
        title,image
    }[0]`;

    const data =await client.fetch(query);
    return data;
}



export default async function BlogArticle({params}:{
    params:{
        slug:string;
    }}){
        const data: fullBlog = await getData(params.slug);
       
    return(
        <div className="mt-6">
            <h1>
                <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
            </h1>
            <Image src={urlFor(data.image).url()} alt="Default image" height={800} width={800} className="mt-4"/>
        </div>

    )
}