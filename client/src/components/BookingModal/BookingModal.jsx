import UserDetailContext from "../../context/UseDatailContext";
import { bookVisit } from "../../utils/api.js";
import { Modal, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useMutation } from "react-query";
import { useState } from "react";
import { useContext } from "react";

const BookingModal = ({ opened, setOpened, email, propertyId }) => {
  const [value, setValue] = useState(null);
  const {
    userDetails: { token },
  } = useContext(UserDetailContext);

  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookVisit(value, propertyId, email, token),
  });

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Select your date of visit"
      centered
    >
      <div className="flexColCenter" style={{ gap: "1rem" }}>
        <DatePicker value={value} onChange={setValue} minDate={new Date()} />
        <Button disabled={!value || isLoading} onClick={() => mutate()}>
          Book visit
        </Button>
      </div>
    </Modal>
  );
};

export default BookingModal;
