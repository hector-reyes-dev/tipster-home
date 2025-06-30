import React from "react";
import { Button } from "../../components/ui/button";
import { CallToActionSection } from "./sections/CallToActionSection";
import { DownloadAppSection } from "./sections/DownloadAppSection";
import { FeaturesOverviewSection } from "./sections/FeaturesOverviewSection";
import { FrequentlyAskedQuestionsSection } from "./sections/FrequentlyAskedQuestionsSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { MainFooterSection } from "./sections/MainFooterSection";
import { PricingPlansSection } from "./sections/PricingPlansSection";
import { TipsterSelectionSection } from "./sections/TipsterSelectionSection";
import { UserTestimonialsSection } from "./sections/UserTestimonialsSection";

export const HomeDesktop = (): JSX.Element => {
  // Menu items data
  const menuItems = [
    { name: "Actualizaciones", hasNotification: true },
    { name: "Acerca de Nosotros", hasNotification: false },
    { name: "Apuestas Responsables", hasNotification: false },
    { name: "Soporte", hasNotification: false },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        {/* Fixed navigation bar */}
        <div className="flex w-full max-w-[1361px] items-center justify-between fixed top-[38px] left-1/2 transform -translate-x-1/2 z-50 px-10">
          {/* Logo */}
          <div className="relative w-[217.65px] h-10 bg-[url(/4-2.png)] bg-cover bg-[50%_50%]" />

          {/* Navigation menu */}
          <div className="inline-flex items-center gap-10 px-8 py-4 relative flex-[0_0_auto] bg-[#ffffff4c] rounded-2xl shadow-[0px_2px_8px_#0300050a] backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)]">
            {menuItems.map((item, index) => (
              <div
                key={`menu-item-${index}`}
                className="inline-flex items-center gap-1 relative flex-[0_0_auto]"
              >
                {item.hasNotification && (
                  <div className="relative w-2 h-2">
                    <div className="relative h-2 rounded">
                      <div className="w-2 h-2 top-0 left-0 rounded opacity-30 absolute bg-[#f61679]" />
                      <div className="w-1 h-1 top-0.5 left-0.5 rounded-sm absolute bg-[#f61679]" />
                    </div>
                  </div>
                )}
                <div className="relative w-fit mt-[-1.00px] font-menu-item-base font-[number:var(--menu-item-base-font-weight)] text-[#4d4d4d] text-[length:var(--menu-item-base-font-size)] text-center tracking-[var(--menu-item-base-letter-spacing)] leading-[var(--menu-item-base-line-height)] whitespace-nowrap [font-style:var(--menu-item-base-font-style)]">
                  {item.name}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button className="h-[54px] px-10 py-4 bg-[linear-gradient(270deg,rgba(144,26,240,1)_0%,rgba(201,24,219,1)_33%,rgba(246,22,121,1)_66%,rgba(224,22,40,1)_100%)] rounded-[40px]">
            <span className="mt-[-2.00px] text-white text-[length:var(--button-base-font-size)] tracking-[var(--button-base-letter-spacing)] font-button-base font-[number:var(--button-base-font-weight)] leading-[var(--button-base-line-height)] whitespace-nowrap [font-style:var(--button-base-font-style)]">
              Descarga la App
            </span>
          </Button>
        </div>

        {/* Main content sections in the correct order based on the image */}
        <section className="relative">
          <HeroBannerSection />
        </section>

        <section>
          <TipsterSelectionSection />
        </section>

        <section>
          <HowItWorksSection />
        </section>

        <section>
          <DownloadAppSection />
        </section>

        <section>
          <FeaturesOverviewSection />
        </section>

        <section>
          <UserTestimonialsSection />
        </section>

        <section>
          <PricingPlansSection />
        </section>

        <section>
          <FrequentlyAskedQuestionsSection />
        </section>

        <section>
          <CallToActionSection />
        </section>

        <section>
          <MainFooterSection />
        </section>
      </div>
    </div>
  );
};