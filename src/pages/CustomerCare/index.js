import React from 'react';
import {useTranslation} from 'react-i18next';
import {Row} from 'antd';
import ListSearch from './ListSearch';
import ListEvent from './ListEvent';
import History from './History';

export default function CustomerCare() {
  const {t} = useTranslation();

  return (
    <div className="content-box customer-care">
      <h3>{t('customer care.title')}</h3>
      <Row>
        <ListSearch></ListSearch>
        <ListEvent></ListEvent>
        <History></History>
      </Row>
    </div>
  );
}
