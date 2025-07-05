import { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import projects from "@/components/projects/ProjectsList";
import Project from "@/components/projects/Project";

export default function TabThreeScreen() {
  const [showProjects, setShowProjects] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState(false);
  const [expandedEducation, setExpandedEducation] = useState(false);
  const [expandedEngineering, setExpandedEngineering] = useState(false);

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
          numberOfLines={expandedExperience ? undefined : 8}
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

        <TouchableOpacity
          onPress={() => setExpandedExperience(!expandedExperience)}
        >
          <ThemedText style={styles.toggleText}>
            {expandedExperience ? "Show less" : "Show more"}
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {showProjects && (
        <ThemedView style={styles.projectsList}>
          {projects.map(
            (project) =>
              project.company === "GoodSoftwareDev" && (
                <Project key={project.name} project={project} />
              )
          )}
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

      <ThemedText style={styles.heading}>Education</ThemedText>

      <ThemedView style={styles.card}>
        <ThemedText style={styles.role}>
          Full Stack Developer – Microverse
        </ThemedText>
        <ThemedText style={styles.dates}>Mar 2022 – Dec 2022</ThemedText>

        <ThemedText
          style={styles.paragraph}
          numberOfLines={expandedEducation ? undefined : 8}
        >
          In 2022, I joined Microverse, an intensive, full-time remote software
          development program where I dedicated over 1300 hours to mastering
          full-stack web development. The curriculum focused heavily on
          JavaScript, React, Redux, and Ruby on Rails, with a strong emphasis on
          algorithms, data structures, and building scalable applications
          through project-based learning.
          {"\n\n"}Through daily remote pair programming sessions and weekly team
          projects, I gained hands-on experience collaborating with developers
          from all over the world, simulating real-world agile environments. I
          practiced industry-standard Git workflows, conducted code reviews, and
          participated in daily stand-ups to ensure transparent, async
          communication.
          {"\n\n"}Beyond technical development, I also mentored junior
          developers, supporting them in understanding React best practices,
          testing methodologies, and debugging strategies. This experience
          deepened my leadership and communication skills, while reinforcing my
          commitment to writing clean, maintainable, and scalable code.
          {"\n\n"}Microverse prepared me not only as a developer but as a remote
          professional—ready to thrive in globally distributed teams and
          continuously adapt to new challenges in fast-paced environments.
        </ThemedText>

        <TouchableOpacity
          onPress={() => setExpandedEducation(!expandedEducation)}
        >
          <ThemedText style={styles.toggleText}>
            {expandedEducation ? "Show less" : "Show more"}
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText style={styles.role}>
          Electromechanical Engineering Student – UNMDP
        </ThemedText>
        <ThemedText style={styles.dates}>2019 – 2021 (Incomplete)</ThemedText>

        <ThemedText
          style={styles.paragraph}
          numberOfLines={expandedEngineering ? undefined : 8}
        >
          Before transitioning into software development, I studied
          Electromechanical Engineering at the National Technological University
          (UTN) in Argentina. During those two years, I developed a strong
          foundation in logic, mathematics, and problem-solving—skills that
          later proved essential in programming.
          {"\n\n"}Through coursework in physics, calculus, and technical
          drawing, I cultivated a methodical and analytical approach to complex
          problems. My interest in technology and automation led me to explore
          programming independently, where I discovered my passion for building
          software.
          {"\n\n"}In 2021, I made the decision to fully pivot into tech. I began
          learning web development on my own and later joined Microverse to
          deepen my skills and pursue a career in software engineering.
          {"\n\n"}This academic background continues to influence my approach as
          a developer, especially when it comes to systems thinking, precision,
          and continuous learning.
        </ThemedText>

        <TouchableOpacity
          onPress={() => setExpandedEngineering(!expandedEngineering)}
        >
          <ThemedText style={styles.toggleText}>
            {expandedEngineering ? "Show less" : "Show more"}
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
    gap: 20
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 12,
    marginBottom: 20,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#fff"
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
    margin: 16
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: "#16a34a",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20,
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
    marginTop: 16
  }
});
