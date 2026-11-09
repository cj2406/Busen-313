import { Link } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const hostels = [
  {
    name: "Emerald",
    path: "/pages/Emerald",
    subtitle: "A calm, well-kept residence hall.",
  },
  {
    name: "Bethel Splendor",
    path: "/pages/Bethel_Splendor",
    subtitle: "Popular for spacious rooms and community life.",
  },
  {
    name: "Gideon Troopers",
    path: "/pages/Gideon_troopers",
    subtitle: "A lively hostel with active student energy.",
  },
  {
    name: "Neal Wilson",
    path: "/pages/Neal_wilson",
    subtitle: "Known for its convenient location and comfort.",
  },
  {
    name: "Nelson Mandela",
    path: "/pages/Nelson_mandela",
    subtitle: "A strong social-hub for residents.",
  },
  {
    name: "Samuel Akande",
    path: "/pages/Samuel_akande",
    subtitle: "Well-loved for its peaceful atmosphere.",
  },
  {
    name: "Welch",
    path: "/pages/Welch",
    subtitle: "A welcoming hall with a balanced campus vibe.",
  },
  {
    name: "Topaz",
    path: "/pages/Topaz",
    subtitle: "Distinctive, elegant, and student-friendly.",
  },
  {
    name: "Winslow",
    path: "/pages/Winslow",
    subtitle: "Comfortable and conveniently placed for students.",
  },
];

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <View style={styles.hero}>
          <Image
            source={require("../../assets/image.png")}
            style={styles.image}
          />
          <Text style={styles.kicker}>WELCOME TO</Text>
          <Text style={styles.title}>Babcock University</Text>
          <Text style={styles.subtitle}>Your guide to campus living</Text>
          <Text style={styles.intro}>
            Discover the residence halls and find a place to feel at home in the
            Babcock student community.
          </Text>
        </View>

        <View style={styles.schoolCard}>
          <Text style={styles.schoolTitle}>About Babcock</Text>
          <Text style={styles.schoolText}>
            Babcock University is a private Christian university in
            Ilishan-Remo, Ogun State, Nigeria. Its campus brings together
            learning, community, and student life.
          </Text>
        </View>

        <View style={styles.directoryHeader}>
          <Text style={styles.sectionTitle}>Find your hall</Text>
          <Text style={styles.sectionText}>
            Browse the residence guide to learn about each hall.
          </Text>
        </View>

        <View style={styles.list}>
          {hostels.map((hostel) => (
            <Link key={hostel.name} href={hostel.path} style={styles.card}>
              <View style={styles.cardCopy}>
                <Text style={styles.cardTitle}>{hostel.name}</Text>
                <Text style={styles.cardText}>{hostel.subtitle}</Text>
              </View>
              <Text style={styles.cardArrow}>View</Text>
            </Link>
          ))}
        </View>

        <Link href="/explore" style={styles.link}>
          Explore the full directory
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f4f7f2",
    paddingHorizontal: 20,
    paddingVertical: 28,
  },
  content: {
    width: "100%",
    maxWidth: 680,
    alignSelf: "center",
  },
  hero: {
    alignItems: "center",
    backgroundColor: "#294374",
    borderRadius: 24,
    padding: 24,
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 18,
    borderRadius: 16,
  },
  kicker: {
    color: "#5170c0",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.8,
    marginBottom: 8,
  },
  title: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitle: {
    color: "#5184c3",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
  },
  intro: {
    color: "#e3e9e3",
    fontSize: 15,
    lineHeight: 23,
    maxWidth: 440,
    textAlign: "center",
  },
  schoolCard: {
    backgroundColor: "#ffffff",
    borderColor: "#e2e8df",
    borderRadius: 18,
    borderWidth: 1,
    padding: 20,
    marginBottom: 26,
  },
  schoolTitle: {
    color: "#17223d",
    fontSize: 19,
    fontWeight: "800",
    marginBottom: 8,
  },
  schoolText: {
    color: "#59665d",
    fontSize: 15,
    lineHeight: 23,
  },
  directoryHeader: {
    marginBottom: 14,
  },
  sectionTitle: {
    color: "#173d2b",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 5,
  },
  sectionText: {
    color: "#59665d",
    fontSize: 14,
  },
  list: {
    width: "100%",
    gap: 12,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: "#e2e8df",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardCopy: {
    flex: 1,
    paddingRight: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#17273d",
    marginBottom: 4,
  },
  cardText: {
    color: "#595f66",
    fontSize: 14,
    lineHeight: 20,
  },
  cardArrow: {
    color: "#9b7725",
    fontSize: 13,
    fontWeight: "800",
  },
  link: {
    alignSelf: "center",
    marginTop: 20,
    color: "#315b40",
    fontWeight: "700",
    padding: 10,
  },
});
