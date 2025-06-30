import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../components/ui/carousel";

export const TipsterSelectionSection = (): JSX.Element => {
  // Sport categories data
  const sportCategories = [
    { name: "Tennis", icon: "/material-symbols-sports-tennis-outline.svg" },
    { name: "Golf", icon: "/ic-round-sports-golf.svg" },
    { name: "Baseball", icon: "/ep-football.svg" },
    { name: "Football", icon: "/ph-football.svg" },
    {
      name: "E-Sports",
      icon: "/material-symbols-sports-esports-outline-rounded.svg",
    },
    { name: "Baloncesto", icon: "/ion-football.svg" },
    { name: "Football", icon: "/ph-football.svg" },
    {
      name: "Racing",
      icon: "/material-symbols-sports-motorsports-outline.svg",
    },
    { name: "Golf", icon: "/ic-round-sports-golf.svg" },
    { name: "Box", icon: "/group-3.png" },
    {
      name: "E-Sports",
      icon: "/material-symbols-sports-esports-outline-rounded.svg",
    },
  ];

  // Tipster data
  const tipsters = [
    {
      name: "💰 GanadorSeguro",
      avatar: "/avatar-9.png",
      sport: "Fútbol",
      followers: "1,100,000 Seguidores",
      successRate: "75% de éxito",
      shadowColor: "shadow-[0px_2px_80px_#c019df99]",
    },
    {
      name: "🎯 ApuestasExpert",
      avatar: "/avatar-11.png",
      sport: "Fútbol",
      followers: "1,100,000 Seguidores",
      successRate: "75% de éxito",
      shadowColor: "shadow-[0px_2px_80px_#f6167999]",
    },
    {
      name: "⚽ ElMaestroDelGol",
      avatar: "/avatar-7.png",
      sport: "Fútbol",
      followers: "1,100,000 Seguidores",
      successRate: "75% de éxito",
      shadowColor: "shadow-[0px_2px_80px_#c019df99]",
    },
    {
      name: "📊 AnálisisTotal",
      avatar: "/avatar-10.png",
      sport: "Fútbol",
      followers: "1,100,000 Seguidores",
      successRate: "75% de éxito",
      shadowColor: "shadow-[0px_2px_80px_#e2162d99]",
    },
    {
      name: "🛡 FútbolSeguro",
      avatar: "/avatar-8.png",
      sport: "Fútbol",
      followers: "1,100,000 Seguidores",
      successRate: "75% de éxito",
      shadowColor: "shadow-[0px_2px_80px_#c019df99]",
    },
  ];

  return (
    <section className="relative w-full py-16">
      {/* Gradient background */}
      <div className="absolute w-full h-[394px] bottom-0 left-0 rounded-[40px] blur-[100px] bg-[linear-gradient(270deg,rgba(144,26,240,1)_0%,rgba(201,24,219,1)_33%,rgba(246,22,121,1)_66%,rgba(224,22,40,1)_100%)] opacity-40" />

      <div className="flex flex-col w-full items-center gap-10 relative">
        {/* Sport categories */}
        <div className="flex flex-wrap justify-center gap-4 max-w-[1130px] mx-auto">
          {sportCategories.map((sport, index) => (
            <div
              key={`sport-${index}`}
              className="flex flex-col items-center justify-center gap-2"
            >
              <button className="inline-flex items-center justify-center p-3 bg-[#ffffff1a] rounded-2xl border-none hover:bg-[#ffffff33] transition-colors">
                <img className="w-8 h-8" alt={sport.name} src={sport.icon} />
              </button>
              <span className="font-content-text text-[#1a1a1a] text-[length:var(--content-text-font-size)] text-center tracking-[var(--content-text-letter-spacing)] leading-[var(--content-text-line-height)] whitespace-nowrap">
                {sport.name}
              </span>
            </div>
          ))}
        </div>

        {/* Tipster cards carousel - Full viewport width but centered */}
        <div className="w-full">
          <div className="w-screen relative left-1/2 -translate-x-1/2">
            <Carousel className="w-full">
              <CarouselContent className="py-4 flex justify-center">
                {/* First row of tipsters */}
                {tipsters.map((tipster, index) => (
                  <CarouselItem
                    key={`tipster-row1-${index}`}
                    className="basis-[408px] pl-6"
                  >
                    <div className="w-full h-[150px] bg-[#ffffff33] rounded-[18px] border-[0.5px] border-solid border-[#ffffffcc]">
                      <Card
                        className={`w-[400px] h-[142px] mt-1 ml-1 ${tipster.shadowColor} border-none`}
                      >
                        <CardContent className="flex items-center justify-center gap-4 p-6">
                          <img
                            className="w-[69.28px] h-[78.76px] object-cover"
                            alt="Avatar"
                            src={tipster.avatar}
                          />
                          <div className="flex flex-col items-start gap-2 flex-1">
                            <h3 className="self-stretch mt-[-1.00px] font-content-titles font-[number:var(--content-titles-font-weight)] text-[#1a1a1a] text-[length:var(--content-titles-font-size)] tracking-[var(--content-titles-letter-spacing)] leading-[var(--content-titles-line-height)]">
                              {tipster.name}
                            </h3>
                            <div className="flex flex-col gap-1 items-start">
                              <div className="flex items-center gap-2">
                                <img
                                  className="w-4 h-4"
                                  alt="Sport icon"
                                  src="/material-symbols-sports-soccer.svg"
                                />
                                <span className="text-[#1a1a1a] text-xs font-normal tracking-[-0.12px] [font-family:'Inter',Helvetica]">
                                  {tipster.sport}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <img
                                  className="w-4 h-4"
                                  alt="Followers icon"
                                  src="/fluent-people-community-24-regular.svg"
                                />
                                <span className="text-[#1a1a1a] text-xs font-normal tracking-[-0.12px] [font-family:'Inter',Helvetica]">
                                  {tipster.followers}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <img
                                  className="w-4 h-4"
                                  alt="Trophy icon"
                                  src="/fluent-trophy-24-regular.svg"
                                />
                                <span className="text-[#1a1a1a] text-xs font-normal tracking-[-0.12px] [font-family:'Inter',Helvetica]">
                                  {tipster.successRate}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}

                {/* Second row of tipsters (reusing the same data) */}
                {tipsters.map((tipster, index) => (
                  <CarouselItem
                    key={`tipster-row2-${index}`}
                    className="basis-[408px] pl-6"
                  >
                    <div className="w-full h-[150px] bg-[#ffffff33] rounded-[18px] border-[0.5px] border-solid border-[#ffffffcc]">
                      <Card
                        className={`w-[400px] h-[142px] mt-1 ml-1 ${tipster.shadowColor} border-none`}
                      >
                        <CardContent className="flex items-center justify-center gap-4 p-6">
                          <img
                            className="w-[69.28px] h-[78.76px] object-cover"
                            alt="Avatar"
                            src={tipster.avatar}
                          />
                          <div className="flex flex-col items-start gap-2 flex-1">
                            <h3 className="self-stretch mt-[-1.00px] font-content-titles font-[number:var(--content-titles-font-weight)] text-[#1a1a1a] text-[length:var(--content-titles-font-size)] tracking-[var(--content-titles-letter-spacing)] leading-[var(--content-titles-line-height)]">
                              {tipster.name}
                            </h3>
                            <div className="flex flex-col gap-1 items-start">
                              <div className="flex items-center gap-2">
                                <img
                                  className="w-4 h-4"
                                  alt="Sport icon"
                                  src="/material-symbols-sports-soccer.svg"
                                />
                                <span className="text-[#1a1a1a] text-xs font-normal tracking-[-0.12px] [font-family:'Inter',Helvetica]">
                                  {tipster.sport}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <img
                                  className="w-4 h-4"
                                  alt="Followers icon"
                                  src="/fluent-people-community-24-regular.svg"
                                />
                                <span className="text-[#1a1a1a] text-xs font-normal tracking-[-0.12px] [font-family:'Inter',Helvetica]">
                                  {tipster.followers}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <img
                                  className="w-4 h-4"
                                  alt="Trophy icon"
                                  src="/fluent-trophy-24-regular.svg"
                                />
                                <span className="text-[#1a1a1a] text-xs font-normal tracking-[-0.12px] [font-family:'Inter',Helvetica]">
                                  {tipster.successRate}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};