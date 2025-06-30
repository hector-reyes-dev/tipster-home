import { UsersIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const UserTestimonialsSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      backgroundImage: "/mask-group.png",
      appName: "WinningBets Pro",
      appNameFont: "[font-family:'Agbalumo',Helvetica]",
      quote: '"He logrado llegar a más usuarios que confían en mis análisis."',
      name: "— Elena G.",
      sport: "Baloncesto",
      followers: "1,100,000 Seguidores",
      sportIconSrc: "/material-symbols-sports-soccer.svg",
      followersIconSrc: "/fluent-people-community-24-regular.svg",
    },
    {
      id: 2,
      backgroundImage: "/mask-group-1.png",
      appName: "ExpertBet Insights",
      appNameFont: "[font-family:'Calistoga',Helvetica]",
      quote:
        '"La claridad de las estadísticas permite ver mi historial y resultados."',
      name: "— Elena G.",
      sport: "Baloncesto",
      followers: "1,100,000 Seguidores",
      sportIconSrc: "/material-symbols-sports-soccer.svg",
      followersIconSrc: "/fluent-people-community-24-regular.svg",
    },
    {
      id: 3,
      backgroundImage: "/mask-group-2.png",
      appName: "ExpertBet Insights",
      appNameFont: "[font-family:'Calistoga',Helvetica]",
      quote: '"He logrado llegar a más usuarios que confían en mis análisis."',
      name: "— Javier M.",
      sport: "Baloncesto",
      followers: "1,100,000 Seguidores",
      sportIconSrc: "/material-symbols-sports-soccer.svg",
      followersIconSrc: "/fluent-people-community-24-regular.svg",
    },
    {
      id: 4,
      backgroundImage: "/mask-group-3.png",
      appName: "WinningBets Pro",
      appNameFont: "[font-family:'Agbalumo',Helvetica]",
      quote: '"He logrado llegar a más usuarios que confían en mis análisis."',
      name: "— Javier M.",
      sport: "Baloncesto",
      followers: "1,100,000 Seguidores",
      sportIconSrc: "/material-symbols-sports-soccer.svg",
      followersIconSrc: "/fluent-people-community-24-regular-6.svg",
    },
    {
      id: 5,
      backgroundImage: "/mask-group-4.png",
      appName: "ExpertBet Insights",
      appNameFont: "[font-family:'Calistoga',Helvetica]",
      quote:
        '"La claridad de las estadísticas permite ver mi historial y resultados."',
      name: "— Elena G.",
      sport: "Baloncesto",
      followers: "1,100,000 Seguidores",
      sportIconSrc: "/material-symbols-sports-soccer.svg",
      followersIconSrc: "/fluent-people-community-24-regular.svg",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1359px] items-center gap-10 mx-auto py-10">
      <div className="flex flex-col md:flex-row items-start justify-between w-full gap-6">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 flex items-center justify-center">
            <UsersIcon className="w-14 h-14" />
          </div>

          <h2 className="w-full md:w-[441px] bg-[linear-gradient(225deg,rgba(201,24,219,1)_0%,rgba(144,26,240,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Mona_Sans',Helvetica] font-extrabold text-transparent text-[40px] tracking-[-0.40px] leading-[normal]">
            Lo que nuestros usuarios dicen
          </h2>
        </div>

        <p className="w-full md:w-[671px] [font-family:'Mona_Sans',Helvetica] font-normal text-[#4d4d4d] text-xl tracking-[0] leading-[30px]">
          Transformamos la forma en que los usuarios realizan sus apuestas
          deportivas, proporcionando acceso a expertos verificados y aumentando
          las probabilidades de éxito.
        </p>
      </div>

      <div className="flex flex-wrap md:flex-nowrap items-start justify-center gap-4 w-full">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="relative w-full md:w-[259px] h-[380px] rounded-3xl overflow-hidden p-0 border-none"
            style={{
              backgroundImage: `url(${testimonial.backgroundImage})`,
              backgroundSize: "100% 100%",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0">
              <CardContent className="flex flex-col w-full justify-center gap-4 p-4 bg-[#ffffff0d] border-t border-transparent backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] [border-image:linear-gradient(270deg,rgba(144,26,240,1)_0%,rgba(201,24,219,1)_33%,rgba(246,22,121,1)_66%,rgba(224,22,40,1)_100%)_1]">
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex flex-col gap-1 w-full">
                    <div
                      className={`w-full ${testimonial.appNameFont} font-normal text-white text-base tracking-[0] leading-[normal]`}
                    >
                      {testimonial.appName}
                    </div>
                    <p className="w-full [font-family:'Mona_Sans',Helvetica] font-normal italic text-white text-base tracking-[0] leading-[normal]">
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex justify-between w-full items-start">
                      <div className="w-[227px] [font-family:'Mona_Sans',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal]">
                        {testimonial.name}
                      </div>
                      <div className="ml-[-97px] flex items-center gap-2">
                        <img
                          className="w-4 h-4"
                          alt="Sport icon"
                          src={testimonial.sportIconSrc}
                        />
                        <span className="[font-family:'Mona_Sans',Helvetica] font-normal text-white text-sm text-center tracking-[-0.14px] leading-[normal]">
                          {testimonial.sport}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <img
                        className="w-4 h-4"
                        alt="Followers icon"
                        src={testimonial.followersIconSrc}
                      />
                      <span className="[font-family:'Mona_Sans',Helvetica] text-white text-sm tracking-[-0.14px] font-normal text-center leading-[normal]">
                        {testimonial.followers}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
