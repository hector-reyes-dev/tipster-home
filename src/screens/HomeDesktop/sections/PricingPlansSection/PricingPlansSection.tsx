import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const PricingPlansSection = (): JSX.Element => {
  // Basic plan features
  const basicFeatures = [
    "Acceso a tipsters verificados",
    "Tips básicos con análisis general",
    "Acceso limitado a estadísticas de rendimiento de los tipsters",
    "Apuestas disponibles en ligas populares",
    "Notificaciones en tiempo real de tips gratuitos",
  ];

  // Premium plan features
  const premiumFeatures = [
    "Acceso a tips exclusivos y personalizados",
    "Análisis en profundidad de cada apuesta",
    "Acceso completo a estadísticas avanzadas de rendimiento de los tipsters",
    "Prioridad en notificaciones de cambios de cuotas y nuevos tips",
    "Apuestas disponibles en ligas globales y mercados especializados",
    "Soporte prioritario y atención personalizada",
    "Interacción directa con tipsters para aclaraciones adicionales",
  ];

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-10">
        <div className="flex flex-row justify-center items-start gap-4 max-w-[1400px] mx-auto">
          {/* Basic Plan Card */}
          <Card className="flex w-[557px] p-8 rounded-3xl border-none bg-white">
            <CardContent className="flex flex-col items-start gap-8 p-0 w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-col items-start gap-2 w-full">
                  <h3 className="[font-family:'Mona_Sans',Helvetica] font-extrabold text-[#1a1a1a] text-[32px] tracking-[-0.32px] leading-normal">
                    Plan Básico (Gratis)
                  </h3>
                  <p className="font-content-text-small font-[number:var(--content-text-small-font-weight)] text-[#1a1a1a] text-[length:var(--content-text-small-font-size)] tracking-[var(--content-text-small-letter-spacing)] leading-[var(--content-text-small-line-height)] [font-style:var(--content-text-small-font-style)]">
                    Perfecto para apostadores ocasionales que buscan recomendaciones
                    básicas y acceso a tipsters verificados.
                  </p>
                </div>

                <div className="flex items-center gap-10 w-full">
                  <div className="flex items-center gap-4">
                    <span className="[font-family:'Mona_Sans',Helvetica] font-bold text-[#1a1a1a] text-[40px] tracking-[0.80px] leading-[60px]">
                      €0
                    </span>
                    <span className="font-content-text-small font-[number:var(--content-text-small-font-weight)] text-[#4d4d4d] text-[length:var(--content-text-small-font-size)] tracking-[var(--content-text-small-letter-spacing)] leading-[var(--content-text-small-line-height)] [font-style:var(--content-text-small-font-style)]">
                      / mensual
                    </span>
                  </div>
                  <Button variant="ghost" className="h-[54px] px-10 py-4 flex-1">
                    <span className="font-button-base font-[number:var(--button-base-font-weight)] text-[#1a1a1a] text-[length:var(--button-base-font-size)] tracking-[var(--button-base-letter-spacing)] leading-[var(--button-base-line-height)] [font-style:var(--button-base-font-style)]">
                      Empieza Gratis
                    </span>
                  </Button>
                </div>
              </div>

              <Separator className="w-full" />

              <div className="flex flex-col items-start gap-4 w-full">
                <p className="font-content-text-small font-[number:var(--content-text-small-font-weight)] text-[#4d4d4d] text-[length:var(--content-text-small-font-size)] tracking-[var(--content-text-small-letter-spacing)] leading-[var(--content-text-small-line-height)] [font-style:var(--content-text-small-font-style)]">
                  Comienza con:
                </p>

                <div className="flex flex-col items-start gap-2 w-full">
                  {basicFeatures.map((feature, index) => (
                    <div
                      key={`basic-feature-${index}`}
                      className="flex items-center gap-3 w-full"
                    >
                      <CheckIcon className="w-4 h-4 text-[#1a1a1a]" />
                      <span className="[font-family:'Mona_Sans',Helvetica] font-medium text-[#1a1a1a] text-base tracking-[0.32px] leading-6">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Premium Plan Card */}
          <Card className="flex w-[790px] p-8 rounded-3xl border-none bg-[linear-gradient(315deg,rgba(6,1,10,1)_0%,rgba(28,7,44,1)_100%)]">
            <CardContent className="flex flex-col items-start gap-8 p-0 w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-8 h-8"
                      alt="Fluent checkmark"
                      src="/fluent-checkmark-starburst-20-filled-2.svg"
                    />
                    <h3 className="bg-[linear-gradient(270deg,rgba(144,26,240,1)_0%,rgba(201,24,219,1)_33%,rgba(246,22,121,1)_66%,rgba(224,22,40,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Mona_Sans',Helvetica] font-extrabold text-transparent text-[32px] tracking-[-0.32px] leading-normal">
                      Plan Premium
                    </h3>
                  </div>
                  <p className="font-content-text-small font-[number:var(--content-text-small-font-weight)] text-white text-[length:var(--content-text-small-font-size)] tracking-[var(--content-text-small-letter-spacing)] leading-[var(--content-text-small-line-height)] [font-style:var(--content-text-small-font-style)]">
                    Ideal para apostadores serios que desean maximizar sus ganancias
                    con tips exclusivos, análisis detallados y acceso completo a
                    estadísticas avanzadas.
                  </p>
                </div>

                <div className="flex items-center gap-20 w-full">
                  <div className="flex items-center gap-4">
                    <span className="[font-family:'Mona_Sans',Helvetica] font-bold text-white text-[40px] tracking-[0.80px] leading-[60px]">
                      €8
                    </span>
                    <span className="font-content-text-small font-[number:var(--content-text-small-font-weight)] text-[#a5a5a5] text-[length:var(--content-text-small-font-size)] tracking-[var(--content-text-small-letter-spacing)] leading-[var(--content-text-small-line-height)] [font-style:var(--content-text-small-font-style)]">
                      / mensual
                    </span>
                  </div>
                  <Button className="h-[54px] px-10 py-4 flex-1 bg-[linear-gradient(270deg,rgba(144,26,240,1)_0%,rgba(201,24,219,1)_33%,rgba(246,22,121,1)_66%,rgba(224,22,40,1)_100%)] text-white">
                    <span className="font-button-base font-[number:var(--button-base-font-weight)] text-white text-[length:var(--button-base-font-size)] tracking-[var(--button-base-letter-spacing)] leading-[var(--button-base-line-height)] [font-style:var(--button-base-font-style)]">
                      Mejora a Premium
                    </span>
                  </Button>
                </div>
              </div>

              <Separator className="w-full bg-white/20" />

              <div className="flex flex-col items-start gap-4 w-full">
                <p className="font-content-text-small font-[number:var(--content-text-small-font-weight)] text-[#a5a5a5] text-[length:var(--content-text-small-font-size)] tracking-[var(--content-text-small-letter-spacing)] leading-[var(--content-text-small-line-height)] [font-style:var(--content-text-small-font-style)]">
                  Todo lo del plan Básico, más:
                </p>

                <div className="flex flex-col items-start gap-2 w-full">
                  {premiumFeatures.map((feature, index) => (
                    <div
                      key={`premium-feature-${index}`}
                      className="flex items-center gap-3 w-full"
                    >
                      <CheckIcon className="w-4 h-4 text-white" />
                      <span className="[font-family:'Mona_Sans',Helvetica] font-medium text-white text-base tracking-[0.32px] leading-6">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};