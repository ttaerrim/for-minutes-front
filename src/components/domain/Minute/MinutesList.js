import React, { useEffect, useState } from "react";

import { Table, Text, Box } from "gestalt";
import "gestalt/dist/gestalt.css";

import axios from "axios";

import Minute from "./Minute.js";
import "./Minute.css";
import { getDatabase, ref, child, get } from "firebase/database";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
const MinutesList = () => {
  const [minutes, setMinutes] = useState([]);

  const renderMinute = async () => {
    const dbRef = ref(getDatabase());
    await get(child(dbRef, `meeting`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setMinutes(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    renderMinute();
  }, []);

  return (
    <div className="bg wrapper">
      <div className="main-content">
        <Box padding={10} width="70%" margin="auto">
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  <Text weight="bold">제목</Text>
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <Text weight="bold">작성자</Text>
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <Text weight="bold">날짜</Text>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {minutes.reverse().map((minute) => {
                return (
                  <Minute
                    key={minute.id}
                    id={minute.id}
                    title={minute.title}
                    topic={minute.topic}
                    writer={minute.writer}
                    parties={minute.parties}
                    date={minute.date}
                    meeting_date={minute.meeting_date}
                    file={minute.file}
                    image={minute.photo}
                  />
                );
              })}
            </Table.Body>
          </Table>
        </Box>
      </div>
    </div>
  );
};

export default MinutesList;
