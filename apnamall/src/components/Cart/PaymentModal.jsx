import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { Step, Stepper } from "react-form-stepper";
import PaymentMethod from "./PaymentMethod";
import ShippingForm from "./ShippingForm";
import Success from "./Success";

export default function PaymentModal({total}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [step,setStep]=useState(0)
  
  return (
    <>
      <Button bgColor="#dd6b20" color="white" onClick={onOpen}>
        Place Order
      </Button>

      <Modal isOpen={isOpen} onClose={()=>{
        
        onClose()
        }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Place Your Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stepper
              styleConfig={{
                completedBgColor: "#dd6b20",
                size: "1.5em",
                activeBgColor: "yellow",
              }}
              activeStep={step}
            >
              <Step label="Shipping" />
              <Step label="Payment Method" />
              <Step label="Status" />
            </Stepper>
            {step === 0 ? (
              <ShippingForm setStep={setStep} />
            ) : step === 1 ? (
              <PaymentMethod setStep={setStep} total={total} />
            ) : (
              <Success />
            )}
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button
              onClick={() => {
                setStep((prevStep) => prevStep + 1);
              }}
              bgColor="#dd6b20"
              color='white'
            >
              Next
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
