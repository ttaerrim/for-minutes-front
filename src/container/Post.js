import React, { useState,useEffect } from "react";

import Aos from "aos"; 
import "aos/dist/aos.css";
import "./Main.css";
import { Box, TextField, Button, SelectList, Text } from "gestalt";
import "gestalt/dist/gestalt.css";
import DatePicker from "gestalt-datepicker";
import { ko } from "date-fns/locale";
import "gestalt-datepicker/dist/gestalt-datepicker.css";

import axios from "axios";

import { useHistory } from "react-router";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const Post = () => {
  const [topic, setTopic] = useState();
  const [title, setTitle] = useState();
  const [writer, setWriter] = useState("");
  const [parties, setParties] = useState("");
  const [meeting_date, setMeetingDate] = useState(undefined);
  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [date, setDate] = useState(new Date());
  const history = useHistory();

  const createTime = () => {
    const meeting_time = [];
    for (let i = 0; i < 24; i++) {
      const name = new Object();
      i = String("0" + i).slice(-2);
      name.label = i;
      name.value = i;
      meeting_time.push(name);
    }
    return meeting_time;
  };
  const createMinute = () => {
    const meeting_minute = [];
    for (let i = 0; i < 60; i++) {
      const name = new Object();
      i = String("0" + i).slice(-2);
      name.label = i;
      name.value = i;
      meeting_minute.push(name);
    }
    return meeting_minute;
  };

  const renderDate = (hour, minute) => {
    let new_date = document.getElementById("meeting_date").value;
    new_date = new_date.split(".").join("-");
    new_date += "T" + hour + ":" + minute + ":00+09:00";

    return new_date;
  };

  const handleSubmit = async () => {
    let formData = new FormData();

    formData.append("title", title);
    formData.append("topic", topic);
    formData.append("writer", writer);
    formData.append("parties", parties);
    formData.append("meeting_date", renderDate(hour, minute));
    formData.append("photo", image);
    formData.append("file", file);
    await axios
      .post("/testapp/meeting/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        history.push("/minutes");
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

  const fileHandler = (event) => {
    const audio = event.target.files[0];
    setFile(audio);
  };

  const imageHandler = (event) => {
    const img = event.target.files[0];
    setImage(img);
  };


  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);

  return (
    <React.Fragment>
      <div className="grids">
        <div className="boxes1">
      <Box
        display="flex"
        marginStart={-3}
        marginEnd={-3}
        marginBottom={-3}
        marginTop={-3}
        wrap
        width="100%"
        direction="column"
        padding={10}
      >
        <Box flex="grow" paddingX={3} paddingY={3}>
          <TextField
            id="title"
            onChange={({ event }) => setTitle(event.target.value)}
            placeholder="글 제목"
            label="제목"
            value={title}
            type="text"
          />
        </Box>
        <Box flex="grow" paddingX={3} paddingY={3}>
          <TextField
            id="topic"
            onChange={({ event }) => setTopic(event.target.value)}
            placeholder="회의 안건"
            label="회의 안건"
            value={topic}
          />
        </Box>
        <Box flex="grow" paddingX={3} paddingY={3}>
          <TextField
            id="writer"
            onChange={({ event }) => setWriter(event.target.value)}
            placeholder="작성자"
            label="작성자"
            value={writer}
          />
        </Box>
        <Box flex="grow" paddingX={3} paddingY={3}>
          <TextField
            id="parties"
            onChange={({ event }) => setParties(event.target.value)}
            placeholder="회의 참여자"
            label="참여자"
            value={parties}
          />
        </Box>

        <Box flex="grow" paddingX={3} paddingY={3}>
          <Box
            display="flex"
            wrap
            marginStart={-3}
            marginEnd={-3}
            marginBottom={-3}
            marginTop={-3}
            label="회의시간"
          >
            <Box flex="grow" paddingX={3} paddingY={3}>
              <DatePicker
                localeData={ko}
                id="meeting_date"
                label="회의 날짜"
                onChange={({ event, value }) => setMeetingDate(value)}
                value={date}
              />
            </Box>
            <Box flex="grow" paddingX={3} paddingY={3}>
              <SelectList
                id="meeting_time"
                onChange={({ event }) => setHour(event.target.value)}
                options={createTime()}
                size="md"
                label="시"
                value={hour}
              />
            </Box>
            <Box flex="grow" paddingX={3} paddingY={3}>
              <SelectList
                id="meeting_minute"
                onChange={({ event }) => {
                  setMinute(event.target.value);
                }}
                options={createMinute()}
                size="md"
                label="분"
                value={minute}
              />
            </Box>
          </Box>
          <Text align="left" size="sm">
            음성 파일
          </Text>
          <Box flex="grow" paddingX={3} paddingY={3}>
            <input
              type="file"
              id="file"
              accept="audio/*"
              onChange={fileHandler}
            />
          </Box>
          <Text align="left" size="sm">
            이미지 파일
          </Text>
          <Box flex="grow" paddingX={3} paddingY={3}>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={imageHandler}
            />
          </Box>
          <Box flex="grow" paddingX={3} paddingY={3}></Box>
        </Box>
        <Box flex="grow" paddingX={3} paddingY={3}>
          <Box
            justifyContent="end"
            marginStart={-1}
            marginEnd={-1}
            marginTop={-1}
            marginBottom={-1}
            display="flex"
            wrap
          >
            <Box paddingX={1} paddingY={1}>
              <Button
                text="등록"
                color="black"
                size="lg"
                type="submit"
                onClick={handleSubmit}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      </div>
      </div>
    </React.Fragment>
  );
};

export default Post;