import CompH2 from "./ui/CompH2";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import SubHeader from "./ui/SubHeader";

const FormRadioGroup = ({
  title,
  options,
  descr,
  setEsmerilConfigs,
  specified,
}) => {
  const handleChange = (e) => {
    const { value } = e.target;
    setEsmerilConfigs((prevConfigs) => {
      const newConfigs = {
        ...prevConfigs,
        [title]: value,
      };
      return newConfigs;
    });
  };

  return (
    <div className="my-10">
      <div className="mb-4">
        <CompH2> {title} </CompH2>
        {descr && <SubHeader> {descr} </SubHeader>}
      </div>
      <RadioGroup className="flex items-center gap-6">
        {options.map(({ name, value }) => {
          return (
            <div key={name} className="flex items-center space-x-2">
              <div>
                <RadioGroupItem
                  required={true}
                  disabled={specified}
                  value={value}
                  id={name}
                  onClick={handleChange}
                />
                <Label htmlFor={name} className="cursor-pointer">
                  {" "}
                  {name}{" "}
                </Label>
              </div>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default FormRadioGroup;
