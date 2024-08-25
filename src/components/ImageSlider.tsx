import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";

const images = ["/carwash.jpg", "/carwash2.jpg", "/carwash3.jpg"];
export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-screen mx-auto "
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="mx-auto">
        {images.map((image, index) => (
          <CarouselItem key={index} className="border-none p-0 m-0">
            <div className="">
              <Card className="max-h-[600px]">
                <CardContent className="">
                  <div className="">
                    <img
                      className="object-cover w-full"
                      src={image}
                      alt="Carwash"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
