import React, { ReactNode } from 'react';

import { SheetComponent } from '@antv/s2-react';
import { Pagination } from 'antd';
import { ut } from '../../i18n';

import '@antv/s2-react/dist/style.min.css';

import { LIB_PREFIX } from '../../constants';

import type { S2DataConfig } from '@antv/s2';

type IProps = {
  current: number;
  pageSize: number;
  total: number;
  dataCfg: S2DataConfig;
  onPageChange: (page: number, pageSize: number) => void;
  summary?: ReactNode;
  [propname: string]: any;
};

const OtterSheet = (props: IProps) => {
  const { t } = ut();
  const { current, pageSize, total, onPageChange, summary, dataCfg, ...others } = props;
  return (
    <section className={`${LIB_PREFIX}-sheet-wrap`}>
      <div id="container" className={`${LIB_PREFIX}-sheet-body`}>
        <SheetComponent
          dataCfg={dataCfg}
          {...others}
          adaptive={{
            width: true,
            height: true,
            getContainer: () => document.getElementById('container') as HTMLElement,
          }}
        />
      </div>
      <div className="border-t border-medium">{summary}</div>
      <footer className={`${LIB_PREFIX}-sheet-footer`}>
        <Pagination
          current={current}
          pageSize={pageSize}
          onChange={onPageChange}
          size="small"
          total={total}
          showTotal={(total) => `${t('common.list.total', { total })}`}
        />
      </footer>
    </section>
  );
};
export default OtterSheet;
