import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { sliders } from '@/constants';

interface HeroProps {
  title: string;
  subtitle: string;
  btnText?: string;
}
import { Button } from '@/components/ui/button';

const Hero = ({ title, subtitle, btnText }: HeroProps) => {
  return (
  
    <Carousel className='w-[85%] relative bg-blue-500 h-[80vh] mx-auto'>
      <CarouselContent className='-ml-1'>
        {sliders.map((slider, index) => (
          <CarouselItem key={index} className=' md:basis-1/1 absolute top-1/2'>
            <div className='p-1'>
              <Card>
                <CardContent className=' items-center justify-center p-6'>
                  <span className='text-2xl font-semibold'>{slider.title}</span>
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
};

export default Hero;
