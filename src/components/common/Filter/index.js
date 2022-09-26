import React, {Button, Checkbox, Row, Col, Popover} from 'antd';
import {useTranslation} from 'react-i18next';
import {useMemo, useState} from 'react';
import FilterIcon from '../../../assets/images/icons/filter.svg';

export default function Filter(props) {
  const {t} = useTranslation();
  const {options, setPayload} = props;
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  const checkFilter = (checkedValues) => {
    setPayload(checkedValues);
    setCount(checkedValues.length);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const checkboxRender = useMemo(() => {
    return (
      <Checkbox.Group style={{'maxWidth': '400px'}} onChange={checkFilter} className="checkbox-item">
        <Row>
          {
            options.map((val, index) => {
              return <Col key={index} span={24}>
                <Checkbox value={val?.value}>{val?.label}</Checkbox>
              </Col>
            })
          }
        </Row>
      </Checkbox.Group>
    )
  });

  return (
    <div className="filter">
      <Popover
        content={checkboxRender}
        trigger="click"
        placement="bottomLeft"
        onOpenChange={handleOpenChange}
      >
        <Button className={`filter__btn ${open && 'filter__btn--active'}`}>
          <div>
            <span className="filter__btn--count">{count}</span>
            {t('common.filter')}
          </div>
          <img src={FilterIcon} alt=""/>
        </Button>
      </Popover>
    </div>
  );
}
