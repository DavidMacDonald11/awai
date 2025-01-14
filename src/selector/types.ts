import { ReadableAsyncState, ReadableState } from '../types';

export type SyncSelector<T> = ReadableState<T>;

export type AsyncSelector<T> = ReadableAsyncState<T>;
