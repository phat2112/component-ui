import { useState } from "react";

interface Props {
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export default function useDisclosure({
  isOpen: defaultIsOpen = false,
  onOpen = () => {},
  onClose = () => {},
}: Props) {
  const [isOpen, setOpen] = useState(defaultIsOpen);

  return {
    isOpen,
    onOpen: () => {
      onOpen();
      setOpen(true);
    },
    onClose: () => {
      onClose();
      setOpen(false);
    },
  };
}
