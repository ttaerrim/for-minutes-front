import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Result from "./Result.js";
import Spinner from "components/layout/Spinner/Spinner";
import "./Detail.css";
import { Box, Flex, Button } from "gestalt";
import "gestalt/dist/gestalt.css";
import axios from "axios";
import { useHistory } from "react-router";

const Detail = (props) => {
  const { title, topic, writer, parties, date, meeting_date, file, image } =
    props.location.state;

  const date_str = new Date(date).toLocaleString("ko-KR", { timeZone: "UTC" });
  const meeting_date_str = new Date(meeting_date).toLocaleString("ko-KR", {
    timeZone: "UTC",
  });

  const history = useHistory();

  const [pk, setPk] = useState();
  const [loading, setLoading] = useState(true);
  const [summaryLoading, setSummaryLoading] = useState(true);

  useEffect(() => {
    setPk(props.match.params.id);
  }, []);

  const createResult = async () => {
    let formData = new FormData();
    formData.append("pk", pk);
    setLoading(false);
    await axios
      .post(`/testapp/result/create/${pk}`, formData)
      .then((res) => {
        setLoading(true);
        window.location.reload();
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
        alert("fail");
        setLoading(true);
      });
  };
  const createSummary = async () => {
    let formData = new FormData();
    formData.append("pk", pk);
    setSummaryLoading(false);
    await axios
      .post(`/testapp/summary/create/${pk}`, formData)
      .then((res) => {
        setSummaryLoading(true);
        window.location.reload();
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
        alert("fail");
        setSummaryLoading(true);
      });
  };

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까??") === true) {
      axios.delete(`/testapp/meeting/delete/${pk}`).then((res) => {
        history.push("/minutes");
      });
    }
  };

  return (
    <div className="bg wrapper">
      <details open>
        <summary className="summary_boxes"> 회의 정보</summary>
        <div className="container boxes3">
          <table className="table">
            <colgroup>
              <col width="35%" />
              <col width="5%" />
              <col width="45%" />
              <col width="15%" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">제목</th>
                <th scope="col"></th>
                <th scope="col">회의 안건</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{title}</td>
                <td></td>
                <td>{topic}</td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <table className="table">
            <colgroup>
              <col width="40%" />
              <col width="24%" />
              <col width="18%" />
              <col width="18%" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">참여자</th>
                <th scope="col">작성자</th>
                <th scope="col">회의 날짜</th>
                <th scope="col">게시일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{parties}</td>
                <td>{writer}</td>
                <td>{date_str}</td>
                <td>{meeting_date_str}</td>
              </tr>
            </tbody>
          </table>
          <Flex gap={2} justifyContent="end" wrap>
            <Link
              to={{
                pathname: `/minute/update/${pk}/`,
                state: {
                  title: title,
                  topic: topic,
                  writer: writer,
                  parties: parties,
                  date: date,
                  meeting_date: meeting_date,
                  file: file,
                  image: image,
                },
              }}
            >
              <Button text="수정" color="transparent" />
            </Link>
            <Button text="삭제" color="transparent" onClick={handleDelete} />
          </Flex>
        </div>
      </details>

      <div className="main-content">
        <Box
          display="flex"
          padding={10}
          marginStart={-3}
          marginEnd={-3}
          marginBottom={-3}
          marginTop={-3}
          wrap
          width="100%"
          direction="column"
          alignContent="center"
          alignSelf="center"
        >
          <Box flex="grow" paddingX={3} paddingY={3}>
            <Box
              justifyContent="center"
              marginStart={-1}
              marginEnd={-1}
              marginTop={-1}
              marginBottom={-1}
              display="flex"
              wrap
            >
              <Box marginTop={10} paddingX={3} paddingY={3}>
                {loading ? (
                  <Button
                    type="button"
                    onClick={createResult}
                    text="회의 스크립트 생성"
                    inline
                    margin={5}
                  ></Button>
                ) : (
                  <Spinner />
                )}{" "}
                {summaryLoading ? (
                  <Button
                    type="button"
                    onClick={createSummary}
                    text="요약 & 키워드 생성"
                    inline
                    margin={5}
                  ></Button>
                ) : (
                  <Spinner />
                )}
              </Box>
            </Box>
          </Box>
          <Box padding={10}>
            {/* <Result
              pk={pk}
              title={title}
              topic={topic}
              writer={writer}
              parties={parties}
              date={date}
              meeting_date={meeting_date}
            ></Result> */}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Detail;
