import Image from "next/image";



export default function Home() {
  return (
    <main className="">

        <section>
          <div className="relative h-[864px] text-white">
            <div className="absolute flex flex-col z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center items-center">
              <span className="text-lg font-medium mb-1">Olá, bem vindo :)</span>
              <h1 className="font-medium text-[22px]">Me chamo Paula</h1>
              <span className="text-[16px] text-[#938ea7]">Dev FullStack | Front Focus</span>

            </div>
            <Image src="/banner_image.jpg" 
            alt="Imagem de pessoa com notebook"
            priority={ true } 
            quality={ 100 }
            className="h-fit object-cover  opacity-60 brightness-90"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw">

            </Image>

          </div>
          
        </section>

        

     
    </main>
  );
}
