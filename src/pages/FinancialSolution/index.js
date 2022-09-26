import React, { useEffect } from "react";
import { Card, Col, Image, Row } from "antd";
import { useTranslation } from "react-i18next";
import brokenImage from "../../assets/images/financial/broken-image.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFinanceFundDatas } from "../../slices/financeSolutions";

const FinancialSolution = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFinanceFundDatas());
  }, [getFinanceFundDatas]);
  const finaceFundData = useSelector(
    (state) => state.financeReducer.getFinanceFundDatas
  );

  return (
    <>
      <Row gutter={[20, 20]}>
        <Col span={24} className="financial-title">
          <h3>{t("financial solution.title")}</h3>
        </Col>
        {finaceFundData !== undefined &&
          finaceFundData?.map((item) => {
            return (
              <Col span={24} lg={8} key={item?.id} className="financial">
                <div className="card-top" />
                <Link
                  to={`${
                    (item?.name === "prevention" && "/contingency-fund") ||
                    (item?.name === "inheritance" && "/inheritance-fund") ||
                    (item?.name === "education" && "/education-foundation") ||
                    (item?.name === "startup" && "/startup-fund") ||
                    (item?.name === "pension" && "/retirement") ||
                    item?.name
                  }`}
                  state={{ id: item?.id }}>
                  <Card className="financial__card">
                    <Image
                      src={item?.image === null ? brokenImage : item?.image}
                      className="financial__image"
                      preview={false}
                    />
                    <div className="financial__content">
                      <h3 className="financial__title">{`${
                        (item?.name === "prevention" && "Quỹ dự phòng") ||
                        (item?.name === "inheritance" && "Quỹ thừa kế") ||
                        (item?.name === "education" && "Quỹ giáo dục") ||
                        (item?.name === "startup" && "Quỹ khởi nghiệp") ||
                        (item?.name === "pension" && "Quỹ Hưu trí") ||
                        item?.name
                      }`}</h3>
                      <p className="financial__dec">
                        {item?.description === null ? "N/A" : item?.description}
                      </p>
                    </div>
                  </Card>
                </Link>
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default FinancialSolution;
