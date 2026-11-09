import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const hostels = [
  { name: "Emerald", path: "/pages/Emerald", subtitle: "Quiet, secure, and welcoming." },
  { name: "Bethel Splendor", path: "/pages/Bethel_Splendor", subtitle: "Comfortable rooms with a lively atmosphere." },
  { name: "Gideon Troopers", path: "/pages/Gideon_troopers", subtitle: "A lively social hall for students." },
  { name: "Neal Wilson", path: "/pages/Neal_wilson", subtitle: "Convenient and student-friendly." },
  { name: "Nelson Mandela", path: "/pages/Nelson_mandela", subtitle: "Community-driven and welcoming." },
  { name: "Samuel Akande", path: "/pages/Samuel_akande", subtitle: "Peaceful and well organized." },
  { name: "Welch", path: "/pages/Welch", subtitle: "A calm, dependable residential option." },
  { name: "Topaz", path: "/pages/Topaz", subtitle: "Stylish, comfortable, and vibrant." },
  { name: "Winslow", path: "/pages/Winslow", subtitle: "A practical, friendly place to stay." },
];

export default function ExploreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Explore Hostels</Text>
      <Text style={styles.subtitle}>Find the residence hall that suits your lifestyle.</Text>

      <View style={styles.list}>
        {hostels.map((hostel) => (
          <Link key={hostel.name} href={hostel.path} style={styles.card}>
            <Text style={styles.cardTitle}>{hostel.name}</Text>
            <Text style={styles.cardText}>{hostel.subtitle}</Text>
          </Link>
        ))}
      </View>

      <Link href="/" style={styles.link}>Back to home</Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f8fafc",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#475569",
    marginBottom: 18,
  },
  list: {
    gap: 12,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#dbeafe",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 4,
  },
  cardText: {
    color: "#475569",
    fontSize: 14,
  },
  link: {
    marginTop: 20,
    color: "#1d4ed8",
    fontWeight: "600",
  },
});
