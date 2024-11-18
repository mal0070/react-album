import { atom } from "jotai";
import axios from "axios";

export const searchValueAtom = atom<string>('korea');
export const pageAtom = atom<number>(1);


export const fetchAPI = async (searchValue: string, page: number) => {
    const API_KEY = 'gcyfsAL2xYOU7tSWNxnPBikSgoeze88F9cdW2zNwjNM';
    const BASE_URL = 'https://api.unsplash.com/search/photos';

    try {
      const res = await axios.get(
        `${BASE_URL}/?query=${searchValue}&page=${page}&per_page=30&client_id=${API_KEY}`
      );
      return res;
      } catch (error) {
      console.error('API 호출 중 오류 발생');
      throw error;
    }
  }; //store에 모듈화시켜서 코드 재사용성 높임