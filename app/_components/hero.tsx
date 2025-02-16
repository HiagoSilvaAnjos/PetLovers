import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import dogimage from "../../public/bg-hero.png";
import catimage from "../../public/cat-hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#E84C3D] text-white relative overflow-hidden flex items-center justify-center">
      <div>
        <Image
          src={dogimage}
          alt="Foto do cachorro"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>

      <div className=" container  lg:mx-20 mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="w-full grid grid-1 lg:grid-cols-2 gap-8 ">
          <div className="space-y-6">
            <h1
              data-aos="fade-down"
              className="text-3xl font-semibold md:text-5xl lg:6xl leading-10"
            >
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>
            <p data-aos="fade-right" className="lg:text-lg">
              Oferecemos os melhores serviços para garantir o bem-estar e a
              felicidade do seu amigo de quatro patas.
            </p>

            <a
              href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`}
              target="_blank"
              className="relative gap-2 w-fit bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center hover:bg-opacity-75 transition duration-300"
            >
              <WhatsappLogo className="h-5 w-5" />
              Contato via WhatsApp
            </a>

            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-green-500 bg-opacity-90 text-white px-2 py-1 rounded-md">
                  5%
                </b>{" "}
                de desconto na primeira compra.
              </p>

              <div className="flex mt-4">
                <div className="w-32 hidden lg:block">
                  <Image
                    src={catimage}
                    alt="Foto gatinho"
                    quality={100}
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block h-full relative">
            <Image
              src={dogimage}
              alt="foto do doguinho"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
