// 'use client'
// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from "next/link";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import Sidebar from '@/components/Sidebar';
// export default function Page() {
//   const [showMore, setShowMore] = useState(false);

//   const toggleShowMore = () => {
//     setShowMore(!showMore);
//   };

//   return (
//     <div className='w-full flex'>
//       <div className="first hidden sm:flex w-[20%]">
//         {/*<Image src={'/Nav Bar Side.png'} alt='' width={360} height={1600}/>*/}
//         <Sidebar/>
//       </div>
//       <div className="sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
//         <section className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between ">
//           <Image src={"/Pick - Up.png"} alt="" width={582} height={132} className="w-[200px] md:w-[270px] lg:w-[582px]" />
//           <Image src={"/Switch.png"} alt="" width={60} height={60} className="w-[80px]" />
//           <Image src={"/Drop - Off.png"} alt="" width={582} height={132} className=' w-[200px] md:w-[270px] lg:w-[582px]' />
//         </section>
//         <section className="popular w-full flex flex-col gap-4">
//           <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {[
//               { title: 'Koenigsegg', image: '/car.png', desc: 'Sport' },
//               { title: 'Nissan GT - R', image: '/car (1).png', desc: 'Luxury' },
//               { title: 'Rolls-Royce', image: '/suv.png', desc: 'Sport' },
//               { title: 'All New Rush', image: '/suv (4).png', desc: 'Luxury' },
//               { title: 'CR - V', image: '/suv (4).png', desc: 'Luxury' },
//               { title: 'ALLNEW TERIOS', image: '/suv.png', desc: 'SUV' },
//               { title: 'MGZX Exclusive', image: '/suv (4).png', desc: 'Luxury' },
//               { title: 'NEW MGZS', image: '/suv.png', desc: 'SUV' },
//             ].map((car, index) => (
//               <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//                 <CardHeader>
//                   <CardTitle className="w-full flex items-center justify-between">
//                     {car.title} <Image src={"/heart.png"} alt="" width={20} height={20} />
//                   </CardTitle>
//                   <CardDescription>{car.desc}</CardDescription>
//                 </CardHeader>
//                 <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
//                   <Image src={car.image} alt="" width={220} height={68} />
//                   <Image src={"/Spesification.png"} alt="" width={256} height={24} className='hidden md:flex' />
//                   <Image src={"/Spesification (1).png"} alt="" width={256} height={24} className='md:hidden' />
//                 </CardContent>
//                 <CardFooter className="w-full flex items-center justify-between">
//                   <p>
//                     $99.00/<span className="text-gray-500">day</span>
//                   </p>
//                   <Link href={'/details'}>
//                   <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
//                 </CardFooter>
//               </Card>
//             ))}
//           </div>
//           {showMore && (
//             <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               {[
//                 { title: 'MG ZX Exclusive', image: '/suv.png', desc: 'SUV' },
//                 { title: 'NEW MG ZS', image: '/suv (4).png', desc: 'Sedan' },
//                 { title: 'New MG ZX Excite', image: '/suv.png', desc: 'Sport' },
//                 { title: 'NEW MG ZS', image: '/suv (4).png', desc: 'Sedan' },
//               ].map((car, index) => (
//                 <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//                   <CardHeader>
//                     <CardTitle className="w-full flex items-center justify-between">
//                       {car.title} <Image src={"/heart.png"} alt="" width={20} height={20} />
//                     </CardTitle>
//                     <CardDescription>{car.desc}</CardDescription>
//                   </CardHeader>
//                   <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
//                     <Image src={car.image} alt="" width={220} height={68} />
//                     <Image src={"/Spesification.png"} alt="" width={256} height={24} className='hidden md:flex' />
//                     <Image src={"/Spesification (1).png"} alt="" width={256} height={24} className='md:hidden' />
//                   </CardContent>
//                   <CardFooter className="w-full flex items-center justify-between">
//                     <p>
//                       $99.00/<span className="text-gray-500">day</span>
//                     </p>
//                     <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
//                   </CardFooter>
//                 </Card>
//               ))}
//             </div>
//           )}
//         </section>

//         <section className="button w-full text-center">
//           <button 
//             onClick={toggleShowMore} 
//             className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5"
//           >
//             {showMore ? "Show Less Cars" : "Show More Cars"}
//           </button>
//         </section>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import FilterComponent from "@/app/components/FilterComponent";


// Interface to represent car data from the Sanity API
 interface sanityCar {
  _id: string; // Unique identifier for the car
  name: string; // Name of the car
  image: string; // URL of the car image  
  fuelCapacity: string; // Fuel capacity of the car (e.g., "90L")
  seatingCapacity: string; // Seating capacity of the car (e.g., "2 People")
  slug:{
    current:string 
  }; // Slug for the car, nullable if not provided
  transmission: string; // Transmission type (e.g., "Manual")
  pricePerDay: string; // Rental price per day (e.g., "$99.00")
  type: string; // Type of the car (e.g., "Sport", "Diesel")
}

async function getAllData() {
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
  "slug":slug.current
}`;
const data = await client.fetch(query);
return data;
}


export default function Page() {
    const [data, setData] = useState<sanityCar[]>([]);
    const [filteredData, setFilteredData] = useState<sanityCar[]>([]);
    const [filters, setFilters] = useState<any>({});
  
    useEffect(() => {
      async function fetchData() {
        const result = await getAllData();
        setData(result);
        setFilteredData(result);
      }
  
      fetchData();
    }, []);
  
    const handleFilterChange = (filters: any) => {
      setFilters(filters);
      applyFilters(filters);
    };
  
    const applyFilters = (filters: any) => {
      let filtered = [...data];
  
      if (filters.type && filters.type.length > 0) {
        filtered = filtered.filter((car) => filters.type.includes(car.type));
      }
      if (filters.seatingCapacity && filters.seatingCapacity.length > 0) {
        filtered = filtered.filter((car) =>
          filters.seatingCapacity.includes(car.seatingCapacity)
        );
      }
      if (filters.fuelCapacity && filters.fuelCapacity.length > 0) {
        filtered = filtered.filter((car) =>
          filters.fuelCapacity.includes(car.fuelCapacity)
        );
      }
      setFilteredData(filtered);
    };
  
    return (
      <div className="w-full flex">
        <div className="first hidden sm:flex w-[20%]">
          <FilterComponent onFilterChange={handleFilterChange} />
        </div>
        <div className="sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
          <section className="popular w-full flex flex-col gap-4">
            <div className="sec grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredData.map((product) => (
                <div key={product._id}>         
                  <Card className="w-full max-w-[304px] mx-auto h-[388px] flex flex-col justify-between">
                    <CardHeader>
                      <CardTitle className="w-full flex items-center justify-between">
                        {product.name}{" "}
                        <Image src={"/heart.png"} alt="" width={20} height={20} />
                      </CardTitle>
                      <CardDescription>{product.type}</CardDescription>
                    </CardHeader>
                    <CardContent className="w-full flex flex-col items-center justify-center gap-4 text-nowrap">
                      <Image
                        src={urlFor(product.image).url()}
                        alt=""
                        width={220}
                        height={68}
                      />
                      <div className="flex items-center justify-between mt-10">
                        <div className="flex items-center gap-2">
                          <Image
                            src={"/gas-station.png"}
                            alt=""
                            width={26}
                            height={24}
                          />
                          <h1>{product.fuelCapacity}</h1>
                        </div>
                        <div className="flex items-center gap-2">
                          <Image
                            src={"/Caricon.png"}
                            alt=""
                            width={26}
                            height={24}
                          />
                          <h1>{product.transmission}</h1>
                        </div>
                        <div className="flex items-center gap-2">
                          <Image
                            src={"/profile-2user.png"}
                            alt=""
                            width={26}
                            height={24}
                          />
                          <h1>{product.seatingCapacity}</h1>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="w-full flex items-center justify-between">
                      <p>
                        {product.pricePerDay}/
                        <span className="text-gray-500">day</span>
                      </p>
                      <Link href={`/categaries/${product.slug.current}`}>
                        <button className="bg-[#3563e9] p-2 text-white rounded-md">
                          Rent Now
                          </button>
                      </Link>
                    </CardFooter>
                  </Card>                  
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }