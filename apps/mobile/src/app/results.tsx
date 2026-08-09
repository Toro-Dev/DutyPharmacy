import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors, MaxContentWidth, Spacing } from '@/constants/theme';
import { PHARMACIES } from '@/data/pharmacies';

export default function ResultsScreen() {
  const router = useRouter();
  const { city } = useLocalSearchParams<{ city?: string }>();

  const searchCity = city?.trim() || 'Tangier';

  const results = PHARMACIES.filter(
    (pharmacy) => pharmacy.city.toLowerCase() === searchCity.toLowerCase(),
  );

  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Go back"
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <ThemedText style={styles.backText}>‚Äπ</ThemedText>
          </Pressable>

          <View style={styles.headerCopy}>
            <ThemedText type="subtitle">Duty pharmacies</ThemedText>
            <ThemedText style={styles.headerLocation}>{searchCity}</ThemedText>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.intro}>
            <ThemedText type="title" style={styles.title}>
              Pharmacies on duty
            </ThemedText>
            <ThemedText style={styles.subtitle}>
              {results.length} pharmacies found in {searchCity}
            </ThemedText>
          </View>

          {results.length > 0 ? (
            results.map((pharmacy) => (
              <View key={pharmacy.id} style={styles.card}>
                <View style={styles.cardTop}>
                  <View style={styles.pharmacyIcon}>
                    <ThemedText style={styles.pharmacyIconText}>+</ThemedText>
                  </View>

                  <View style={styles.cardTitle}>
                    <ThemedText type="subtitle">{pharmacy.name}</ThemedText>
                    <ThemedText style={styles.neighborhood}>
                      {pharmacy.neighborhood}
                    </ThemedText>
                  </View>

                  <View style={styles.statusPill}>
                    <View style={styles.statusDot} />
                    <ThemedText style={styles.statusText}>On duty</ThemedText>
                  </View>
                </View>

                <View style={styles.details}>
                  <ThemedText style={styles.detail}>
                    Ì≥ç {pharmacy.address}
                  </ThemedText>
                  <ThemedText style={styles.detail}>
                    Ìµê Open until {pharmacy.closesAt}
                  </ThemedText>
                  <ThemedText style={styles.detail}>
                    ‚òé {pharmacy.phone}
                  </ThemedText>
                </View>

                <Pressable
                  accessibilityRole="button"
                  style={({ pressed }) => [
                    styles.directionsButton,
                    pressed && styles.pressed,
                  ]}
                >
                  <ThemedText style={styles.directionsText}>
                    View pharmacy
                  </ThemedText>
                </Pressable>
              </View>
            ))
          ) : (
            <View style={styles.emptyCard}>
              <ThemedText type="subtitle">
                No duty pharmacies found
              </ThemedText>
              <ThemedText style={styles.emptyText}>
                Try another city or neighborhood.
              </ThemedText>

              <Pressable
                accessibilityRole="button"
                onPress={() => router.back()}
                style={styles.secondaryButton}
              >
                <ThemedText style={styles.secondaryButtonText}>
                  Search again
                </ThemedText>
              </Pressable>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    alignSelf: 'center',
    width: '100%',
    maxWidth: MaxContentWidth,
    paddingHorizontal: Spacing.four,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    paddingTop: Spacing.two,
    paddingBottom: Spacing.four,
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.backgroundElement,
  },
  backText: {
    fontSize: 30,
    lineHeight: 32,
  },
  headerCopy: {
    gap: 2,
  },
  headerLocation: {
    color: Colors.light.textSecondary,
    fontSize: 12,
  },
  content: {
    gap: Spacing.three,
    paddingBottom: Spacing.six,
  },
  intro: {
    gap: Spacing.one,
    paddingVertical: Spacing.three,
  },
  title: {
    fontSize: 30,
    lineHeight: 36,
  },
  subtitle: {
    color: Colors.light.textSecondary,
    fontSize: 14,
  },
  card: {
    gap: Spacing.three,
    padding: Spacing.four,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.light.backgroundSelected,
    backgroundColor: Colors.light.background,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.two,
  },
  pharmacyIcon: {
    width: 44,
    height: 44,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.backgroundSelected,
  },
  pharmacyIconText: {
    fontSize: 25,
    fontWeight: '800',
  },
  cardTitle: {
    flex: 1,
    gap: 2,
  },
  neighborhood: {
    color: Colors.light.textSecondary,
    fontSize: 12,
  },
  statusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: Colors.light.backgroundElement,
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#2E7D32',
  },
  statusText: {
    fontSize: 11,
    fontWeight: '800',
  },
  details: {
    gap: Spacing.two,
  },
  detail: {
    color: Colors.light.textSecondary,
    fontSize: 13,
    lineHeight: 19,
  },
  directionsButton: {
    minHeight: 46,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.text,
  },
  directionsText: {
    color: Colors.light.background,
    fontSize: 14,
    fontWeight: '800',
  },
  pressed: {
    opacity: 0.7,
  },
  emptyCard: {
    gap: Spacing.two,
    padding: Spacing.four,
    borderRadius: 20,
    backgroundColor: Colors.light.backgroundElement,
  },
  emptyText: {
    color: Colors.light.textSecondary,
  },
  secondaryButton: {
    marginTop: Spacing.two,
    minHeight: 46,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.light.backgroundSelected,
  },
  secondaryButtonText: {
    fontWeight: '700',
  },
});
