import { Option } from "react-dropdown";
import Select, { ActionMeta } from "react-select";
import { RowWrapper } from "../styled/Wrappers";

interface IGetChoosenTime {
  getChoosenTime(userInput: string): void;
}
export const ChooseTime = ({ getChoosenTime }: IGetChoosenTime) => {
  const options = [
    { value: "18:00", label: "18:00" },
    { value: "21:00", label: "21:00" },
  ];

  const handleChange = (
    option: Option | null,
    actionMeta: ActionMeta<Option>
  ) => {
    if (option?.value !== undefined) {
      getChoosenTime(option?.value);
    }
  };

  return (
    <>
      <RowWrapper>
        <label>Välj tid</label>
        <Select
          placeholder={"Välj tid"}
          options={options}
          onChange={handleChange}
        />
      </RowWrapper>
    </>
  );
};