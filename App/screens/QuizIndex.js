import React from "react";
import { ScrollView, StatusBar } from "react-native";

import vishnuLakshmiQuestions from "../data/vishnuLakshmi";
import ramayanQuestions from "../data/ramayan";
import hanumanQuestions from "../data/hanuman";
import shivaQuestions from "../data/shiva";
import generalQuestions from "../data/general"

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Vishnu and Lakshmi"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Vishnu and Lakshmi",
          questions: vishnuLakshmiQuestions,
          color: "#36b1f0"
        })
      }
    />
    <RowItem
      name="Ramayan"
      color="#799496"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Ramayan",
          questions: ramayanQuestions,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="General Questions"
      color="#799496"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "General Questions",
          questions: generalQuestions,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="Hanuman"
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Hanuman",
          questions: hanumanQuestions,
          color: "#49475B"
        })
      }

    />
    <RowItem
      name="Shiva"
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Shiva",
          questions: shivaQuestions,
          color: "#49475B"
        })
      }
    />
  </ScrollView >
);
