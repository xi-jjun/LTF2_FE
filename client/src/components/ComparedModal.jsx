import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import * as ModalStyle from "../styles/modalStyle";
import * as Compare from "../styles/compareStyle";
import CloseIcon from "@mui/icons-material/Close";
import { LGButton } from "./Button";
import { useNavigate } from "react-router-dom";

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
  FontFamily: "Noto Sans KR",
  textAlign: "center",
  verticalAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  p: 4,
};

export default function ComparedModal({
  modalShow,
  setModalShow,
  comparePhoneList,
  setComparePhoneList,
  comparePlanList,
  setPlanPhoneList,
}) {
  const navigate = useNavigate();

  const handleComparePhoneList = () => {
    setComparePhoneList([{}, {}, {}]);
  };

  const handleAllClose = () =>
    setModalShow({ ...modalShow, compare: false, comparePopup: false });

  const handleClose = () => setModalShow({ ...modalShow, compare: false });

  const goToDetail = (row) => {
    handleComparePhoneList();
    handleAllClose();
    navigate(`/detail/${row.id}`);
  };

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
                {comparePhoneList.map((row, i) => {
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
                      <Compare.ModalPhoneBox key={i} children={"기기 미선택"} />
                    );
                })}
              </ModalStyle.Row>
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
