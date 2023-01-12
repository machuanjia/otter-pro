import { useState } from 'react';

import { getPin } from '../utils';

export const usePinPage = () => {
  const pin = getPin();
  const [page, setPage] = useState(pin.page);
  const [pageSize, setPageSize] = useState(pin.pageSize);
  return { page, setPage, pageSize, setPageSize };
};
