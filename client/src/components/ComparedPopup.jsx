import * as Compare from "../styles/CompareStyle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function ComparedPopup() {
  return (
    <Compare.CompareDiv>
      <Compare.CompareTitle>
        <h3>비교하기 (0)</h3>
        <KeyboardArrowDownIcon style={{ marginLeft: "auto" }} />
      </Compare.CompareTitle>
      <Compare.CompareContent />
    </Compare.CompareDiv>
  );
}
