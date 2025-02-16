"use client";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Scissors,
  Syringe,
  CarTaxiFront,
  Hotel,
  Clock,
} from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";

const services = [
  {
    title: "Banho & Tosa",
    description:
      "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
    duration: "1h",
    price: "$50",
    icon: <Scissors />,
    linkText:
      "Olá, vi no site sobre Banho e tosa e gostaria de mais informações.",
  },
  {
    title: "Consulta Veterinária",
    description:
      "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
    duration: "1h",
    price: "$45",
    icon: <Syringe />,
    linkText:
      "Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.",
  },
  {
    title: "Táxi Pet",
    description:
      "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
    duration: "2h",
    price: "$80",
    icon: <CarTaxiFront />,
    linkText: "Olá, vi no site sobre Táxi Pet e gostaria de mais informações.",
  },
  {
    title: "Hotel para pets",
    description:
      "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
    duration: "1h",
    price: "$60",
    icon: <Hotel />,
    linkText:
      "Olá, vi no site sobre Hotel para pets e gostaria de mais informações.",
  },
];

const Services = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 ">
        <h2 className="text-4xl font-bold mb-12 text-center">Serviços</h2>

        <div className="relative" data-aos="fade-right">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex ">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] xl:md:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className="cursor-pointer bg-[#1E293B] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="flex flex-col gap-2">
                        <span className="text-3xl">{service.icon}</span>
                        <div>
                          <h3 className="font-bold text-xl my-1">
                            {service.title}
                          </h3>
                          <p className="text-gray-400 text-sm select-none">
                            {service.description}
                          </p>
                          <p className="my-1 text-sm select-none">
                            Preço: {service.price}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="flex items-center gap-2 sm:text-sm text-[10px]">
                          <Clock className="sm:h-5 sm:w-5 h-4 w-4" />
                          <span>Duração: {service.duration}</span>
                        </div>
                      </div>

                      <a
                        href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações sobre ${service.linkText}`}
                        target="_blank"
                        className="gap-2 w-fit sm:text-sm text-[10px] bg-slate-700 px-5 py-2 rounded-md font-semibold flex items-center justify-center text-white hover:bg-opacity-60 transition duration-300"
                      >
                        Entrar em contato
                        <WhatsappLogo className="sm:h-5 sm:w-5 h-4 w-4" />
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="bg-white flex items-center justify-center rounded-full shadow-lg absolute z-10 -translate-y-1/2 -translate-x-1/2 top-1/2 left-3  hover:bg-slate-600 transition duration-300 text-gray-600 hover:text-white "
          >
            <ChevronLeft className="h-10 w-10  " />
          </button>
          <button
            onClick={scrollNext}
            className="bg-white flex items-center justify-center rounded-full shadow-lg absolute z-10 translate-y-1/2 translate-x-1/2 bottom-1/2 right-3 hover:bg-slate-600 transition duration-300 text-gray-600 hover:text-white"
          >
            <ChevronRight className="h-10 w-10 " />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
