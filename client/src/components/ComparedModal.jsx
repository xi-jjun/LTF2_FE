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
import { SideFlex } from "../styles/detailInfoStyle";
import DataOptSelect from "./DataOptSelect";
import { useState } from "react";

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

  const goToDetail = (row) => {
    handleComparePhoneList();
    handleAllClose();
    navigate(`/detail/${row.id}`);
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

  const installmentArr = [
    "완납결제",
    "3개월",
    "6개월",
    "9개월",
    "10개월",
    "12개월",
    "24개월",
    "30개월",
    "36개월",
    "48개월",
  ];

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
                  if (row.id) {
                    return (
                      <Compare.ModalPhoneBox key={i}>
                        <Compare.ModalPhoneImg src={row.image_link} />
                        <Compare.ModalPhoneText>
                          <p children={row.name} />
                          <h2 children="월 120,000원" />
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
                          opt={["삼성", "애플", "기타"]}
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
                      if (row.id) {
                        return (
                          <div style={{ display: "block" }} key={i}>
                            <Compare.ModalPhoneDetailBox>
                              <Compare.ModalPhoneDetailHeader
                                children={
                                  <SideFlexRow
                                    left="휴대폰 가격"
                                    right="월 59,900원"
                                    title
                                  />
                                }
                              />
                              <SideFlexRow left="출고가" right="1,353,000원" />
                              <SideFlexRow left="공시지원금" right="0원" />
                              <SideFlexRow left="15% 추가지원금" right="0원" />
                              <SideFlexRow
                                left="할부수수료(연5.9%)"
                                right="84,720원"
                              />
                              <SideFlexRow
                                left="실구매가"
                                right="1,353,000원"
                              />
                            </Compare.ModalPhoneDetailBox>
                            <Compare.ModalPhoneDetailBox key={i}>
                              <Compare.ModalPhoneDetailHeader
                                children={
                                  <SideFlexRow
                                    left="통신료"
                                    right="월 65,000원"
                                    title
                                  />
                                }
                              />
                              <SideFlexRow left="월정액" right="65,000원" />
                              <SideFlexRow left="선택약정할인" right="0원" />
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
                      if (row.id) {
                        return (
                          <Compare.ModalPhoneDetailBox key={i}>
                            <DataOptSelect
                              label="가입유형"
                              value={propsList.compareDataList[i].registration}
                              handleChange={(e) =>
                                handleChange(e, i, "registration")
                              }
                              opt={["기기변경", "번호이동", "신규가입"]}
                            />
                            <DataOptSelect
                              label="할부"
                              value={propsList.compareDataList[i].installment}
                              handleChange={(e) =>
                                handleChange(e, i, "installment")
                              }
                              opt={installmentArr}
                            />
                            <DataOptSelect
                              label="할인유형"
                              value={propsList.compareDataList[i].discount}
                              handleChange={(e) =>
                                handleChange(e, i, "discount")
                              }
                              opt={[
                                "무약정",
                                "공시지원금",
                                "선택약정24개월",
                                "선택약정12개월",
                              ]}
                            />
                            {/* <DataOptSelect
                              label="할인유형"
                              value={propsList.compareDataList[i].plan}
                              handleChange={(e) =>
                                handleChange(e, i, "plan", "name")
                              }
                              opt={["무약정", "공시지원금", "선택약정24개월", "선택약정12개월"]}
                            /> */}
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
                      if (row.id) {
                        return (
                          <Compare.ModalPhoneDetailBox key={i}>
                            색상 보라 퍼플, 핑크 골드, 블루, 그라파이트 용량 RAM
                            12GB, ROM 256GB CPU Snapdragon 8+ Gen 1(4nm)
                            디스플레이 메인 : 7.6”(192.1 mm) QXGA+, Dynamic
                            AMOLED 2X / 커버 : 6.2“(157.3 mm) HD+, Dynamic
                            AMOLED 2X 카메라 후면 : 12MP (F2.2) , 50MP Dual
                            Pixel AF, OIS, F1.8 전면 : UDC 2.0 4MP F1.8 커버 :
                            10MP Dual Pixel F2.2 배터리 4,400 mAh 메모리 RAM
                            12GB, ROM 256GB 사이즈 접었을때 : 155.1 x 67.1 x
                            14.2 / 15.8mm , 펼쳤을때 : 155.1 x 130.1 x 6.3mm
                            무게 263g 방수 IPX8 부가설명 #최적의화면비
                            #가벼워진무게 #멀티태스킹
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

const SideFlexRow = ({ left, right, title }) => {
  return title ? (
    <SideFlex>
      <h3
        className="left"
        style={{ width: "35%", color: "#000000" }}
        children={left}
      />
      <h2
        className="right"
        style={{ width: "65%", color: "#000000" }}
        children={right}
      />
    </SideFlex>
  ) : (
    <SideFlex>
      <p className="left" style={{ color: "#000000" }} children={left} />
      <p className="right" style={{ color: "#000000" }} children={right} />
    </SideFlex>
  );
};
