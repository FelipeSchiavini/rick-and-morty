import React, { useState } from "react";
import { CheckboxToggle, Switch, SwitchHandle, SwitchLabel, SwitchWrapper } from "./toggle.style";

interface ToggleProps {
    text?: string;
  checked?: boolean;
  disabled?: boolean;
  changeTheme: () => void;
}
  
const Toggle: React.FC<ToggleProps> = (props) => {
  const {
    text,
    checked,
    disabled,
    changeTheme
  } = props;

  const [check, setCheck] = useState(true)
  
  const onHandleToggle = () => {
    changeTheme()
    setCheck(check ? false : true)
  }

  return (
    <>
      <SwitchWrapper onClick={onHandleToggle}>
          <CheckboxToggle
              type="checkbox"
              checked={checked}
              disabled={disabled}
          />
          <Switch>
          <SwitchHandle checked={check} />
        <SwitchLabel>{text}</SwitchLabel>
        </Switch>
        </SwitchWrapper>
    </>
  );
}

export default Toggle;