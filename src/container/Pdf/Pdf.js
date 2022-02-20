import React, { useState, useEffect } from "react";
import {
  Document,
  Font,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

import List, { Item } from "./List";

const Pdf = ({
  id,
  title,
  topic,
  writer,
  parties,
  date,
  meeting_date,
  summary,
  keyword,
}) => {
  const summaryRendering = () => {
    const result = [];
    for (let i = 0; i < summary.length; i++) {
      result.push(
        <Item style={styles.detailContainer} key={i}>
          {summary[i]}
        </Item>
      );
    }
    return result;
  };

  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.title}>{`회의록-${title}`}</Text>
        </View>
        <View style={styles.subsection}>
          <Text style={styles.infoText}>회의 안건: {topic}</Text>
          <Text style={styles.infoText}>회의 날짜: {meeting_date}</Text>
          <Text style={styles.infoText}>작성자: {writer}</Text>
          <Text style={styles.infoText}>참석자: {parties}</Text>
          <Text style={styles.infoText}>작성일: {date}</Text>
        </View>
        <View style={styles.subsection}>
          <View>
            <Text style={styles.stitle}>회의 요약</Text>
          </View>
          <List>
            <Item style={styles.innerKeyword}>{summary}</Item>
          </List>
        </View>
        <View style={styles.subsection}>
          <View>
            <Text style={styles.stitle}>회의 키워드</Text>
          </View>
          <View style={styles.keywordSection}>
            <Text style={styles.innerKeyword}>{keyword}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

Font.register({
  family: "Nanum Gothic",
  src: "https://fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Regular.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: "Nanum Gothic",
  },
  section: {
    margin: 0,
    padding: 0,
  },
  subsection: {
    margin: 5,
    padding: 5,
    fontSize: 16,
    lineHeight: "1.5pt",
  },
  keywordSection: {
    flexDirection: "row",
  },
  stitle: {
    marginBottom: 2,
  },
  inner: {
    textIndent: 20,
  },
  innerKeyword: {
    textIndent: 20,
    fontSize: 14,
  },

  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontsize: 16,
  },
  detailContainer: {
    flexDirection: "row",
    fontSize: 14,
  },
});

export default Pdf;
