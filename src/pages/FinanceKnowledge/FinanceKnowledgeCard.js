import { Col, Image, Layout, Row, Typography } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import eyeIcon from '../../assets/images/icons/eyeIcon.svg';
import timeIcon from '../../assets/images/icons/timeIcon.svg';
import { getView } from '../../slices/financeKnowledge';

const FinanceSupportCard = (props) => {
  const dispatch = useDispatch();
  const { wrap, target, content } = props;
  const date = content?.createdAt
    ? content?.createdAt.slice(0, 10).replace(/-/g, '/')
    : content?.date;

  return (
    <Col
      className='gutter-row'
      sm={props.sm || 24}
      md={props.md || 24}
      lg={props.lg || 8}
    >
      <Layout.Content className='content'>
        <a
          href={content?.url || content?.link}
          target={target || '_blank'}
          rel='noreferrer'
          onClick={() => dispatch(getView(content?.id))}
        >
          <Row
            gutter={[10, 0]}
            align='stretch'
            className={`content-row ${wrap ? 'content-row_wrap' : ''}`}
          >
            {props.image && (
              <Col lg={wrap ? 24 : 6} md={24} sm={24} xs={24}>
                <Image
                  src={content?.image || content?.img}
                  preview={false}
                  className={`image ${wrap ? 'image-wrap' : ''}`}
                />
              </Col>
            )}

            <Col lg={wrap ? 24 : props.image ? 18 : 24} md={24} sm={24} xs={24}>
              <Row
                gutter={[10, 3]}
                align='stretch'
                className={`${wrap ? 'row_wrap' : null}`}
              >
                <Col
                  lg={wrap ? 12 : 24}
                  md={wrap ? 12 : 24}
                  sm={wrap ? 12 : 24}
                  xs={24}
                >
                  <Typography.Title
                    level={5}
                    ellipsis={{ rows: 1 }}
                    title={content?.title}
                  >
                    {content?.title}
                  </Typography.Title>
                </Col>
                <Col
                  lg={wrap ? 12 : 24}
                  md={wrap ? 12 : 24}
                  sm={wrap ? 12 : 24}
                  xs={24}
                >
                  <div className={`card-content ${wrap && 'wrap'}`}>
                    {wrap && (
                      <Typography.Text className='card-item'>
                        <img src={eyeIcon} alt={content?.view || null} />
                        <span>{content?.view || 0}</span>
                      </Typography.Text>
                    )}
                    {wrap && <span className='line'>|</span>}
                    <Typography.Text className='card-item'>
                      <img src={timeIcon} alt={date} />
                      <span>{date || content?.date}</span>
                    </Typography.Text>
                  </div>
                </Col>
              </Row>
              <Typography.Paragraph ellipsis={{ rows: 2 }} className='text'>
                {content?.body || content?.subTitle || content?.desc}
              </Typography.Paragraph>
            </Col>
          </Row>
        </a>
      </Layout.Content>
    </Col>
  );
};

export default FinanceSupportCard;
