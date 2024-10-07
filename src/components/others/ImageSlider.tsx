import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { Card, CardContent } from "./../ui/card";

const images = ["https://ik.imagekit.io/waizul/branding-1?updatedAt=1725631351721", "https://ik.imagekit.io/waizul/carwash2.jpg", "https://ik.imagekit.io/waizul/carwash3.jpg?updatedAt=1725079238320"];
function ImageSlieder() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-screen mx-auto"
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="mx-auto">
        {images.map((image, index) => (
          <CarouselItem key={index} className=" p-0 m-0">
            <div className="">
              <Card className="max-h-[600px] border-none">
                <CardContent className="p-0">
                  <div className="">
                    <img
                      className="w-full"
                      src={image}
                      alt="Carwash"
                      loading="lazy"
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
 export default ImageSlieder;