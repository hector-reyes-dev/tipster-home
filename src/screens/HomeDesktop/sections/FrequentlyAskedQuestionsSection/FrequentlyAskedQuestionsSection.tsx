import { MessageSquareTextIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const FrequentlyAskedQuestionsSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "¿Qué es un tipster?",
      answer:
        "Un tipster es un experto en apuestas deportivas que te sugiere apuestas basadas en análisis estadísticos y de valor.",
      defaultOpen: true,
    },
    {
      question: "¿Cómo puedo seguir a un tipster?",
      answer:
        "Para seguir a un tipster, simplemente visita su perfil y haz clic en el botón 'Seguir'. Recibirás notificaciones cuando publiquen nuevas predicciones.",
      defaultOpen: false,
    },
    {
      question: "¿Tipsterhome es gratis?",
      answer:
        "Tipsterhome ofrece tanto opciones gratuitas como premium. Puedes acceder a contenido básico sin costo, mientras que las funciones avanzadas requieren una suscripción.",
      defaultOpen: false,
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row w-full items-start gap-10 max-w-[1400px] mx-auto">
          <div className="flex flex-col w-full md:w-[539px] items-start gap-6">
            <div className="flex items-end gap-6 w-full">
              <MessageSquareTextIcon className="w-14 h-14" />
              <h2 className="bg-[linear-gradient(225deg,rgba(201,24,219,1)_0%,rgba(144,26,240,1)_100%)] bg-clip-text text-transparent [font-family:'Mona_Sans',Helvetica] font-extrabold text-[40px] leading-[48px]">
                Preguntas Frecuentes
              </h2>
            </div>

            <p className="[font-family:'Mona_Sans',Helvetica] font-normal text-[#4d4d4d] text-xl leading-[30px]">
              Encuentra respuestas rápidas a las dudas más comunes sobre cómo
              aprovechar al máximo nuestra plataforma
            </p>

            <Button
              variant="outline"
              className="px-8 py-4 bg-white rounded-[40px] backdrop-blur-sm [font-family:'Mona_Sans',Helvetica] font-medium text-[#1a1a1a] text-base"
            >
              Ver más Preguntas
            </Button>
          </div>

          <div className="flex flex-col items-start gap-8 flex-1">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-0"
            >
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={`faq-item-${index}`}
                  value={`item-${index}`}
                  className="border-0"
                >
                  <div className="flex flex-col items-start gap-4 w-full">
                    <AccordionTrigger className="flex items-center justify-between w-full py-2 px-0 hover:no-underline">
                      <span className="font-content-subtitle font-[number:var(--content-subtitle-font-weight)] text-[#1a1a1a] text-[length:var(--content-subtitle-font-size)] tracking-[var(--content-subtitle-letter-spacing)] leading-[var(--content-subtitle-line-height)] [font-style:var(--content-subtitle-font-style)]">
                        {item.question}
                      </span>
                      {/* The AccordionTrigger component handles the chevron icon automatically */}
                    </AccordionTrigger>

                    <AccordionContent className="pt-0 pb-4">
                      <p className="font-text-small font-[number:var(--text-small-font-weight)] text-[#4d4d4d] text-[length:var(--text-small-font-size)] tracking-[var(--text-small-letter-spacing)] leading-[var(--text-small-line-height)] [font-style:var(--text-small-font-style)]">
                        {item.answer}
                      </p>
                    </AccordionContent>

                    <Separator className="w-full h-px" />
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};