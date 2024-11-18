import { Header, Nav } from '@/components/common';
import { PagingFooter } from '@/components/common/paging-footer/PagingFooter';
import { ImageCard } from '@/components/home/image-card';
import { SearchBar } from '@/components/ui';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ImageCardType } from '@/types';

function HomePage() {
  const [images, setImages] = useState([]);
  const { toast } = useToast();

  const fetchAPI = async () => {
    const API_KEY = 'gcyfsAL2xYOU7tSWNxnPBikSgoeze88F9cdW2zNwjNM';
    const BASE_URL = 'https://api.unsplash.com/search/photos';

    const page = 1;
    const searchValue = 'korea';
    const per_page = 30;

    try {
      const res = await axios.get(
        `${BASE_URL}/?query=${searchValue}&page=${page}&per_page=${per_page}&client_id=${API_KEY}`
      );
      if (res.status === 200 && res.data) {
        setImages(res.data.results);
      } else {
        toast({
          variant: 'destructive',
          title: 'API 호출 실패',
          description: 'API 호출을 위한 필수 파라미터 값을 체크해보세요!',
        });
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Nav />
        <div className="page__container__wallpaper">
          <img src="src/assets/wallpaper.png" className="bgImg" />
          <div className="searchBox">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              오픈 API를 활용한 이미지 검색 사이트 만들기
            </h1>
            <div className="flex flex-col w-full mt-5 mb-2">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                인터넷 시각자료 출처입니다.
              </h4>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                모든 지역에 있는 크리에이터들의 지원을 받습니다.
              </h4>
            </div>
            <div>
              <SearchBar placeholder="원하는 이미지를 검색하세요." />
            </div>
          </div>
        </div>
        <div className="page__container__contents">
          {images.map((image: ImageCardType) => {
            return <ImageCard data={image} />;
          })}
        </div>
        <div>
          <footer className="page__container__footer">
            <PagingFooter />
          </footer>
        </div>
      </div>
    </div>
  );
}

export { HomePage };
