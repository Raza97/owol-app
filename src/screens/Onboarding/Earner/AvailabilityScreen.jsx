import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const availabilityData = [
  { day: 'Monday', times: ['9:00-12:00', '14:00-16:00'] },
  { day: 'Wednesday', times: ['9:00-18:00'] },
  { day: 'Thursday', times: ['9:00-18:00'] },
];

const AvailabilityCard = ({ day, times }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.dayText}>{day}</Text>
      <View style={styles.timeRow}>
        <Text style={styles.timeText}>{times[0]}</Text>
        <TouchableOpacity>
          <AntDesign name="pluscircleo" size={18} color="green" />
        </TouchableOpacity>
      </View>
    </View>
    {times.slice(1).map((time, index) => (
      <View key={index} style={styles.timeRow}>
        <Text style={styles.timeText}>{time}</Text>
        <TouchableOpacity>
          <MaterialIcons name="delete-outline" size={18} color="red" />
        </TouchableOpacity>
      </View>
    ))}
  </View>
);

export default function AvailabilityScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={availabilityData}
        keyExtractor={(item) => item.day}
        renderItem={({ item }) => <AvailabilityCard day={item.day} times={item.times} />}
        contentContainerStyle={{ padding: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4faef',
  },
  card: {
    backgroundColor: '#e6f4d3',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  dayText: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  timeText: {
    fontSize: 14,
    color: '#333',
    marginRight: 8,
  },
});