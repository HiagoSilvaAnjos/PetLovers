import golden from "../../public/golden.png";
import royal from "../../public/royal.png";
import primier from "../../public/primier.png";
import whiskas from "../../public/whiskas.png";
import natural from "../../public/natural.png";
import Image from "next/image";
import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
];

const Footer = () => {
  return (
    <section className="py-16 bg-[#E84C3D] text-white ">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Marcas que trabalhamos
          </h4>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                data-aos="fade-down-right"
                data-aos-delay={index * 150}
                className="bg-white p-4 rounded-lg flex items-center justify-center transition  group"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain transition-transform group-hover:scale-110 duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <h3 className="text-2xl font-semibold mb-2">PetLovers</h3>
            <p className="mb-4">
              Cuidando do seu melhor amigo com amor e atenção.
            </p>
            <a
              href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`}
              target="_blank"
              className="gap-2 w-fit bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center hover:bg-opacity-75 transition duration-300"
            >
              <WhatsappLogo className="h-5 w-5" />
              Contato via WhatsApp
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">PetLovers</h3>
            <p>Email: petloversDev@gmail.com</p>
            <p>Telefone (xx) 123456789</p>
            <p>Rua x, centro, Campo Grandre | PA</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                className="hover:text-slate-600 transition duration-300"
              >
                <FacebookLogo className="h-8 w-8" />
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-slate-600 transition duration-300"
              >
                <InstagramLogo className="h-8 w-8" />
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-slate-600 transition duration-300"
              >
                <YoutubeLogo className="h-8 w-8" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
