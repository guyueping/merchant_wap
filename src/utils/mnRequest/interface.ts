export type Type = 'web' | 'electron' | 'react-native' | 'miniapp'; // type 决定 数据的储存方式
export interface iParams {
  apiUrl: string;
  version?: string;
  data?: object;
  restData?: object;
}
