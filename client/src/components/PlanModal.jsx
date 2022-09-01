/* eslint-disable react-hooks/exhaustive-deps */
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import * as ModalStyle from "../styles/modalStyle";
import * as PlanStyle from "../styles/planStyle";
import * as OptionData from "../assets/filterOptions";
import CloseIcon from "@mui/icons-material/Close";
import { LGButton } from "./Button";
import { useEffect, useState } from "react";

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
  border: "none",
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

export default function PlanModal({
  modalShow,
  setModalShow,
  nowPlanId,
  handleFilterOpt,
  setDefaultValue,
  plans,
}) {
  const [active, setActive] = useState(-1);

  const setRadio = (id) => setActive(id);

  const handleClose = () => {
    setModalShow({ ...modalShow, plan: false });
  };

  const handleChange = (key, value) => {
    const { name } = plans.filter((p) => p.planId === value)[0];
    OptionData.default["5G"].요금제.values[name] = value;
    setDefaultValue(name);
    handleFilterOpt(key, value);
    setModalShow({ ...modalShow, plan: false });
  };

  useEffect(() => {
    if (modalShow.plan) {
      setActive(nowPlanId);
    }
  }, [modalShow.plan]);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalShow.plan}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 100,
        }}
      >
        <Fade in={modalShow.plan}>
          <Box sx={style}>
            <ModalStyle.Header>
              <ModalStyle.Title children="더 많은 요금제 보기" />
              <ModalStyle.CloseBtn
                children={<CloseIcon onClick={handleClose} />}
              />
            </ModalStyle.Header>
            <PlanStyle.Container>
              <PlanStyle.PlanBar>
                <PlanStyle.PlanBarItem
                  style={{ width: "525px" }}
                  children={<p children="요금제" />}
                />
                <PlanStyle.PlanBarItem
                  style={{ width: "135px" }}
                  children={<p children="데이터" />}
                />
                <PlanStyle.PlanBarItem
                  style={{ width: "135px" }}
                  children={<p children="나눠쓰기" />}
                />
                <PlanStyle.PlanBarItem
                  style={{ width: "135px" }}
                  children={<p children="음성통화" />}
                />
                <PlanStyle.PlanBarItem
                  style={{ width: "135px" }}
                  children={<p children="메세지" />}
                />
              </PlanStyle.PlanBar>
              <PlanStyle.BoxContainer>
                {plans.map((row) => (
                  <PlanStyle.PlanBox key={row.planId}>
                    <PlanStyle.PlanCol>
                      <PlanStyle.PlanRadio
                        now={active === row.planId}
                        onClick={() => setRadio(row.planId)}
                      />
                      <PlanStyle.Title children={row.name + " >"} />
                      <PlanStyle.Price
                        children={
                          "월 " + row.monthPrice.toLocaleString() + "원"
                        }
                      />
                    </PlanStyle.PlanCol>
                    <PlanStyle.PlanCol>
                      <PlanStyle.SpecRow>
                        <PlanStyle.SpecCol
                          children={<h2 children={row.data} />}
                        />
                        <PlanStyle.SpecCol
                          children={
                            <h2 children={row.shareData || "사용가능"} />
                          }
                        />
                        <PlanStyle.SpecCol
                          children={<h2 children={row.voice} />}
                        />
                        <PlanStyle.SpecCol
                          children={<h1 children={row.message} />}
                        />
                      </PlanStyle.SpecRow>
                      <PlanStyle.SpecRow></PlanStyle.SpecRow>
                    </PlanStyle.PlanCol>
                  </PlanStyle.PlanBox>
                ))}
              </PlanStyle.BoxContainer>
            </PlanStyle.Container>
            <ModalStyle.Footer>
              <LGButton
                style={{ marginRight: 5 }}
                onClick={handleClose}
                variant="light"
                children="취소"
              />
              <LGButton
                style={{ marginLeft: 5 }}
                onClick={() => handleChange("planId", active)}
                children="적용"
                disabled={nowPlanId === -1}
              />
            </ModalStyle.Footer>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
