import httpRequest from 'connectivity/httpRequest';
import {
  getBaseRequestConfig,
  PUBLIC_API,
} from 'connectivity/baseRequestConfig';
import { BlocksResponse } from 'connectivity/lisk/blocks/api.lisk.blocks.types';

export function fetchBlocks(): Promise<BlocksResponse> {
  const url = `${PUBLIC_API}/blocks`;

  const baseRequestConfig = getBaseRequestConfig();
  const requestConfig = Object.assign({}, baseRequestConfig, {
    url: url,
  });

  return httpRequest(requestConfig);
}
