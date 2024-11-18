import { Header } from '@/components/common';
import { ImageCard } from '@/components/home/image-card';
import { ImageCardType } from '@/types';
import { useEffect, useState } from 'react';

function Bookmark() {
  const [bookmarks, setBookmarks] = useState<ImageCardType[]>([]);

  const getLocalStorage = () => {
    const storedImages = localStorage.getItem('bookmark');
    let bookmarks: ImageCardType[] = [];

    if (storedImages) {
      try {
        bookmarks = JSON.parse(storedImages);
      } catch (error) {
        console.error('데이터 파싱 오류: ', error);
        bookmarks = [];
      }
    }

    if (bookmarks.length === 0) {
      console.log('저장된 데이터 없음');
    } else {
      setBookmarks([...bookmarks]);
    }
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        {bookmarks.length ? (
          <div className="page__container__contents">
            {bookmarks.map((image: ImageCardType) => {
              return <ImageCard data={image} key={image.id} />;
            })}
          </div>
        ) : (
          <div className='w-full flex items-center justify-center mt-24 text-xl'>조회 가능한 데이터가 없습니다.</div>
        )}
      </div>
    </div>
  );
}

export { Bookmark };
