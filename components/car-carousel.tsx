"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarCard } from "./car-card";
import { cars } from "@/lib/utils";

// `cars` moved to `lib/utils.ts`

export function CarCarousel() {
  return (
    <div className="overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {cars.map((car, index) => (
            <CarouselItem key={index} className={`basis-[85%] sm:basis-[60%] md:basis-[34%] lg:basis-[29%] ${index === 0 ? 'pl-6' : 'pl-4'}`}>
              <CarCard {...car} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious 
          className="left-4 border-0 bg-transparent hover:bg-transparent text-gray-400 hover:text-gray-300 rounded-none shadow-none" 
          variant="ghost"
        />
        <CarouselNext 
          className="right-4 border-0 bg-transparent hover:bg-transparent text-gray-400 hover:text-gray-300 rounded-none shadow-none" 
          variant="ghost"
        />
      </Carousel>
    </div>
  );
}
