import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Typhography from '../../../components/Typhography';

const ShoppingCard = (props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => props.onPress()}>
      <View style={styles.container}>
        {/* Left Section: Title + Info */}
        <View style={styles.leftSection}>
          <View style={styles.headerLeft}>
            <Typhography style={styles.title}>{props.title}</Typhography>
            <AntDesign name="pushpin" size={16} color="green" style={[styles.pinIcon, { transform: [{ rotate: '90deg' }] }]} />
          </View>

          <View style={styles.infoRow}>
            <FontAwesome name="shopping-basket" size={14} color="green" style={styles.icon} />
            <Typhography style={styles.infoText}>20</Typhography>

            <Feather name="calendar" size={16} color="green" style={styles.icon} />
            <Typhography style={styles.infoText}>March 23</Typhography>

            <Feather name="clock" size={16} color="green" style={styles.icon} />
            <Typhography style={styles.infoText}>6:00pm</Typhography>
          </View>
        </View>

        {/* Right Section: Avatars + Menu in single row */}
        <View style={styles.rightSection}>
          <View style={styles.avatarMenuRow}>
            <View style={styles.avatars}>
              <Image source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} style={styles.avatar} />
              <Image source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} style={styles.avatar} />
              <View style={styles.avatarTextCircle}>
                <Typhography style={styles.avatarText}>K</Typhography>
              </View>
            </View>
            <Entypo name="dots-three-vertical" size={16} color="gray" style={styles.menuIcon} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f1f8ee',
    borderRadius: 10,
    height: 80,
    padding: 10,
    elevation: 2,
    marginVertical: 5,
  },
  container: {
    flexDirection: 'row',
    height: '100%',
  },
  leftSection: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
    marginRight: 4,
  },
  pinIcon: {
    marginLeft: 4,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 6,
  },
  icon: {
    marginRight: 4,
    marginLeft: 8,
  },
  infoText: {
    fontSize: 14,
    color: 'green',
    marginRight: 8,
  },
  rightSection: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  avatarMenuRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatars: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 6,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: -8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  avatarTextCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fcd34d',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  avatarText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 12,
  },
  menuIcon: {
    marginLeft: 8,
  },
});

export default ShoppingCard;
