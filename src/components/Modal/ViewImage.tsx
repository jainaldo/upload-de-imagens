import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxWidth="900px" maxHeight="600px" w="auto" h="auto">
        <ModalBody p="0">
          <Image src={imgUrl} maxWidth="900px" maxHeight="600px" />
        </ModalBody>
        <ModalFooter bgColor="pGray.800" justifyContent="flex-start">
          <Link href={imgUrl} color="pGray.50" isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
