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
import sortPlanList from "../util/sortPlanList";
import RangeSlider from "./RangeSlider";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import PlanBox from "./PlanBox";

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

  const [planList, setPlanList] = useState([]);
  const [filter, setFilter] = useState({
    data: [0, 200],
    monthPrice: [0, 150000],
  });

  const [sortBy, setSortBy] = useState("");

  const setRadio = (id) => setActive(id);

  const handleClose = () => {
    setModalShow({ ...modalShow, plan: false });
  };

  const handleChange = (key, value) => {
    const { name } = plans.filter((p) => p.planId === value)[0];
    OptionData.default["5G"].요금제.values[name] = value;
    setDefaultValue !== undefined && setDefaultValue(name);
    handleFilterOpt(key, value);
    setModalShow({ ...modalShow, plan: false });
  };

  const filterArr = (arr) => {
    return arr.filter(
      (row) =>
        ((row.data === "무제한" && filter.data[1] === 200) ||
          (row.data !== "무제한" &&
            Number(row.data.replace(/[^0-9.]/g, "")) >= filter.data[0] &&
            Number(row.data.replace(/[^0-9.]/g, "")) <= filter.data[1])) &&
        row.monthPrice >= filter.monthPrice[0] &&
        row.monthPrice <= filter.monthPrice[1]
    );
  };

  useEffect(() => {
    sortPlanList("", plans, setPlanList);
  }, [plans]);

  useEffect(() => {
    sortPlanList(sortBy, plans, setPlanList);
  }, [sortBy]);

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
              <PlanStyle.PlanBar style={{ height: "30px", border: "none" }}>
                <PlanStyle.PlanBarItem
                  style={{ width: "350px" }}
                  children={<p children="요금제 정렬" />}
                />
                <PlanStyle.PlanBarItem
                  style={{ width: "350px" }}
                  children={<p children="데이터" />}
                />
                <PlanStyle.PlanBarItem
                  style={{ width: "350px" }}
                  children={<p children="가격" />}
                />
              </PlanStyle.PlanBar>
              <PlanStyle.PlanBar style={{ height: "50px" }}>
                <PlanStyle.PlanBarItem
                  style={{ width: "350px" }}
                  children={
                    <FormControl
                      variant="standard"
                      sx={{ minWidth: 350, height: 50 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        정렬
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        label="정렬"
                      >
                        <MenuItem value="dataAsc">데이터양 낮은 순</MenuItem>
                        <MenuItem value="dataDesc">데이터양 높은 순</MenuItem>
                        <MenuItem value="priceAsc">요금 낮은 순</MenuItem>
                        <MenuItem value="priceDesc">요금 높은 순</MenuItem>
                      </Select>
                    </FormControl>
                  }
                />
                <PlanStyle.PlanBarItem
                  style={{ width: "350px" }}
                  children={
                    <RangeSlider
                      state={filter}
                      setState={setFilter}
                      optKey="data"
                    />
                  }
                />
                <PlanStyle.PlanBarItem
                  style={{ width: "350px" }}
                  children={
                    <RangeSlider
                      state={filter}
                      setState={setFilter}
                      optKey="monthPrice"
                    />
                  }
                />
              </PlanStyle.PlanBar>
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
                  style={{ width: "150px" }}
                  children={<p children="메세지" />}
                />
              </PlanStyle.PlanBar>
              <PlanStyle.BoxContainer>
                {filterArr(planList).map((row) => (
                  <PlanBox
                    key={row.planId}
                    row={row}
                    active={active}
                    setRadio={setRadio}
                  />
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
