import { atom } from 'jotai';

export const weather = atom({ data: null, loading: true, error: false });
