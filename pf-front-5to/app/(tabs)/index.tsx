import React from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import RootNavigator from './navigation/RootNavigator';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>ServiFinds</Text>
        <TextInput style={styles.searchInput} placeholder="Buscar" />
      </View>
      <View style={styles.imagePlaceholder} />
      <ScrollView horizontal style={styles.categoriesContainer}>
        {['Limpieza', 'Arreglos', 'Jardinería', 'Manicura', 'Otros'].map((category, index) => (
          <View key={index} style={styles.category}>
            <Text>{category}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.recommendationsContainer}>
        <Text style={styles.sectionTitle}>Recomendaciones para ti</Text>
        {Array(3).fill(null).map((_, index) => (
          <View key={index} style={styles.recommendation}>
            <Image
              source={{ uri: 'https://via.placeholder.com/50' }}
              style={styles.recommendationImage}
            />
            <View style={styles.recommendationText}>
              <View style={styles.rating}>
             
                <Text style={styles.ratingText}>4.9 (234)</Text>
              </View>
              <Text style={styles.recommendationTitle}>Trabajo</Text>
              <Text style={styles.recommendationSubtitle}>
                Descripción
              </Text>
            </View>
            <View style={styles.moreIcon}>
  
            </View>
          </View>
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchInput: {
    flex: 1,
    marginLeft: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  imagePlaceholder: {
    height: 100,
    backgroundColor: '#c2c7b7',
    margin: 16,
    borderRadius: 8,
  },
  categoriesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  category: {
    alignItems: 'center',
    marginRight: 16,
  },
  recommendationsContainer: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  recommendation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  recommendationImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  recommendationText: {
    flex: 1,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
  },
  recommendationTitle: {
    fontWeight: 'bold',
  },
  recommendationSubtitle: {
    color: '#666',
  },
  moreIcon: {
    marginLeft: 16,
  },
});
