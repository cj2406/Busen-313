import { Link } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HallPage({ name, tagline, description, imageSource = null }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Link href="/" style={styles.backLink}>
          Back to hostel directory
        </Link>

        {imageSource ? (
          <Image
            source={imageSource}
            style={styles.hallImage}
            resizeMode="cover"
            accessibilityLabel={`${name} hall`}
          />
        ) : (
          <View
            style={styles.imagePlaceholder}
            accessible
            accessibilityLabel={`${name} hall image coming soon`}
          >
            <Text style={styles.placeholderLabel}>HALL PHOTO</Text>
            <Text style={styles.placeholderText}>Image coming soon</Text>
          </View>
        )}

        <View style={styles.hero}>
          <Text style={styles.eyebrow}>BABCOCK UNIVERSITY | RESIDENCE GUIDE</Text>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.tagline}>{tagline}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionLabel}>ABOUT THE HALL</Text>
          <Text style={styles.description}>{description}</Text>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>A home for campus life</Text>
          <Text style={styles.supportingText}>
            Make the most of student life at Babcock University with a place to
            rest, study, and connect with fellow residents.
          </Text>
        </View>

        <Link href="/explore" style={styles.exploreLink}>
          Explore all halls
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
    maxWidth: 620,
    alignSelf: "center",
  },
  hallImage: {
    width: "100%",
    height: 220,
    borderRadius: 20,
    marginBottom: 18,
  },
  imagePlaceholder: {
    width: "100%",
    height: 220,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e5ebe3",
    borderColor: "#d4ded2",
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 18,
  },
  placeholderLabel: {
    color: "#637268",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  placeholderText: {
    color: "#315b40",
    fontSize: 16,
    fontWeight: "700",
  },
  backLink: {
    color: "#315b40",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 20,
  },
  hero: {
    backgroundColor: "#173d2b",
    borderRadius: 24,
    padding: 24,
    marginBottom: 18,
  },
  eyebrow: {
    color: "#e5bd63",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.2,
    marginBottom: 16,
  },
  title: {
    color: "#ffffff",
    fontSize: 34,
    fontWeight: "800",
    marginBottom: 10,
  },
  tagline: {
    color: "#e3e9e3",
    fontSize: 16,
    lineHeight: 24,
  },
  card: {
    backgroundColor: "#ffffff",
    borderColor: "#e2e8df",
    borderRadius: 20,
    borderWidth: 1,
    padding: 22,
  },
  sectionLabel: {
    color: "#9b7725",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 10,
  },
  description: {
    color: "#35443a",
    fontSize: 16,
    lineHeight: 25,
  },
  divider: {
    backgroundColor: "#e8ede7",
    height: 1,
    marginVertical: 20,
  },
  sectionTitle: {
    color: "#173d2b",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 8,
  },
  supportingText: {
    color: "#59665d",
    fontSize: 15,
    lineHeight: 23,
  },
  exploreLink: {
    alignSelf: "center",
    color: "#315b40",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 22,
    padding: 10,
  },
});
