import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DownloadAppSection = (): JSX.Element => {
  // Create an array for the repeating background lines
  const backgroundLines = Array.from({ length: 26 }, (_, index) => ({
    top: index === 25 ? "top-[572px]" : `top-[${index * 22}px]`,
    height: index === 25 ? "h-1" : "h-[22px]",
  }));

  return (
    <section className="relative w-full h-[576px]">
      {/* Background pattern */}
      <div className="relative h-[576px] w-full">
        <div className="absolute w-full h-[576px] top-0 left-0 overflow-hidden opacity-20">
          {backgroundLines.map((line, index) => (
            <img
              key={`frame-${index}`}
              className={`absolute w-full ${line.height} ${line.top} left-0`}
              alt="Frame"
              src="/frame.svg"
            />
          ))}
        </div>

        {/* Main content */}
        <Card className="border-0 shadow-none">
          <CardContent className="flex items-center gap-[57px] p-0 absolute top-[43px] left-[41px] w-[calc(100%-82px)]">
            {/* App image */}
            <img
              className="relative w-[632.57px] h-[489.4px]"
              alt="iPhone Pro displaying the app"
              src="/iphone-16-pro.png"
            />

            {/* Text content and download buttons */}
            <div className="flex flex-col items-start gap-6 relative flex-1">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
                <div className="flex items-center gap-4 relative self-stretch w-full">
                  <img
                    className="relative w-14 h-14"
                    alt="Sparkle icon"
                    src="/fluent-tab-desktop-multiple-sparkle-16-regular.svg"
                  />

                  <h2 className="relative flex-1 mt-[-1.00px] bg-[linear-gradient(225deg,rgba(201,24,219,1)_0%,rgba(144,26,240,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Mona_Sans',Helvetica] font-extrabold text-transparent text-[40px] tracking-[-0.40px] leading-[normal]">
                    Apuesta con los mejores <br />
                    tips, donde quieras
                  </h2>
                </div>

                <p className="relative self-stretch [font-family:'Mona_Sans',Helvetica] font-normal text-[#4d4d4d] text-xl tracking-[0] leading-[30px]">
                  Lleva tus apuestas al siguiente nivel con análisis expertos y
                  tips personalizados directamente en tu móvil. <br />
                  ¡Descarga la app y maximiza tus ganancias en cualquier
                  momento!
                </p>
              </div>

              {/* Download buttons */}
              <div className="inline-flex items-center gap-4 relative">
                {/* App Store button */}
                <div className="relative w-[162.88px] h-[55px] overflow-hidden">
                  <div className="w-[163px] h-[55px]">
                    <div className="relative h-[55px]">
                      <div className="absolute w-[163px] h-[55px] top-0 left-0 bg-[url(/group.png)] bg-[100%_100%]">
                        <div className="relative w-[135px] h-[34px] top-3 left-3.5">
                          <div className="absolute w-6 h-[30px] top-0 left-0 bg-[url(/-group-.png)] bg-[100%_100%]" />
                          <img
                            className="absolute w-[102px] h-[21px] top-[13px] left-[33px]"
                            alt="App Store"
                            src="/group-1.png"
                          />
                        </div>
                      </div>
                      <div className="absolute w-[94px] h-[9px] top-3 left-[49px] bg-[url(/group-2.png)] bg-[100%_100%]" />
                    </div>
                  </div>
                </div>

                {/* Google Play button */}
                <div className="relative w-[184.04px] h-[55px] bg-[url(/en.png)] bg-[100%_100%]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
