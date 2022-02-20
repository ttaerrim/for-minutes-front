import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import { Button } from "gestalt";
import "gestalt/dist/gestalt.css";
import axios from "axios";
import { useHistory } from "react-router";

import "./ScriptUpdate.css";

const ScriptUpdate = (props) => {
  const [script, setScript] = useState(props.location.state.originalScript);
  const [pk, setPk] = useState(props.location.state.pk);
  const history = useHistory();

  const handleSubmit = async () => {
    let formData = new FormData();

    formData.append("meeting", pk);
    formData.append("script", script);
    await axios
      .put(`/testapp/result/${pk}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        history.push(`/minutes`);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else if (error.message) {
          console.log(error.message);
        }
        alert("fail");
      });
  };
  return (
    <>
      <div className="script_update">
        <FloatingLabel controlId="updatingScript">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "30em" }}
            value={script}
            onChange={(event) => setScript(event.target.value)}
          />
        </FloatingLabel>

        <Button text="수정 완료" color="transparent" onClick={handleSubmit} />
      </div>
    </>
  );
};

export default ScriptUpdate;
