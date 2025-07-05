import { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  StyleSheet,
  ScrollView
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Octicons } from "@expo/vector-icons";

type FormValues = {
  username: string;
  userEmail: string;
  message: string;
};

type FormErrors = Partial<FormValues>;

export default function TabTwoScreen() {
  const [formValues, setFormValues] = useState<FormValues>({
    username: "",
    userEmail: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (name: keyof FormValues, value: string) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!formValues.username.trim()) {
      newErrors.username = "Name is required";
    } else if (formValues.username.length < 2) {
      newErrors.username = "Name must be at least 2 characters";
    }

    if (!formValues.userEmail.trim()) {
      newErrors.userEmail = "Email is required";
    } else if (!emailRegex.test(formValues.userEmail)) {
      newErrors.userEmail = "Invalid email format";
    }

    if (!formValues.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formValues.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setStatus("loading");

    const formData = new FormData();
    formData.append("username", formValues.username);
    formData.append("userEmail", formValues.userEmail);
    formData.append("message", formValues.message);

    try {
      const response = await fetch(
        "https://formspree.io/p/2047778179661168386/f/contactForm",
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" }
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormValues({ username: "", userEmail: "", message: "" });
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText style={styles.title}>Let’s chat!</ThemedText>
      <ThemedText style={styles.subtitle}>
        Looking for a developer? Send me a message!
      </ThemedText>

      <TextInput
        placeholder="Name"
        value={formValues.username}
        onChangeText={(value) => handleChange("username", value)}
        style={styles.input}
        placeholderTextColor="#888"
      />
      {errors.username && (
        <ThemedText style={styles.error}>{errors.username}</ThemedText>
      )}

      <TextInput
        placeholder="Email"
        value={formValues.userEmail}
        onChangeText={(value) => handleChange("userEmail", value)}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
        placeholderTextColor="#888"
      />
      {errors.userEmail && (
        <ThemedText style={styles.error}>{errors.userEmail}</ThemedText>
      )}

      <TextInput
        placeholder="Enter your message"
        value={formValues.message}
        onChangeText={(value) => handleChange("message", value)}
        style={[styles.input, styles.textarea]}
        multiline
        numberOfLines={4}
        placeholderTextColor="#888"
      />
      {errors.message && (
        <ThemedText style={styles.error}>{errors.message}</ThemedText>
      )}

      {status === "success" && (
        <ThemedText style={styles.success}>
          Message sent successfully!
        </ThemedText>
      )}
      {status === "error" && (
        <ThemedText style={styles.error}>
          Something went wrong. Try again.
        </ThemedText>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <ThemedText style={styles.buttonText}>Send Message</ThemedText>
        )}
      </TouchableOpacity>

      <ThemedText style={styles.powered}>
        Powered by{" "}
        <ThemedText
          style={styles.link}
          onPress={() => Linking.openURL("https://formspree.io/")}
        >
          Formspree <Octicons name="link-external" size={20} color="white" />
        </ThemedText>
      </ThemedText>

      <ThemedText style={styles.emailNote}>
        Or send me an email to{" "}
        <ThemedText
          style={styles.emailLink}
          onPress={() => Linking.openURL("mailto:axelss369@gmail.com")}
        >
          axelss369@gmail.com
        </ThemedText>
      </ThemedText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 10
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center"
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    color: "#fff"
  },
  textarea: {
    height: 100,
    textAlignVertical: "top"
  },
  button: {
    backgroundColor: "#16a34a",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 999,
    marginTop: 10
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600"
  },
  error: {
    color: "#dc2626",
    alignSelf: "flex-start",
    marginBottom: 4
  },
  success: {
    color: "#16a34a",
    fontWeight: "bold",
    marginVertical: 10
  },
  powered: {
    marginTop: 20,
    textAlign: "center"
  },
  link: {
    color: "#ff2441",
    textDecorationLine: "underline"
  },
  emailNote: {
    marginTop: 10,
    textAlign: "center"
  },
  emailLink: {
    color: "#2563eb",
    textDecorationLine: "underline"
  }
});
