import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
const baseURL = 'https://apertai.uc.r.appspot.com';

const getVideos = async ({queryKey}: any) => {
  const [, state, city, arena, date, subcourt] = queryKey;
  const response = await axios.get(
    `${baseURL}/videos/subcourt?state=${state}&city=${city}&name=${arena}&date=${date}&subcourt=${subcourt.replace(/\s/g, '')}`,
  );

  return await response;
};

export const useGetVideos = (arena: string, date: string, court: string) => {
  return useQuery({
    queryKey: ['getVideos', 'mg', 'belohorizonte', arena, date, court],
    queryFn: getVideos,
    refetchInterval: 1000,
  });
};

const getArena = async ({queryKey}: any) => {
  const [, city] = queryKey;
  const {data} = await axios.get(`${baseURL}/arena?city=${city}`);

  return data;
};

export const useGetArena = (city: string) => {
  return useQuery({
    queryKey: ['getArena', city],
    queryFn: getArena,
    refetchInterval: 1000,
  });
};
