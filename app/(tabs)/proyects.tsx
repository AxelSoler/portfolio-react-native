import { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import projects from "@/components/projects/ProjectsList";
import Project from "@/components/projects/Project";

export default function TabThreeScreen() {
  const [showProjects, setShowProjects] = useState(false);
  const [expanded, setExpanded] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText style={styles.heading}>Professional Experience</ThemedText>

      <ThemedView style={styles.card}>
        <ThemedText style={styles.role}>
          Frontend Developer – GoodSoftwareDev
        </ThemedText>
        <ThemedText style={styles.dates}>2022 – Present</ThemedText>

        <ThemedText
          style={styles.paragraph}
          numberOfLines={expanded ? undefined : 8}
        >
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
          within distributed teams, accurate task estimation, and the ability to
          quickly adapt to new projects and technologies in agile environments.
          {"\n\n"}I always strive to deliver clean, maintainable, and scalable
          code, with a strong focus on quality, performance, and client
          satisfaction.
          {"\n\n"}This role has not only enhanced my technical skills but also
          helped me grow professionally in remote work environments. I’ve gained
          significant experience working asynchronously with international
          teams, participating in code reviews, and contributing to shared goals
          across different time zones.
        </ThemedText>

        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <ThemedText style={styles.toggleText}>
            {expanded ? "Show less" : "Show more"}
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {showProjects && (
        <ThemedView style={styles.projectsList}>
          {projects.map((project) => 
          project.company === "GoodSoftwareDev" && (
            <Project
              key={project.name}
              project={project}
            />
          ))}
        </ThemedView>
      )}

      <TouchableOpacity
        onPress={() => setShowProjects((prev) => !prev)}
        style={styles.button}
      >
        <ThemedText style={styles.buttonText}>
          {showProjects ? "Hide Projects" : "See Last Projects"}
        </ThemedText>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 20
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 76,
    marginBottom: 20
  },
  card: {
    backgroundColor: "rgba(75, 85, 99, 0.3)",
    borderRadius: 16,
    padding: 16
  },
  role: {
    fontSize: 18,
    fontWeight: "600"
  },
  dates: {
    fontStyle: "italic",
    fontSize: 14,
    marginBottom: 8
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24
  },
  buttonContainer: {
    alignItems: "center",
    margin: 16,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: "#6366F1",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 }
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center"
  },
  toggleText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#4F46E5",
    textAlign: "right"
  },
  projectsList: {
    gap: 20,
    marginTop: 16,
  },
});
