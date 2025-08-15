import Image from "next/image";
import { Container } from "./components/container";
import { FaChevronDown } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaProjectDiagram } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { FaGitAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { ProjectProps } from "./utils/types/project";

interface SkillsProps{
  frontend: string[];
  backend: string[];
  ferramentas: string[];

}

async function getProjectsData(){

  try{
    const res = await fetch('http://localhost:5000/projects') 

    if(!res.ok){
      throw new Error(`HTTP Error! Status ${res.status}`);

    }

    return res.json();

  } catch(err){
    throw new Error('Failed to fetch projects data' + err);
  }

}

async function getSkillsData(){

  try{

    const res = await fetch('http://localhost:5000/skills')

    if(!res.ok){
      throw new Error('HTTP error! Status: ' + res.status);

    }

    return res.json();

  } catch (err){
    throw new Error('Failed to fetch skills data: ' + err);
  }

}


export default async function Home() {

  const projects: ProjectProps[] = await getProjectsData();
  const skills: SkillsProps = await getSkillsData();

  return (
    <main className="">

        <section>
          <div className="relative h-[864px] text-white">
            <div className="absolute flex flex-col z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center items-center">

              <FaCode size={46}/>
           
              <h1 className="font-medium text-[22px]">Olá! Sou a Paula :)</h1>
              <span className="text-[16px] text-[#938ea7]">Dev FullStack | Front Focus</span>
              <div className="flex gap-1 items-center mt-2">
               
                <a href="https://github.com/Paula-Stefany" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub size={26}/>
                </a>
                <a href="https://www.linkedin.com/in/paula-st%C3%A9fany-6141202b8/" target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin size={26}/>
                </a>
              </div>

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

        <Container>
          <section className="my-[90px] flex flex-col justify-center items-center" id="sobre">

            <h3 className="text-[14px] text-[#938ea7]">BIOGRAFIA</h3>
            <h1 className="font-semibold text-[26px] mb-6 tracking-[0.1em]">Quem sou eu?</h1>
            <div aria-hidden="true" className="flex flex-col items-center mb-6">
              <FaChevronDown className="text-2xl text-[#938EA7]" />
              <FaChevronDown className="text-2xl text-[#938EA7]" />
            </div>

            <div className="flex flex-col lg:flex-row  gap-4 mt-[40px]">

              <div className="flex items-center justify-center lg:w-[50%]">

                <span className="hidden lg:flex rotate-270 text-lg text-[#938EA7] tracking-[0.2em]">DESENVOLVEDORA</span>
                <div>
                  <div className="h-[398px] w-[320px] relative">
                    <Image src="/fotominha.jpeg"
                    alt="foto de perfil"
                    priority={ true } 
                    quality={ 100 }
                    className="h-fit object-cover  opacity-60 brightness-90 rounded-[5%]"
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw">
                    </Image>
                  </div>
                  <div className="mt-4 gap-1">
                    <p className="font-medium text-[22px]">PAULA STÉFANY</p>
                    <p className="text-[16px] text-[#938EA7]">Dev FullStack | Front Focus</p>
                    <div className="flex gap-1 items-center mt-1">
                      <span className="block w-6 h-1 rounded bg-white"></span>
                      <a href="https://github.com/Paula-Stefany" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub size={24}/>
                      </a>
                      <a href="https://www.linkedin.com/in/paula-st%C3%A9fany-6141202b8/" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin size={24}/>
                      </a>
                      <span className="block w-6 h-1 rounded bg-white"></span>
                    </div>
                  </div>
                </div>

              </div>

              <aside className="mt-6 lg:mt-0 lg:w-[50%] flex flex-col gap-2">
                
                <h2 className="text-[16px] text-[#938EA7]">Sobre mim</h2>
                <strong className="font-semibold text-[24px] bg-gradient-to-r from-[#BAB8C2] to-[#595762] bg-clip-text text-transparent tracking-[0.1em] mb-2">Desenvolvo sites completos,
                do front ao back</strong>
                <div className="flex flex-col gap-4">
                  <p className="text-[16px]">Desenvolvedora Full Stack, finalizando a graduação em Análise e Desenvolvimento de Sistemas. </p>
                  <p className="text-[16px]">Tenho experiência em projetos pessoais onde utilizei tecnologias como HTML, CSS, JavaScript, Python, React, Next.js e Node.js, com foco em aplicações web modernas.</p>
                  <p className="text-[16px]">
                  Sou uma pessoa introvertida, atenta aos detalhes e criativa. Tenho paixão por resolver problemas com código e estou sempre buscando evoluir como desenvolvedora.
                  </p>
                  <div className="flex gap-4">
                    <FaReact size={32} className="text-[#938EA7]"/>
                    <TbBrandNextjs size={32} className="text-[#938EA7]"/>
                    <SiTailwindcss size={32} className="text-[#938EA7]"/>
                    <FaNodeJs size={32} className="text-[#938EA7]"/>
                    <FaFigma size={32} className="text-[#938EA7]"/>
                  </div>
                </div>
                
              </aside>

            </div>

          </section>

          <div className="flex justify-center items-center gap-2 flex-wrap">
            <article className="w-full md:w-[170px] h-[170px] bg-[#232325] rounded-[10px] opacity-70 flex flex-col p-4 ">
              <FaProjectDiagram size={26} color="#ffffff" className="absolute opacity-100 ml-0.5 mt-0.5"/>
              <p className="m-auto text-center font-medium text-[15px] text-[#938EA7]">+ 10 projetos desenvolvidos</p>
            </article>
            <article className="w-full md:w-[170px] h-[170px] bg-[#232325] rounded-[10px] opacity-70 flex flex-col p-4 ">
              <FaCloudUploadAlt size={26} color="#ffffff" className="absolute opacity-100 ml-0.5 mt-0.5"/>
              <p className="m-auto text-center font-medium text-[15px] text-[#938EA7]">Deploy com Render e Vercel</p>
            </article>
            
            <article className="w-full md:w-[170px] h-[170px] bg-[#232325] rounded-[10px] opacity-70 flex flex-col p-4 ">
              <AiOutlineApi size={26} color="#ffffff" className="absolute opacity-100 ml-0.5 mt-0.5"/>
              <p className="m-auto text-center font-medium text-[15px] text-[#938EA7]">Integração com APIs</p>
            </article>
            <article className="w-full md:w-[170px] h-[170px] bg-[#232325] rounded-[10px] opacity-70 flex flex-col p-4 ">
              <FaCode size={26} color="#ffffff" className="absolute opacity-100 ml-0.5 mt-0.5"/>
              <p className="m-auto text-center font-medium text-[15px] text-[#938EA7]">Esperiência com Front e Back End</p>
            </article>
            <article className="w-full md:w-[170px] h-[170px] bg-[#232325] rounded-[10px] opacity-70 flex flex-col p-4 ">
              <FaGitAlt size={26} color="#ffffff" className="absolute opacity-100 ml-0.5 mt-0.5"/>
              <p className="m-auto text-center font-medium text-[15px] text-[#938EA7]">Git e versionamento de código</p>
            </article>
          </div>

          
          <section className="my-[90px] flex flex-col gap-2" id="projetos">
            <h2 className="text-[16px] text-[#938EA7]">Projetos</h2>
            <strong className="font-semibold text-[24px] bg-gradient-to-r from-[#BAB8C2] to-[#595762] bg-clip-text text-transparent tracking-[0.1em] mb-2 ">Cada linha de código conta uma história...</strong>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2">
              { projects.map((item) => (
                <article key={item.id} className="h-[260px] md:h-[210px] min-w-[300px]">
                  <Link href={`/details/${item.id}`}>
                    <div className="h-full w-full relative">
                      <h3 className="p-2 ml-2 text-[17px] font-semibold absolute opacity-100 text-[#ffffff] z-30">{item.title}</h3>
                      <button className="flex items-center left-1/2 transform -translate-x-1/2 w-[92%] cursor-pointer bg-[#554C4C]/10 backdrop-blur-md justify-center
                      absolute rounded-[10px]  z-20 bottom-2 p-2 text-[15px]">
                        Detalhes do projeto
                        <FiArrowUpRight size={25}/>
                        
                      </button>
                      
                      <Image 
                      src={`${item.image_url}`} 
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
              )) }
              
              
            </div>

          </section>

          <section className="my-[90px] flex flex-col gap-2" id="habilidades">
            <h2 className="text-[16px] text-[#938EA7]">Habilidades</h2>
            <strong className="font-semibold text-[24px] bg-gradient-to-r from-[#BAB8C2] to-[#595762] bg-clip-text text-transparent tracking-[0.1em] mb-2 ">Habilidades que transformam requisitos em aplicações reais</strong>

            <div className="mt-6 grid grid-cols-1  md:grid-cols-3 gap-2">
              <article className="w-full h-[283px] bg-[#232325] opacity-70 border border-[#938EA7] p-4 rounded-[20px]">

                <h3 className="text-center text-lg mb-5">FRONT END</h3>
                <div className="flex flex-wrap gap-2">
                  { skills.frontend.map((item, index) => (
                    <strong key={index} className="py-1 px-3 border border-white rounded-[20px] text-[14px] font-normal">
                    { item }
                  </strong>
                  )) }
                  
                </div>

              </article>
              <article className="w-full h-[283px] bg-[#232325] opacity-70 border border-[#938EA7] p-4 rounded-[20px]">

                <h3 className="text-center text-lg mb-5">BACK END</h3>
                <div className="flex flex-wrap gap-2">
                  { skills.backend.map((item, index) => (
                    <strong key={index} className="py-1 px-3 border border-white rounded-[20px] text-[14px] font-normal">
                    { item }
                  </strong>
                  )) }
                  
                </div>

              </article>
              <article className="w-full h-[283px] bg-[#232325] opacity-70 border border-[#938EA7] p-4 rounded-[20px]">

                <h3 className="text-center text-lg mb-5">FERRAMENTAS</h3>
                <div className="flex flex-wrap gap-2">
                  { skills.ferramentas.map((item, index) => (
                    <strong key={index} className="py-1 px-3 border border-white rounded-[20px] text-[14px] font-normal">
                    { item }
                  </strong>
                  )) }
                  
                </div>

              </article>
            </div>

          </section>

        </Container>

        <footer className="h-[358px] bg-[#111111] opacity-70 flex flex-col ">

          <div className="flex flex-1 justify-center gap-2 flex-col  mt-[20px] ml-[20px]  md:w-[40%]">
            <strong className="font-semibold text-[24px] bg-gradient-to-r from-[#BAB8C2] to-[#595762] bg-clip-text text-transparent tracking-[0.1em] mb-2 ">Obrigado por chegar até aqui!</strong>
            <p className="text-[16px] mb-2">
              Se quiser trocar uma ideia, dar um feedback ou só bater um papo sobre código, estou por aqui :)
            </p>

            <strong className="font-semibold text-[26px]">Contato</strong>
            <a href="https://www.linkedin.com/in/paula-st%C3%A9fany-6141202b8/" target="_blank" rel="noopener noreferrer" className="w-fit">
              <AiFillLinkedin size={26}/>
            </a>
          </div>

          <p className="text-center mb-2 text-[14px]">Created by Paula Stéfany | 2025</p>
      
        </footer>

    </main>
  );
}
