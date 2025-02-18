import Image from "next/image";
import about1img from "../../public/about-1.png";
import about2img from "../../public/about-2.png";
import { Check } from "lucide-react";
import { MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const About = () => {
  return (
    <section className="bg-[#FDF6EC] py-16">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative"
            data-aos="fade-up-right"
            data-aos-delay="300"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1img}
                alt="Imagem do doguinho e gato"
                className="object-cover hover:scale-110 duration-300 transition"
                priority
                quality={100}
                fill
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 border-white overflow-hidden">
              <Image
                src={about2img}
                alt="Imagem do doguinho e gato"
                priority
                quality={100}
                fill
              />
            </div>
          </div>

          <div
            className="space-y-6 mt-10"
            data-aos="fade-up-left"
            data-aos-delay="300"
            data-aos-anchor-placement="top-bottom"
          >
            <h2 className="text-4xl font-bold">Sobre</h2>
            <p>
              Desde 2006, a Pet Lovers tem sido referência no cuidado e
              bem-estar dos animais de estimação. Nossa equipe é formada por
              mais de 10 veterinários altamente qualificados, prontos para
              oferecer atendimento especializado e garantir a saúde do seu pet.
              Trabalhamos com os melhores produtos e serviços do mercado, sempre
              priorizando a qualidade e o carinho que seu pet merece. Seja para
              consultas, vacinas ou produtos essenciais, estamos aqui para
              oferecer o melhor.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" /> Aberto desde 2006
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" /> Equipe com mais de 10
                veterinários
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" /> Qualidade é nossa prioridade
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`}
                target="_blank"
                className="gap-2 w-fit bg-[#E84C3D] sm:text-sm text-[10px] px-5 py-2  rounded-md font-semibold flex items-center justify-center text-white hover:bg-opacity-75 transition duration-300"
              >
                <WhatsappLogo className="sm:h-5 sm:w-5 h-4 w-4" /> Contato via
                WhatsApp
              </a>
              <a
                href="#"
                className="gap-2 w-fit  px-5 py-2 sm:text-sm text-[10px] rounded-md font-semibold flex items-center justify-center  hover:bg-slate-500 hover:text-white transition duration-300"
              >
                <MapPin className="sm:h-5 sm:w-5 h-4 w-4" /> Endereço da Loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
