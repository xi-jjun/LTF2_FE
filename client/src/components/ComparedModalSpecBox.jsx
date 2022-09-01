import * as ModalStyle from "../styles/modalStyle";
import * as Compare from "../styles/compareStyle";
import { arrToString, phoneInfoLabel } from "../methods/transform";
import { defaultValue } from "../DummyData";

export default function ComparedModalSpecBox({ propsList }) {
  return (
    <ModalStyle.Row>
      {propsList.comparePhoneList.map((row, i) => {
        if (row.phoneId) {
          return (
            <Compare.ModalPhoneDetailBox key={"spec" + i}>
              {Object.keys(defaultValue.phone.phoneInfo)
                .sort((a, b) => phoneInfoLabel(a).id - phoneInfoLabel(b).id)
                .filter((row) => phoneInfoLabel(row).name)
                .map((row, i) => (
                  <Compare.Spec key={"detail" + i}>
                    <h4>{phoneInfoLabel(row).name}</h4>
                    <p>
                      {row === "colorList"
                        ? arrToString(defaultValue.phone.phoneInfo[row])
                        : defaultValue.phone.phoneInfo[row]}
                    </p>
                  </Compare.Spec>
                ))}
            </Compare.ModalPhoneDetailBox>
          );
        } else
          return (
            <Compare.ModalPhoneDetailBox
              key={"spec" + i}
              children={"기기 미선택"}
            />
          );
      })}
    </ModalStyle.Row>
  );
}
