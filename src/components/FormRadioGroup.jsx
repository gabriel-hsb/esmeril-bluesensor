import { useState, useEffect } from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import CompH2 from "./ui/CompH2";
import SubHeader from "./ui/SubHeader";

const FormRadioGroup = ({
  title,
  options,
  descr,
  setChosenEsmerilConfigs,
  specificationDone,
  isLoading,
}) => {
  const [disableInputs, setDisableInputs] = useState(false);

  const handleRadioInputChange = ({ target }) => {
    const { value } = target;

    setChosenEsmerilConfigs((prevChosenEsmerilConfigs) => {
      const newConfigs = {
        ...prevChosenEsmerilConfigs,
        [title]: value,
      };
      return newConfigs;
    });
  };

  useEffect(() => {
    if (isLoading || specificationDone) {
      setDisableInputs(true);
    } else {
      setDisableInputs(false);
    }
  }, [isLoading, specificationDone]);

  return (
    <div className="my-8  sm:my-10">
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
                  disabled={disableInputs}
                  value={value}
                  id={name}
                  onClick={handleRadioInputChange}
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
