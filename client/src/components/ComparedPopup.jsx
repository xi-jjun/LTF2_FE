/* eslint-disable react-hooks/exhaustive-deps */
import * as Compare from "../styles/compareStyle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
import { LGButton } from "./Button";

export default function ComparedPopup({
  modalShow,
  setModalShow,
  comparePhoneList,
  setComparePhoneList,
}) {
  useEffect(() => {
    if (
      comparePhoneList.filter((row) => row.id).length === 0 &&
      modalShow.comparePopup
    ) {
      setModalShow({ ...modalShow, comparePopup: false });
    } else if (
      comparePhoneList.filter((row) => row.id).length !== 0 &&
      !modalShow.comparePopup
    ) {
      setModalShow({ ...modalShow, comparePopup: true });
    }
  }, [comparePhoneList]);

  const togglePopup = () =>
    setModalShow({ ...modalShow, comparePopup: !modalShow.comparePopup });

  const toggle = () => {
    switch (true) {
      case !modalShow.comparePopup &&
        comparePhoneList.filter((row) => row.id).length !== 0: {
        return "remain";
      }
      case !modalShow.comparePopup &&
        comparePhoneList.filter((row) => row.id).length === 0: {
        return "none";
      }
      default:
        return "show";
    }
  };

  const openModal = () => {
    if (comparePhoneList.filter((row) => row.id).length) {
      setModalShow({ ...modalShow, compare: true });
    }
  };

  const deleteOne = (idx) => {
    const returnArray = [...comparePhoneList];
    returnArray.splice(idx, 1);
    returnArray.push({});
    setComparePhoneList(returnArray);
  };

  const deleteAll = () => {
    setComparePhoneList([{}, {}, {}]);
  };

  return (
    <div>
      <Compare.PopUp show={toggle()} active={!modalShow.comparePopup}>
        <Compare.PopUpTitle>
          <h3>비교하기 ({comparePhoneList.filter((row) => row.id).length})</h3>

          <Compare.PopUpCloseBtn
            children={
              modalShow.comparePopup ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )
            }
            onClick={togglePopup}
          />
        </Compare.PopUpTitle>
        <Compare.PopUpContent show={modalShow.comparePopup}>
          {comparePhoneList.map((row, i) => {
            if (row.id) {
              return (
                <Compare.PopUpPhone key={i}>
                  <Compare.PopUpPhoneImg src={row.image_link} />
                  <Compare.PopUpPhoneInfo>
                    <p>{row.name}</p>
                    <h2>130,260원</h2>
                  </Compare.PopUpPhoneInfo>
                  <Compare.PopUpDeleteBtn
                    children={<CloseIcon />}
                    onClick={() => deleteOne(i)}
                  />
                </Compare.PopUpPhone>
              );
            } else
              return (
                <Compare.PopUpPhone key={i}>기기 미선택</Compare.PopUpPhone>
              );
          })}
          <Compare.PopUpBtnGroup>
            <LGButton children="비교하기" onClick={openModal} />
            <LGButton
              variant="outline-dark"
              children="전체삭제"
              onClick={deleteAll}
            />
          </Compare.PopUpBtnGroup>
        </Compare.PopUpContent>
      </Compare.PopUp>
    </div>
  );
}
