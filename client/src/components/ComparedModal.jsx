import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import * as ModalStyle from "../styles/modalStyle";
import * as Compare from "../styles/compareStyle";
import CloseIcon from "@mui/icons-material/Close";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LGButton } from "./Button";
import { useNavigate } from "react-router-dom";
import DataOptSelect from "./DataOptSelect";
import { useState } from "react";
import { defaultValue, plan } from "../DummyData";
import { arrToString, phoneInfoLabel } from "../methods/transform";
import SideFlexRow from "./SideFlexRow";
import { priceCalc } from "../methods/priceCalc";
import { getPlanByPlanId } from "../api/PlanAPI";

const style = {
  boxSizing: "border-box",
  display: "flex",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1280px",
  height: "800px",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  textAlign: "center",
  verticalAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  fontFamily: "Noto Sans KR",
  p: 4,
};

export default function ComparedModal({ modalShow, setModalShow, propsList }) {
  const navigate = useNavigate();

  const [opt, setOpt] = useState([
    { product: "", name: "" },
    { product: "", name: "" },
    { product: "", name: "" },
  ]);

  const handleComparePhoneList = () => {
    propsList.setComparePhoneList([{}, {}, {}]);
  };

  const handleAllClose = () =>
    setModalShow({ ...modalShow, compare: false, comparePopup: false });

  const handleClose = () => setModalShow({ ...modalShow, compare: false });

  const getPlanData = async (id) => {
    const value = await getPlanByPlanId(id);
    return value.Plan;
  };

  const goToDetail = (row) => {
    handleComparePhoneList();
    handleAllClose();
    navigate(`/detail/${row.phoneId}`);
  };

  const handleOptChange = (e, i, optKey) => {
    const returnArr = [...opt];
    returnArr[i][optKey] = e.target.value;
    setOpt(returnArr);
  };

  const handleChange = (e, i, optKey) => {
    const returnArr = [...propsList.compareDataList];
    returnArr[i][optKey] = e.target.value;
    propsList.setCompareDataList(returnArr);
  };

  const handleFetch = async (e, i, optKey) => {
    if (optKey === "plan") {
      const returnArr = [...propsList.compareDataList];
      const value = await getPlanData(e.target.value);
      returnArr[i][optKey] = value;
      propsList.setCompareDataList(returnArr);
    }
  };

  const priceInfo = (i) => {
    const dataList = propsList.compareDataList[i];

    const phone = propsList.comparePhoneList[i];
    const plan = dataList.plan;
    const supportPrice = dataList.supportPrice;
    const discount = dataList.discount;
    const installment = dataList.installment;
    return priceCalc(phone, plan, supportPrice, discount, installment);
  };

  console.log(propsList);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalShow.compare}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 100,
        }}
      >
        <Fade in={modalShow.compare}>
          <Box sx={style}>
            <ModalStyle.Header>
              <ModalStyle.Title children="비교결과" />
              <ModalStyle.CloseBtn
                children={<CloseIcon onClick={handleClose} />}
              />
            </ModalStyle.Header>
            <ModalStyle.Body>
              <ModalStyle.Row>
                {propsList.comparePhoneList.map((row, i) => {
                  if (row.phoneId) {
                    return (
                      <Compare.ModalPhoneBox key={i}>
                        <Compare.ModalPhoneImg src={row.previewImg} />
                        <Compare.ModalPhoneText>
                          <p children={row.titleName} />
                          <h2
                            children={`월 ${priceInfo(
                              i
                            ).total.toLocaleString()}원`}
                          />
                        </Compare.ModalPhoneText>
                        <Compare.ModalPhoneFooter>
                          <LGButton
                            children="자세히보기"
                            size="sm"
                            style={{ marginRight: "10px" }}
                            onClick={() => goToDetail(row)}
                          />
                          <LGButton
                            children="장바구니"
                            size="sm"
                            variant="light"
                            onClick={() => goToDetail(row)}
                          />
                        </Compare.ModalPhoneFooter>
                      </Compare.ModalPhoneBox>
                    );
                  } else
                    return (
                      <Compare.ModalPhoneBox key={i}>
                        <DataOptSelect
                          label="제조사"
                          value={opt[i].product}
                          handleChange={(e) => handleOptChange(e, i, "product")}
                        />
                      </Compare.ModalPhoneBox>
                    );
                })}
              </ModalStyle.Row>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>월 납부금액</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ModalStyle.Row>
                    {propsList.comparePhoneList.map((row, i) => {
                      if (row.phoneId) {
                        return (
                          <div style={{ display: "block" }} key={i}>
                            <Compare.ModalPhoneDetailBox>
                              <Compare.ModalPhoneDetailHeader
                                children={
                                  <SideFlexRow
                                    left={
                                      propsList.compareDataList[i]
                                        .installment === 1
                                        ? "완납 시 가격"
                                        : "휴대폰 가격"
                                    }
                                    right={`${
                                      propsList.compareDataList[i]
                                        .installment === 1
                                        ? ""
                                        : "월"
                                    } ${priceInfo(i).phone.toLocaleString()}원`}
                                    title
                                  />
                                }
                              />
                              <SideFlexRow
                                left="출고가"
                                right={`${row.price.toLocaleString()}원`}
                              />
                              <SideFlexRow
                                left="공시지원금"
                                right={`${priceInfo(
                                  i
                                ).supportPrice.toLocaleString()}원`}
                              />
                              <SideFlexRow
                                left="15% 추가지원금"
                                right={`${priceInfo(
                                  i
                                ).extraSupportPrice.toLocaleString()}원`}
                              />
                              <SideFlexRow
                                left="할부수수료(연5.9%)"
                                right={`${priceInfo(
                                  i
                                ).installmentFee.toLocaleString()}원`}
                              />
                              <SideFlexRow
                                left="실구매가"
                                right={`${priceInfo(
                                  i
                                ).actualPrice.toLocaleString()}원`}
                              />
                            </Compare.ModalPhoneDetailBox>
                            <Compare.ModalPhoneDetailBox key={i}>
                              <Compare.ModalPhoneDetailHeader
                                children={
                                  <SideFlexRow
                                    left="통신료"
                                    right={`월 ${priceInfo(
                                      i
                                    ).plan.toLocaleString()}원`}
                                    title
                                  />
                                }
                              />
                              <SideFlexRow
                                left="월정액"
                                right={`${priceInfo(
                                  i
                                ).originalPlan.toLocaleString()}원`}
                              />
                              <SideFlexRow
                                left="선택약정할인"
                                right={`${priceInfo(
                                  i
                                ).discountPlan.toLocaleString()}원`}
                              />
                              <SideFlexRow left="7%추가요금할인" right="0원" />
                            </Compare.ModalPhoneDetailBox>
                          </div>
                        );
                      } else
                        return (
                          <Compare.ModalPhoneDetailBox
                            key={i}
                            children={"기기 미선택"}
                          />
                        );
                    })}
                  </ModalStyle.Row>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>할인유형, 요금제</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ModalStyle.Row>
                    {propsList.comparePhoneList.map((row, i) => {
                      if (row.phoneId) {
                        return (
                          <Compare.ModalPhoneDetailBox key={i}>
                            <DataOptSelect
                              label="가입유형"
                              value={propsList.compareDataList[i].registration}
                              handleChange={(e) =>
                                handleChange(e, i, "registration")
                              }
                            />
                            <DataOptSelect
                              label="할부"
                              value={propsList.compareDataList[i].installment}
                              handleChange={(e) =>
                                handleChange(e, i, "installment")
                              }
                            />
                            <DataOptSelect
                              label="할인유형"
                              value={propsList.compareDataList[i].discount}
                              handleChange={(e) =>
                                handleChange(e, i, "discount")
                              }
                              extra={propsList.compareDataList[i].plan.planType}
                            />
                            <DataOptSelect
                              label="요금제"
                              value={propsList.compareDataList[i].plan.planId}
                              handleChange={(e) => handleFetch(e, i, "plan")}
                              extra="5G"
                            />
                          </Compare.ModalPhoneDetailBox>
                        );
                      } else
                        return (
                          <Compare.ModalPhoneDetailBox
                            key={i}
                            children={"기기 미선택"}
                          />
                        );
                    })}
                  </ModalStyle.Row>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>기기 성능</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ModalStyle.Row>
                    {propsList.comparePhoneList.map((row, i) => {
                      if (row.phoneId) {
                        return (
                          <Compare.ModalPhoneDetailBox key={i}>
                            {Object.keys(defaultValue.phone.phoneInfo)
                              .sort(
                                (a, b) =>
                                  phoneInfoLabel(a).id - phoneInfoLabel(b).id
                              )
                              .filter((row) => phoneInfoLabel(row).name)
                              .map((row, i) => (
                                <Compare.Spec>
                                  <h4>{phoneInfoLabel(row).name}</h4>
                                  <p>
                                    {row === "colorList"
                                      ? arrToString(
                                          defaultValue.phone.phoneInfo[row]
                                        )
                                      : defaultValue.phone.phoneInfo[row]}
                                  </p>
                                </Compare.Spec>
                              ))}
                          </Compare.ModalPhoneDetailBox>
                        );
                      } else
                        return (
                          <Compare.ModalPhoneDetailBox
                            key={i}
                            children={"기기 미선택"}
                          />
                        );
                    })}
                  </ModalStyle.Row>
                </AccordionDetails>
              </Accordion>
            </ModalStyle.Body>
            <ModalStyle.Footer
              children={<LGButton onClick={handleClose} children="확인" />}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
