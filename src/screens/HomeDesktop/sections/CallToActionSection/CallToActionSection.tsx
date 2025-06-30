import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  return (
    <Card className="w-full rounded-[24px_24px_0px_0px] bg-[linear-gradient(270deg,rgba(144,26,240,1)_0%,rgba(201,24,219,1)_33%,rgba(246,22,121,1)_66%,rgba(224,22,40,1)_100%)] border-none">
      <CardContent className="flex flex-col items-center justify-center py-20 px-0">
        <div className="flex flex-col items-center gap-6 max-w-[882px]">
          <div className="flex flex-col items-start gap-4 w-full">
            <h2 className="w-full [font-family:'Mona_Sans',Helvetica] font-normal text-white text-[40px] text-center tracking-[-0.40px] leading-[normal]">
              Empieza a ganar con los mejores tips deportivos.
            </h2>

            <h2 className="w-full [font-family:'Mona_Sans',Helvetica] font-extrabold text-white text-[40px] text-center tracking-[-0.40px] leading-[normal]">
              ¡Únete a Tipsterhome hoy!
            </h2>
          </div>

          <Button
            variant="secondary"
            className="px-20 py-6 bg-white hover:bg-white rounded-[40px]"
          >
            <span className="bg-[linear-gradient(270deg,rgba(144,26,240,1)_0%,rgba(201,24,219,1)_33%,rgba(246,22,121,1)_66%,rgba(224,22,40,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent text-2xl tracking-[-0.24px] [font-family:'Mona_Sans',Helvetica] font-bold leading-6 whitespace-nowrap">
              Descarga la app
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
