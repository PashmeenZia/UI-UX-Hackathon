//import { client } from "@/sanity/lib/client";
import cars from "../schemaTypes/cars";



 //Interface to represent car data from the Sanity API
export interface sanityCar {
  _id: string;
  name: string;
  type: string;
  image: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  slug:{
    current:string;
  };
  
  
}



 export async function getAllData() {
   const query = `*[_type == "car"]{
   _id,
   name,
     type,
     image{
     asset->{url}
   },
   fuelCapacity,
     transmission,
     seatingCapacity,
     pricePerDay,
     "slug": slug.current
     
 }`;
   const data = await client.fetch(query);
   return data;
 }



 import { createClient } from "next-sanity";
 import imageUrlBuilder from "@sanity/image-url";


export const client = createClient({
    projectId: "8zqyxkha",
    dataset: "production",
    apiVersion: "2021-08-31",
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: false
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source)
}




// export async function getCarbySlug(slug:string){
// const testQuery = `*[_type == "car" && slug.current == $slug][0] {
//   _id,
//   name,
//   type,
//   "image": image.asset->url,
//   fuelCapacity,
//   transmission,
//   seatingCapacity,
//   pricePerDay,
//   brand,
//   originalPrice,
//   tags,
//   "slug": slug.current
// }`;

// const testCar = await client.fetch(testQuery, {slug});
// console.log("Test Car Data:", testCar);

// }