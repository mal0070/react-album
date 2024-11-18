import { Skeleton, Button } from '@/components/ui';
import { Heart, FolderOpen } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Avatar } from '@radix-ui/react-avatar';
import { ImageCardType } from '@/types';

interface Props {
  data: ImageCardType;
}

function ImageCard({ data }:Props) {
  const title = data.alternative_slugs.ko.split("-").slice(0,-1).join(" ");

  return (
    <div className="flex flex-col justify-between space-y-3 w-64 h-64 cursor-pointer">
      <div className="relative flex flex-col gap-3">
        <img src={`${data.urls.small}`} alt='이미지'className='w-full h-[200px] rounded-xl' />
       {/*<Skeleton className="w-full h-[250px] rounded-xl" />*/}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size={'icon'}
              className="absolute top-2 right-2 z-10 bg-neutral-500 bg-opacity-50 hover:bg-opacity-50"
            >
              <FolderOpen className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>이미지 상세 정보</DialogTitle>
              <DialogDescription>
                <small className="w-full gap-1 text-s font-medium line-clamp-2">
                  {`${title}`}
                </small>
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Skeleton></Skeleton>
              <div>
                <Avatar>사용자 설명</Avatar>
              </div>
              <div>사진 설명</div>
            </div>
            <div></div>
          </DialogContent>
        </Dialog>
        <small className="text-sm font-semibold leading-none">
        {`${title}`}
        </small>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1 text-sm">
            <span className="leading-7">게시일:</span>{data.created_at.split("T")[0]}
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Heart className="h-[14px] w-[14px] mt-[2px] text-rose-500 fill=#e11d48"></Heart>
            {data.likes.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}

export { ImageCard };
