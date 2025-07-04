import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
// import ProjectsModal from "./ProjectsModal";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabThreeScreen() {
  const [projectsModal, setProjectsModal] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText style={styles.heading}>Professional Experience</ThemedText>

      <ThemedView style={styles.card}>
        <ThemedText style={styles.role}>Frontend Developer – GoodSoftwareDev</ThemedText>
        <ThemedText style={styles.dates}>2022 – Present</ThemedText>
        <ThemedText style={styles.paragraph}>
          Since 2022, I’ve been part of the development team at GoodSoftwareDev,
          working on the design, development, and maintenance of modern,
          scalable user interfaces using technologies such as React.js and
          Tailwind CSS.

          {"\n\n"}I’ve contributed to building interactive dashboards,
          SEO-optimized landing pages, and reusable components focused on
          performance and accessibility. I collaborate closely with UI/UX
          designers and backend developers to ensure seamless integration
          between frontend interfaces and REST APIs.

          {"\n\n"}Throughout this experience, I’ve developed strong proficiency
          with tools like Git, Figma, Notion, and Postman for continuous
          deployment.

          {"\n\n"}This role has not only enhanced my technical skill set but
          also strengthened my soft skills, such as effective communication
          within distributed teams, accurate task estimation, and the ability
          to quickly adapt to new projects and technologies in agile
          environments.

          {"\n\n"}I always strive to deliver clean, maintainable, and scalable
          code, with a strong focus on quality, performance, and client
          satisfaction.

          {"\n\n"}This role has not only enhanced my technical skills but also
          helped me grow professionally in remote work environments. I’ve
          gained significant experience working asynchronously with
          international teams, participating in code reviews, and contributing
          to shared goals across different time zones.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => setProjectsModal(true)}
          style={styles.button}
        >
          <ThemedText style={styles.buttonText}>See Last Projects</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 48,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "rgba(75, 85, 99, 0.3)", // bg-gray-600/30
    borderRadius: 16,
    padding: 16,
  },
  role: {
    fontSize: 18,
    fontWeight: "600",
  },
  dates: {
    fontStyle: "italic",
    fontSize: 14,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 16,
    marginBottom: 40,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: "#6366F1",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});