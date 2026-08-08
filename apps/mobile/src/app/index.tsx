import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors, MaxContentWidth, Spacing } from '@/constants/theme';

const QUICK_CITIES = ['Tangier', 'Casablanca', 'Rabat', 'Marrakesh'];

export default function HomeScreen() {
  const [query, setQuery] = useState('');

  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <View style={styles.brandRow}>
            <View style={styles.brandMark}>
              <ThemedText style={styles.brandMarkText}>+</ThemedText>
            </View>
            <View>
              <ThemedText type="title" style={styles.brand}>
                Duty Pharmacy
              </ThemedText>
              <ThemedText style={styles.subtitle}>Find an open pharmacy near you</ThemedText>
            </View>
          </View>

          <View style={styles.locationPill}>
            <ThemedText style={styles.locationIcon}>⌖</ThemedText>
            <ThemedText style={styles.locationText}>Morocco</ThemedText>
          </View>
        </View>

        <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        >
          <View style={styles.hero}>
            <ThemedText type="title" style={styles.heroTitle}>
              Need a pharmacy now?
            </ThemedText>
            <ThemedText style={styles.heroText}>
              Quickly find pharmacies on duty, wherever you are in Morocco.
            </ThemedText>
          </View>

          <View style={styles.searchCard}>
            <ThemedText style={styles.searchLabel}>Search your city or neighborhood</ThemedText>
            <View style={styles.searchRow}>
              <ThemedText style={styles.searchIcon}>⌕</ThemedText>
              <TextInput
                value={query}
                onChangeText={setQuery}
                placeholder="e.g. Tangier, Malabata..."
                placeholderTextColor={Colors.light.textSecondary}
                style={styles.searchInput}
                returnKeyType="search"
                accessibilityLabel="Search city or neighborhood"
              />
            </View>
            <Pressable
              accessibilityRole="button"
              style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}
            >
              <ThemedText style={styles.primaryButtonText}>Find duty pharmacies</ThemedText>
            </Pressable>
          </View>

          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle">Popular cities</ThemedText>
            <ThemedText style={styles.sectionHint}>Start with a city</ThemedText>
          </View>

          <View style={styles.cityGrid}>
            {QUICK_CITIES.map((city) => (
              <Pressable
                key={city}
                accessibilityRole="button"
                onPress={() => setQuery(city)}
                style={({ pressed }) => [styles.cityCard, pressed && styles.pressed]}
              >
                <ThemedText style={styles.cityIcon}>⌖</ThemedText>
                <ThemedText style={styles.cityName}>{city}</ThemedText>
              </Pressable>
            ))}
          </View>

          <View style={styles.infoCard}>
            <View style={styles.infoIcon}>
              <ThemedText style={styles.infoIconText}>24</ThemedText>
            </View>
            <View style={styles.infoCopy}>
              <ThemedText type="subtitle">Open pharmacies, simplified</ThemedText>
              <ThemedText style={styles.infoText}>
                We&apos;ll help you get the duty pharmacy name, address, opening status, and directions.
              </ThemedText>
            </View>
          </View>
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
    justifyContent: 'space-between',
    gap: Spacing.three,
    paddingTop: Spacing.two,
    paddingBottom: Spacing.four,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    flexShrink: 1,
  },
  brandMark: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.backgroundSelected,
  },
  brandMarkText: {
    fontSize: 28,
    lineHeight: 30,
    fontWeight: '800',
  },
  brand: {
    fontSize: 22,
    lineHeight: 26,
  },
  subtitle: {
    color: Colors.light.textSecondary,
    fontSize: 12,
    marginTop: 2,
  },
  locationPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: 999,
    backgroundColor: Colors.light.backgroundElement,
  },
  locationIcon: {
    fontSize: 16,
  },
  locationText: {
    fontSize: 12,
    fontWeight: '600',
  },
  content: {
    gap: Spacing.four,
    paddingBottom: Spacing.six,
  },
  hero: {
    gap: Spacing.two,
    paddingVertical: Spacing.three,
  },
  heroTitle: {
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: -0.8,
  },
  heroText: {
    maxWidth: 560,
    color: Colors.light.textSecondary,
    fontSize: 16,
    lineHeight: 24,
  },
  searchCard: {
    gap: Spacing.three,
    padding: Spacing.four,
    borderRadius: 20,
    backgroundColor: Colors.light.backgroundElement,
  },
  searchLabel: {
    fontSize: 13,
    fontWeight: '700',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    minHeight: 52,
    paddingHorizontal: Spacing.three,
    borderRadius: 14,
    backgroundColor: Colors.light.background,
  },
  searchIcon: {
    fontSize: 24,
  },
  searchInput: {
    flex: 1,
    minWidth: 0,
    fontSize: 16,
    color: Colors.light.text,
    paddingVertical: Spacing.two,
  },
  primaryButton: {
    minHeight: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.text,
  },
  primaryButtonText: {
    color: Colors.light.background,
    fontSize: 15,
    fontWeight: '800',
  },
  pressed: {
    opacity: 0.7,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  sectionHint: {
    color: Colors.light.textSecondary,
    fontSize: 12,
  },
  cityGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  cityCard: {
    flexGrow: 1,
    flexBasis: '46%',
    minHeight: 78,
    padding: Spacing.three,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.light.backgroundSelected,
    justifyContent: 'space-between',
  },
  cityIcon: {
    fontSize: 18,
  },
  cityName: {
    fontSize: 15,
    fontWeight: '700',
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.three,
    padding: Spacing.four,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.light.backgroundSelected,
  },
  infoIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.backgroundElement,
  },
  infoIconText: {
    fontSize: 13,
    fontWeight: '900',
  },
  infoCopy: {
    flex: 1,
    gap: Spacing.one,
  },
  infoText: {
    color: Colors.light.textSecondary,
    fontSize: 13,
    lineHeight: 19,
  },
});
