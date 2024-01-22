'use server';
import { NextApiRequest } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const apiUrl = `${baseUrl}/api/`;
const wrapParamsFunction = (url: string, params: NextApiRequest['query']) => {
  return `${url}${
    Object.keys(params).length > 0
      ? `?${Object.keys(params)
          .map((key) => `${key}=${params[key]}`)
          .join('&')}`
      : ''
  }`;
};

export const getUserList = (params = {}) => {
  const url = wrapParamsFunction('user', params);
  return fetch(`${apiUrl}${url}`, { cache: 'no-store' }).then((res) => res.json());
};
