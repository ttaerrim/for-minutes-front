import React from "react";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";

import { Button, Flex } from "gestalt";
import Pdf from "./Pdf";
import "../Minute/Minute.css";

const PdfDownloader = ({
  title,
  topic,
  writer,
  parties,
  date,
  meeting_date,
  summary,
  keyword,
}) => {
  const generatePdfDocument = async () => {
    const blob = await pdf(
      <Pdf
        title={title}
        topic={topic}
        writer={writer}
        parties={parties}
        date={date}
        meeting_date={meeting_date}
        summary={summary}
        keyword={keyword}
      />
    ).toBlob();
    saveAs(blob, `회의록-${date}.pdf`);
  };
  return (
    <div>
      <Flex gap={2} justifyContent="end" wrap>
        <Button
          text="PDF 다운로드"
          color="transparent"
          onClick={generatePdfDocument}
        />
      </Flex>
    </div>
  );
};

export default PdfDownloader;
