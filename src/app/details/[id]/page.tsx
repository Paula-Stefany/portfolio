import Image from "next/image";
import { Container } from "@/app/components/container";
import { ProjectProps } from "@/app/utils/types/project";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { FiArrowRightCircle } from "react-icons/fi";
import Link from "next/link";


interface PageProps{
  params: Promise<{ id: string }>;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;


async function getProjectData(id: string) {

  try{
    const res = await fetch(`${BASE_URL}/${id}`);

    if (!res.ok){
      throw new Error('HTTP error! Status: ' + res.status);

    }

    return res.json();

  } catch (err){
    throw new Error('Failed to fetch data: ' + err);

  }
  
}

async function getAleatoryProject() {
  
  try{
    const res = await fetch(`${BASE_URL}/random`)

    if (!res.ok){
      throw new Error('HTTP error! Status: ' + res.status);
    }

    return res.json();

  } catch (err){
    throw new Error('Failed to fetch data: ' + err);

  }

}

export default async function Details({params}: PageProps) {

  const { id } = await params;
  const project: ProjectProps = await getProjectData(id);
  const aleatoryGame: ProjectProps = await getAleatoryProject();

  return (
    <div className="mt-[82px]">
        <div className="w-full h-120 relative">
            <Image 
            src={project.image_url}
            alt={project.title}
            fill={true}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
            className="object-cover  opacity-60 brightness-60 ">  
            </Image>
        </div>
        <main>
          <Container>
            <div className="my-16 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-semibold">{project.title}</h1>
                <p className="text-[16px] md:text-lg">{project.description}</p>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-medium">Tecnologias</h2>
                <div className="flex flex-wrap gap-2">
                  { project.technologies.map((item, index) => (
                    <strong key={index} className="py-1 px-3 border border-white rounded-[20px] text-[14px] font-normal">
                    { item }
                  </strong>
                  )) }
                  
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-medium">Explore o projeto</h2>
                <div className="flex gap-3">
                  <Link href={project.github_url} className="w-fit">
                    <AiFillGithub size={26}/>
                  </Link>
                  { project.project_url && (
                    <Link href={project.project_url}>
                      <HiOutlineGlobeAlt size={26}/>
                    </Link>
                  ) }
                </div>
                

              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-medium">Dê uma olhada em outros projetos:</h2>
                <article key={aleatoryGame.id} className="h-[260px] md:h-[240px] min-w-[300px]">
                  <Link href={`/details/${aleatoryGame.id}`}>
                    <div className="h-full w-full relative">
                      <div className="p-2 ml-2 absolute z-30 bottom-0 flex gap-3 w-fit">
                        <h3 className="text-[17px] font-semibold  text-[#ffffff]">{aleatoryGame.title}</h3>
                        <FiArrowRightCircle size={26}/>
                      </div>
                      
                      
                      <Image 
                      src={`${aleatoryGame.image_url}`} 
                      alt="Imagem do projeto" 
                      priority={ true } 
                      quality={ 100 }
                      className="h-fit object-cover rounded-[10px] opacity-50 hover:opacity-60"
                      fill={true}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw">       
                      </Image>
                    </div>
                  </Link>
                </article>
              </div>
             
            </div>
          </Container>
        </main>
    </div>
  );
}