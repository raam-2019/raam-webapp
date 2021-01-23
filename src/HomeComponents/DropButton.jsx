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
        {/* add property [disabled] when on that page, maybe */}
        <DropdownItem className="Dropdown-Item" href="/Rwanda">
          Sandrine Fraissard
        </DropdownItem>
        <DropdownItem className="Dropdown-Item" href="/India">
          Dr. Amit Samarth
        </DropdownItem>
        <DropdownItem className="Dropdown-Item">Dave Haase</DropdownItem>
        <DropdownItem className="Dropdown-Item">James MacDonald</DropdownItem>
        <DropdownItem className="Dropdown-Item">Julia Cross</DropdownItem>
        <DropdownItem className="Dropdown-Item">____ Hering</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default DropButton;
