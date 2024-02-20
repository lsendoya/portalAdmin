import Image from 'next/image';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from '@/components/ui/carousel';
import {Card, CardContent} from '@/components/ui/card';

interface Props {
  links: string[];
  name: string;
}

export function CarouselProduct({ links, name }: Props) {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {links.map((link, index) => (
          <CarouselItem key={index}>
            <div className="p-2">
              <Card>
                <CardContent className="flex  items-center justify-center p-4">
                  <Image
                    className={'object-cover h-40 '}
                    src={link}
                    width={500}
                    height={500}
                    alt={name}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
