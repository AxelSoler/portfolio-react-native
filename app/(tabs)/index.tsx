import { ScrollView, StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
// import Navbar from "@/components/navbar";
import About from "@/components/about";
// import Projects from "@/components/projects";
// import ContactForm from "@/components/contact";

export default function HomeScreen() {
  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        {/* <Navbar /> */}
        <About />
        {/* <Projects /> */}
        {/* <ContactForm /> */}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 8,
    paddingTop: 48,
  }
});
