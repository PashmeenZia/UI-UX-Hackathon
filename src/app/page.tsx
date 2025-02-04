"useclient";

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
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";



interface sanityCar {
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
    "slug": slug.current
    
}`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: sanityCar[] = await getAllData();
  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      <section className="first w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center">
        <Image
          src={"/Ads 1.png"}
          alt=""
          width={640}
          height={360}
          className="max-w-full"
        />
        <Image
          src={"/Ads 2.png"}
          alt=""
          width={640}
          height={360}
          className="max-w-full"
        />
      </section>

      <section className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8">
        <Image
          src={"/Pick - Up.png"}
          alt=""
          width={582}
          height={132}
          className="max-w-full"
        />
        <Image
          src={"/Switch.png"}
          alt=""
          width={160}
          height={160}
          className="max-w-full"
        />
        <Image
          src={"/Drop - Off.png"}
          alt=""
          width={582}
          height={132}
          className="max-w-full"
        />
      </section>

      <section className="popular w-full flex flex-col gap-4">
        <div className="first w-full flex items-center justify-between">
          <h1 className="text-gray-500 text-lg sm:text-xl">Popular Car</h1>
          <Link href={"/categaries"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {data.slice(0, 4).map((product) => (
            <div key={product._id}>
              <Card className="w-full max-w-[304px] mx-auto h-[388px] flex flex-col justify-between">
          
                <CardHeader>
                  <CardTitle className="w-full flex items-center justify-between">
                    {product.name}{" "}
                    <Image src={"/heart.png"} alt="" width={20} height={20} />
                  </CardTitle>
                  <CardDescription>{product.type}</CardDescription>
                </CardHeader>
                <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                  <Image
                    src={urlFor(product.image).url()}
                    alt=""
                    width={220}
                    height={68}
                  />
                  <div className=" flex items-center justify-between mt-10">
                    <div className=" flex items-center gap-2">
                      <Image
                        src={"/gas-station.png"}
                        alt=""
                        width={26}
                        height={24}
                      />
                      <h1>{product.fuelCapacity}</h1>
                    </div>
                    <div className=" flex items-center gap-2">
                      <Image
                        src={"/Caricon.png"}
                        alt=""
                        width={26}
                        height={24}
                      />
                      <h1>{product.transmission}</h1>
                    </div>
                    <div className=" flex items-center gap-2">
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
                  <Link href={`/categaries/${product.slug}`}>
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

      <section className="popular w-full flex flex-col gap-4">
        <h1 className="text-gray-500 text-lg sm:text-xl">Recommendation Car</h1>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {data.slice(5, 13).map((product) => (
            <div key={product._id}>
              <Card className="w-full max-w-[304px] mx-auto h-[388px] flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="w-full flex items-center justify-between">
                    {product.name}{" "}
                    <Image src={"/heart.png"} alt="" width={20} height={20} />
                  </CardTitle>
                  <CardDescription>{product.type}</CardDescription>
                </CardHeader>
                <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                  <Image
                    src={urlFor(product.image).url()}
                    alt=""
                    width={220}
                    height={68}
                  />
                  <div className=" flex items-center justify-between mt-10">
                    <div className=" flex items-center gap-2">
                      <Image
                        src={"/gas-station.png"}
                        alt=""
                        width={26}
                        height={24}
                      />
                      <h1>{product.fuelCapacity}</h1>
                    </div>
                    <div className=" flex items-center gap-2">
                      <Image
                        src={"/Caricon.png"}
                        alt=""
                        width={26}
                        height={24}
                      />
                      <h1>{product.transmission}</h1>
                    </div>
                    <div className=" flex items-center gap-2">
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
                  <Link href={`/categaries/${product.slug}`}>
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

      <section className="button w-full text-center">
        <Link href={"/categaries"}>
          <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5">
            Show More Cars
          </button>
        </Link>
      </section>
    </div>
  );
}




{/*


export default function Home() {
  return (
    
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      
<section className="first  w-full flex flex-wrap sm:flex-nowrap gap-5 sm:gap-8  justify-center">
        <Image src={"/Ads 1.png"} alt="" width={640} height={360} className="max-w-full" />
        <Image src={"/Ads 2.png"} alt="" width={640} height={360} className="max-w-full" />
      </section>

    
      <section className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4  sm:gap-8">
        <Image src={"/Pick - Up.png"} alt="" width={572} height={132} className="max-w-full" />
        <Image src={"/Switch.png"} alt="" width={60} height={60} className="max-w-full" />
        <Image src={"/Drop - Off.png"} alt="" width={572} height={132} className="max-w-full" />
      </section>
      

      <section className="popular w-full flex flex-col gap-4">
        <div className="first w-full flex items-center justify-between">
          <h1 className="text-gray-500 text-lg sm:text-xl">Popular Car</h1>
          <Link href={"/categaries"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Koenigsegg <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card> 

         
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NissanGT - R <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car (1).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Rolls-Royce <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sedan</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
            <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

     
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NissanGT - R <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car (1).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
            <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>
        </div>
      </section>


      <section className="popular w-full flex flex-col gap-4">
        <h1 className="text-gray-500 text-lg sm:text-xl">Recommendation Car</h1>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Rush <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
            <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                CR - V <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
            <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Terios <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
            <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                CR - V <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
            <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                MG ZX Exclusive <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
            <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NEW MG ZS <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
            <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                MG ZX Excite <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
            <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                New MG ZS<Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
            <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>
        </div>
      </section>
</div>
  )}*/}



