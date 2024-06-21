import CompH2 from "./ui/CompH2";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import SubHeader from "./ui/SubHeader";

const FormRadioGroup = ({
  title,
  options,
  descr,
  setEsmerilCongigs,
  specified,
}) => {
  const handleClick = ({ target }) => {
    setEsmerilCongigs((prev) => [...prev, target.value]);
  };

  console.log(options);

  return (
    <div className="my-10">
      <div className="mb-4">
        <CompH2> {title} </CompH2>
        {descr && <SubHeader> {descr} </SubHeader>}
      </div>
      <RadioGroup className="flex items-center gap-6">
        {options.map(({ name, value }, idx) => {
          return (
            <div key={idx} className="flex items-center space-x-2">
              <RadioGroupItem
                disabled={specified}
                onClick={handleClick}
                value={value}
                id={name}
              />
              <Label htmlFor={name}> {name} </Label>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default FormRadioGroup;
