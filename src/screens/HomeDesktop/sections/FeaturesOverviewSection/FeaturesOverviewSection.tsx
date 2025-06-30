import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesOverviewSection = (): JSX.Element => {
  // Data for tipsters in the specialization section
  const tipsters = [
    {
      name: "💰 GanadorSeguro",
      avatar: "/avatar-9.png",
      followers: "2,797 Seguidores",
    },
    {
      name: "⚽ ElMaestroDelGol",
      avatar: "/avatar-7.png",
      followers: "2,797 Seguidores",
    },
  ];

  // Data for performance statistics
  const statistics = [
    "Historial Detallado de Apuestas",
    "Rendimiento de Tipsters Seguidos",
    "Comparación entre Tipsters",
    "Análisis de Tendencias",
    "Recomendaciones Basadas en Datos",
  ];

  return (
    <section className="flex flex-col w-full items-start gap-6 py-16">
      <div className="flex flex-col md:flex-row items-start justify-between w-full gap-6">
        <div className="flex items-center gap-4">
          <img
            className="w-14 h-14"
            alt="Fluent trophy"
            src="/fluent-trophy-28-regular.svg"
          />

          <h2 className="max-w-[441px] bg-[linear-gradient(225deg,rgba(201,24,219,1)_0%,rgba(144,26,240,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent font-['Mona_Sans',Helvetica] font-extrabold text-[40px] tracking-[-0.40px] leading-[normal]">
            Características que te harán ganar más
          </h2>
        </div>

        <p className="max-w-[671px] font-['Mona_Sans',Helvetica] font-normal text-[#4d4d4d] text-xl leading-[30px]">
          Experiencia optimizada en apuestas deportivas, con expertos
          verificados, brindando recomendaciones personalizadas y herramientas
          avanzadas para maximizar tus resultados.
        </p>
      </div>

      <div className="flex flex-col items-start gap-4 w-full">
        <div className="flex flex-col md:flex-row items-start gap-4 w-full">
          <Card className="flex h-[430px] w-full md:w-[67%] rounded-3xl border-none overflow-hidden">
            <CardContent className="flex flex-col items-start justify-end gap-6 p-10 flex-1">
              <div className="flex flex-col w-[314px] items-start gap-4">
                <div className="w-[131.25px] h-6 bg-[url(/4-2.png)] bg-cover bg-[50%_50%]" />

                <h3 className="w-full bg-[linear-gradient(270deg,rgba(144,26,240,1)_0%,rgba(201,24,219,1)_33%,rgba(246,22,121,1)_66%,rgba(224,22,40,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent font-['Mona_Sans',Helvetica] font-extrabold text-[32px] leading-normal">
                  Tipsters Verificados
                </h3>
              </div>

              <div className="flex flex-col items-start gap-6 w-full">
                <p className="font-content-text-small text-black text-[length:var(--content-text-small-font-size)] tracking-[var(--content-text-small-letter-spacing)] leading-[var(--content-text-small-line-height)]">
                  Solo trabajamos con tipsters verificados, expertos en apuestas
                  deportivas con una trayectoria comprobada que garantizan
                  análisis sólidos y resultados consistentes.
                </p>

                <Button className="px-8 py-4 bg-[linear-gradient(225deg,rgba(201,24,219,1)_0%,rgba(144,26,240,1)_100%)] rounded-[40px]">
                  <span className="font-['Mona_Sans',Helvetica] font-medium text-white text-base leading-4">
                    Conviértete en Tipster
                  </span>
                </Button>
              </div>
            </CardContent>

            <img
              className="self-stretch w-[355px]"
              alt="Image"
              src="/image.png"
            />
          </Card>

          <Card className="flex flex-col w-full md:w-[33%] items-center gap-6 p-6 rounded-3xl border-none">
            <h3 className="w-full h-[76px] bg-[linear-gradient(270deg,rgba(144,26,240,1)_0%,rgba(201,24,219,1)_33%,rgba(246,22,121,1)_66%,rgba(224,22,40,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent font-['Mona_Sans',Helvetica] font-extrabold text-[32px] text-center leading-normal">
              Especialización Deportiva
            </h3>

            <div className="flex flex-col items-start gap-1 w-full">
              {tipsters.map((tipster, index) => (
                <div
                  key={`tipster-${index}`}
                  className="px-6 py-4 w-full bg-[#050009] rounded-2xl flex items-center"
                >
                  <div className="flex items-center gap-2">
                    <Avatar className="w-[41.57px] h-[46.76px]">
                      <AvatarImage
                        src={tipster.avatar}
                        alt="Avatar"
                        className="object-cover"
                      />
                    </Avatar>

                    <div className="flex flex-col items-start gap-1">
                      <div className="font-['Mona_Sans',Helvetica] font-bold text-white text-xl leading-normal whitespace-nowrap">
                        {tipster.name}
                      </div>

                      <div className="flex items-center gap-[3px] rounded-[10px]">
                        <img
                          className="w-4 h-4"
                          alt="Fluent people"
                          src="/fluent-people-community-24-regular.svg"
                        />
                        <span className="font-['Inter',Helvetica] font-normal text-[#a5a5a5] text-sm text-center leading-normal">
                          {tipster.followers}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start gap-2 w-full">
              <p className="font-['Mona_Sans',Helvetica] font-normal text-[#1a1a1a] text-xl leading-[30px]">
                Tipsters enfocados en deportes específicos para estrategias más
                efectivas.
              </p>
            </div>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
          <Card className="flex flex-col w-full md:w-[33%] items-center gap-6 p-6 rounded-3xl border-none">
            <h3 className="w-full bg-[linear-gradient(270deg,rgba(144,26,240,1)_0%,rgba(201,24,219,1)_33%,rgba(246,22,121,1)_66%,rgba(224,22,40,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent font-['Mona_Sans',Helvetica] font-extrabold text-[32px] text-center leading-normal">
              Interacción con Tipsters
            </h3>

            <div className="flex flex-col w-full items-start gap-2">
              <div className="flex items-end justify-end gap-2 pl-0 pr-8 py-0 w-full shadow-drop-shadow-100">
                <Avatar className="w-[27.71px] h-[30.76px]">
                  <AvatarImage
                    src="/avatar-7.png"
                    alt="Polygon"
                    className="object-cover"
                  />
                </Avatar>

                <div className="flex items-center justify-center gap-2.5 p-2 flex-1 bg-[#4d4d4d] rounded-lg overflow-hidden">
                  <p className="flex-1 font-content-text text-white text-[length:var(--content-text-font-size)] tracking-[var(--content-text-letter-spacing)] leading-[var(--content-text-line-height)]">
                    ¡Hola! 👋 Mañana pinta interesante. Estoy analizando las
                    estadísticas y creo que el mercado de goles tiene potencial.
                    Ambos equipos vienen en buen momento ofensivo. 🔥
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 w-full">
              <p className="font-['Mona_Sans',Helvetica] font-normal text-[#1a1a1a] text-xl leading-[30px]">
                Comunícate directamente con los tipsters para aclarar tus dudas
                y obtener más detalles.
              </p>
            </div>
          </Card>

          <Card className="flex h-[394px] w-full md:w-[67%] items-center justify-between rounded-3xl overflow-hidden border-none">
            <CardContent className="flex flex-col items-start justify-end gap-6 p-10 flex-1">
              <div className="flex flex-col items-start gap-4">
                <div className="w-[131.25px] h-6 bg-[url(/4-2.png)] bg-cover bg-[50%_50%]" />

                <h3 className="bg-[linear-gradient(270deg,rgba(144,26,240,1)_0%,rgba(201,24,219,1)_33%,rgba(246,22,121,1)_66%,rgba(224,22,40,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent font-['Mona_Sans',Helvetica] font-extrabold text-[32px] leading-normal whitespace-nowrap">
                  Estadísticas de Rendimiento
                </h3>
              </div>

              <div className="flex flex-col items-start gap-6 w-full">
                <div className="w-full font-content-text-small text-black text-[length:var(--content-text-small-font-size)] tracking-[var(--content-text-small-letter-spacing)] leading-[var(--content-text-small-line-height)]">
                  {statistics.map((stat, index) => (
                    <React.Fragment key={`stat-${index}`}>
                      {stat}
                      {index < statistics.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </CardContent>

            <img
              className="self-stretch w-[355px]"
              alt="Image"
              src="/image-1.png"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};