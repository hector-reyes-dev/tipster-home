import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HowItWorksSection = (): JSX.Element => {
  const steps = [
    {
      number: "1",
      title: "Encuentra tipsters confiables",
      description:
        "Explora tipsters verificados, filtro por deportes y revisa su rendimiento.",
    },
    {
      number: "2", 
      title: "Recibe tips personalizados",
      description:
        "Sigue las recomendaciones basadas en análisis y estadísticas de valor.",
    },
    {
      number: "3",
      title: "Realiza tus apuestas", 
      description:
        "Maximiza tus posibilidades de ganar apostando con estrategias informadas.",
    },
  ];

  return (
    <section className="w-full relative overflow-hidden">
      {/* Hero section with the complete image */}
      <div 
        className="relative w-full h-[600px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/steps.png)`
        }}
      >
        {/* Remove the overlay to show the image clearly */}
      </div>

      {/* Steps section */}
      <div className="w-full bg-white py-16">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-6">
                {/* Step number circle */}
                <div className="w-16 h-16 rounded-full bg-[linear-gradient(135deg,rgba(144,26,240,1)_0%,rgba(201,24,219,1)_50%,rgba(246,22,121,1)_100%)] flex items-center justify-center">
                  <span className="text-white text-2xl font-bold [font-family:'Mona_Sans',Helvetica]">
                    {step.number}
                  </span>
                </div>
                
                {/* Step content */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-extrabold text-[#1a1a1a] [font-family:'Mona_Sans',Helvetica] tracking-[-0.24px]">
                    {step.title}
                  </h3>
                  <p className="text-base font-normal text-[#4d4d4d] [font-family:'Mona_Sans',Helvetica] tracking-[-0.16px] leading-6">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};