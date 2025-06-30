import React from "react";
import { Button } from "../../../../components/ui/button";

export const MainFooterSection = (): JSX.Element => {
  // Footer navigation links
  const footerLinks = [
    "Acerca de Nosotros",
    "Soporte y Contacto",
    "Apuestas Responables",
    "Actualizaciones",
  ];

  // Legal links
  const legalLinks = [
    "Términos y Condiciones",
    "Política de Privacidad",
    "Cookies",
  ];

  return (
    <footer className="w-full bg-[#050009] text-white py-10 px-10 relative">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[37px]">
          {/* Top section with logo, description, links and app download */}
          <div className="flex items-start justify-between w-full">
            {/* Logo and description */}
            <div className="flex flex-col w-[506.57px] items-start gap-6">
              <div className="relative w-[217.65px] h-10 bg-[url(/3.png)] bg-cover bg-[50%_50%]" />
              <p className="font-content-subtitle font-[number:var(--content-subtitle-font-weight)] text-[length:var(--content-subtitle-font-size)] tracking-[var(--content-subtitle-letter-spacing)] leading-[var(--content-subtitle-line-height)] [font-style:var(--content-subtitle-font-style)]">
                Plataforma que conecta a los usuarios con tipsters expertos,
                ofreciendo recomendaciones de apuestas deportivas basadas en
                análisis estadístico para maximizar sus ganancias.
              </p>
            </div>

            {/* Links and app download */}
            <div className="inline-flex items-start gap-4">
              {/* Navigation links */}
              <div className="flex flex-col w-[328px] items-start gap-6">
                {footerLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`self-stretch font-text-small font-[number:var(--text-small-font-weight)] text-[length:var(--text-small-font-size)] tracking-[var(--text-small-letter-spacing)] leading-[var(--text-small-line-height)] [font-style:var(--text-small-font-style)] ${index === 0 ? "mt-[-1.00px]" : ""}`}
                  >
                    {link}
                  </a>
                ))}
              </div>

              {/* App download section */}
              <div className="flex flex-col w-[213px] items-start gap-6">
                <h3 className="self-stretch mt-[-1.00px] font-content-card-title font-[number:var(--content-card-title-font-weight)] text-[length:var(--content-card-title-font-size)] tracking-[var(--content-card-title-letter-spacing)] leading-[var(--content-card-title-line-height)] [font-style:var(--content-card-title-font-style)]">
                  Descarga la App
                </h3>
                <div className="inline-flex flex-col items-center gap-4 w-full">
                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-2 px-4 py-2 w-full bg-[#050009] rounded-[40px] border border-solid border-[#cccccc]"
                  >
                    <img
                      className="w-6 h-6"
                      alt="Ic outline apple"
                      src="/ic-outline-apple.svg"
                    />
                    <span className="font-text-small font-[number:var(--text-small-font-weight)] text-white text-[length:var(--text-small-font-size)] tracking-[var(--text-small-letter-spacing)] leading-[var(--text-small-line-height)] whitespace-nowrap [font-style:var(--text-small-font-style)]">
                      App Store
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-2 px-4 py-2 w-full bg-[#050009] rounded-[40px] border border-solid border-[#cccccc]"
                  >
                    <img
                      className="w-6 h-6"
                      alt="Prime google"
                      src="/prime-google.svg"
                    />
                    <span className="font-text-small font-[number:var(--text-small-font-weight)] text-white text-[length:var(--text-small-font-size)] tracking-[var(--text-small-letter-spacing)] leading-[var(--text-small-line-height)] whitespace-nowrap [font-style:var(--text-small-font-style)]">
                      Goole Play
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section with copyright and legal links */}
          <div className="flex items-center justify-between w-full">
            <p className="font-text-small font-[number:var(--text-small-font-weight)] text-[#a5a5a5] text-[length:var(--text-small-font-size)] tracking-[var(--text-small-letter-spacing)] leading-[var(--text-small-line-height)] whitespace-nowrap [font-style:var(--text-small-font-style)]">
              © 2025 Tipsterhome. Todos los derechos resevados.
            </p>
            <div className="flex w-[553px] items-center justify-between">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-text-small font-[number:var(--text-small-font-weight)] text-white text-[length:var(--text-small-font-size)] tracking-[var(--text-small-letter-spacing)] leading-[var(--text-small-line-height)] whitespace-nowrap [font-style:var(--text-small-font-style)] mt-[-1.00px]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element at the bottom */}
      <div className="absolute w-[1348px] h-[252px] bottom-0 left-[46px]">
        <img
          className="w-[1348px] h-[152px] object-cover"
          alt="Element"
          src="/1.png"
        />
      </div>
    </footer>
  );
};
