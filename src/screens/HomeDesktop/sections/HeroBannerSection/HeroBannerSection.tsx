import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-24 px-10">
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-between gap-20">
        {/* Left content */}
        <div className="flex flex-col items-start gap-10 max-w-[600px] flex-1">
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-[64px] leading-[72px] font-extrabold [font-family:'Mona_Sans',Helvetica] tracking-[-0.64px]">
              Obtén{" "}
              <span className="bg-[linear-gradient(270deg,rgba(144,26,240,1)_0%,rgba(201,24,219,1)_33%,rgba(246,22,121,1)_66%,rgba(224,22,40,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent">
                los mejores tips
              </span>{" "}
              de apuestas deportivas y{" "}
              <span className="bg-[linear-gradient(270deg,rgba(144,26,240,1)_0%,rgba(201,24,219,1)_33%,rgba(246,22,121,1)_66%,rgba(224,22,40,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent">
                maximiza tus ganancias
              </span>
            </h1>
            
            <p className="text-xl text-[#1a1a1a] leading-[30px] [font-family:'Mona_Sans',Helvetica] font-normal">
              Conecta con tipsters expertos, sigue recomendaciones basadas en
              análisis profundo y mejora tus apuestas.{" "}
              <span className="font-bold">Todo en un solo lugar.</span>
            </p>
          </div>

          <Button className="px-20 py-6 rounded-[40px] text-2xl tracking-[-0.24px] leading-6 h-auto [font-family:'Mona_Sans',Helvetica] font-bold bg-[linear-gradient(270deg,rgba(144,26,240,1)_0%,rgba(201,24,219,1)_33%,rgba(246,22,121,1)_66%,rgba(224,22,40,1)_100%)] hover:opacity-90">
            Comienza Ahora. Es GRATIS
          </Button>
        </div>

        {/* Right content - Phone mockups */}
        <div className="relative flex-shrink-0">
          <img
            className="w-auto h-[700px] object-contain"
            alt="Tipsterhome app mockup"
            src="/hero-img.png"
          />
        </div>
      </div>
    </section>
  );
};