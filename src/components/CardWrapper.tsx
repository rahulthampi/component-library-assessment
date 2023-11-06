import { Badge, Heading } from '@radix-ui/themes';

import { Avatar, AvatarFallback, AvatarImage } from '../UIKit/ui/Avatar/avatar.base';
import { Card } from '../UIKit/ui';

const CardWrapper = () => {
  return (
    <div className="flex gap-4 p-4 flex-wrap">
      <Card className="w-[385px]">
        <div className="flex gap-4 items-center">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
            <AvatarFallback>RT</AvatarFallback>
          </Avatar>

          <div className="w-full flex flex-col justify-between">
            <Badge className="uppercase text-t-xs font-bold tracking-wider text-neutral-foreground">
              Wallet
            </Badge>

            <Heading as="h3" className="font-inter font-semibold text-t-lg">
              Safe
            </Heading>
          </div>
        </div>
      </Card>

      <Card variant="elevated" className="w-[385px]">
        <div className="flex gap-4 items-center">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
            <AvatarFallback>RT</AvatarFallback>
          </Avatar>

          <div className="w-full flex flex-col justify-between">
            <Badge className="uppercase text-t-xs font-bold tracking-wider text-neutral-foreground">
              Wallet
            </Badge>

            <Heading as="h3" className="font-inter font-semibold text-t-lg">
              Safe
            </Heading>
          </div>
        </div>
      </Card>

      <Card variant="ghost" className="w-[385px]">
        <div className="flex gap-4 items-center">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
            <AvatarFallback>RT</AvatarFallback>
          </Avatar>

          <div className="w-full flex flex-col justify-between">
            <Badge className="uppercase text-t-xs font-bold tracking-wider text-neutral-foreground">
              Wallet
            </Badge>

            <Heading as="h3" className="font-inter font-semibold text-t-lg">
              Safe
            </Heading>
          </div>
        </div>
      </Card>

      <Card asChild variant="elevated" className="w-[385px]">
        <a href="#" className="flex gap-4 items-center">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
            <AvatarFallback>RT</AvatarFallback>
          </Avatar>

          <div className="w-full flex flex-col justify-between">
            <Badge className="uppercase text-t-xs font-bold tracking-wider text-neutral-foreground">
              Wallet
            </Badge>

            <Heading as="h3" className="font-inter font-semibold text-t-lg">
              Safe
            </Heading>
          </div>
        </a>
      </Card>
    </div>
  );
};
CardWrapper.displayName = 'CardWrapper';

export default CardWrapper;
