import { useRef, useEffect } from "react";
import styles from "./StaffFlightCustomerModal.module.css";

const StaffFlightCustomerModal = (props) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        props.modalHandler();
      }
    };
    document.addEventListener("mousedown", clickOutsideHandler);
    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
    };
  }, [modalRef]);

  return (
    <div className={styles.modal} ref={modalRef}>
      <h2>Passengers</h2>
      <div>
        <p>Jia Huang</p>
        <p>jzh9076@nyu.edu</p>
      </div>
      <div>
        <p>Shenyi Huang</p>
        <p>sh6210@nyu.edu</p>
      </div>
      <div>
        <p>Isha Jagani</p>
        <p>imj2430@nyu.edu</p>
      </div>

      <button onClick={props.modalHandler}>Ok</button>
    </div>
  );
};

export default StaffFlightCustomerModal;