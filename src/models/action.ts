import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import store, { RootStateType } from '../redux/store';
import { TypedUseSelectorHook } from 'react-redux';

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
  InferValueTypes<T>
>;

export type ThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  RootStateType,
  unknown,
  A
>;

type AppAction = ReturnType<typeof store.dispatch>;
export type AppDispatch = ThunkDispatch<RootStateType, any, AppAction>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;