import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "../css/Styles.css";

const DropButton = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown className="Dropdown" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="Dropdown-Toggle" caret>
        Events &emsp;
      </DropdownToggle>
      <DropdownMenu className="Dropdown-Menu" right>
        {/* REMOVE PROPERTY "disabled" WHEN PAGE BECOMES AVAILABLE*/}
        <DropdownItem className="Dropdown-Item" href="/Rwanda">
          Sandrine Fraissard
        </DropdownItem>
        <DropdownItem className="Dropdown-Item" href="/India" disabled>
          Dr. Amit Samarth
        </DropdownItem>
        <DropdownItem className="Dropdown-Item" href="" disabled>
          Dave Haase
        </DropdownItem>
        <DropdownItem className="Dropdown-Item" href="" disabled>
          James MacDonald
        </DropdownItem>
        <DropdownItem className="Dropdown-Item" href="" disabled>
          Julia Cross
        </DropdownItem>
        <DropdownItem className="Dropdown-Item" href="" disabled>
          Jackie Hering
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default DropButton;
