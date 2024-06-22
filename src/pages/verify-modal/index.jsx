import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {auth} from "@service"
const VerifyModal = (open, toggle) => {
	const [code, setCode] = useState("")
  const handleSubmit = async(event) => {
    event.preventDefault();
		const payload = {
			code: code,
			email: localStorage.getItem("email")
		}
		try {
			const response = await auth.verify_code(payload)
			console.log(response);
		} catch (error) {
			console.log(error);
		}
  };

  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader>
        <h1 className="text-center">Enter code</h1>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit} id="submit">
          <input
            type="text"
            placeholder="Code"
            className="form-control my-2"
						onChange={(e)=>setCode(e.target.value)}
          />
        </form>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={toggle}>
          Cancel
        </button>
        <button className="btn btn-success" onSubmit={handleSubmit}>
          Save
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default VerifyModal;
