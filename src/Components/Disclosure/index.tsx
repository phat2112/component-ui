import React from "react";
import useDisclosure from "../hooks/useDisclosure";

const Disclosure = () => {
  const { isOpen, onClose, onOpen } = useDisclosure({});
  return (
    <div>
      <h1>Disclosure Example</h1>

      <button onClick={onOpen}>Show modal</button>
      <button onClick={onClose}>Close modal</button>

      {isOpen && <h1>modal displayed</h1>}
    </div>
  );
};

export default Disclosure;
