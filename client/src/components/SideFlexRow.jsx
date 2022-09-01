import { SideFlex } from "../styles/detailInfoStyle";

export default function SideFlexRow({ left, right, title }) {
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
}
