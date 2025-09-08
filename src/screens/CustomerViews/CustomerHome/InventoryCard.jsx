import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

const PantryCard = (props) => {
  const percentage = 70;
  const radius = 20;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius;
  const progress = (circumference * (100 - percentage)) / 100;

  return (
    <TouchableOpacity onPress={props.handleClick} style={styles.card}>
      {/* Left: Circular Progress */}
      <View style={styles.left}>
        <Svg width={50} height={50}>
          <Circle
            cx="25"
            cy="25"
            r={radius}
            stroke="#eee"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            cx="25"
            cy="25"
            r={radius}
            stroke="#4caf50"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={progress}
            strokeLinecap="round"
            fill="none"
            rotation="-90"
            origin="25, 25"
          />
        </Svg>
        <View style={styles.percentage}>
          <Text style={{ color: '#4caf50', fontSize: 12 }}>{percentage}%</Text>
        </View>
      </View>

      {/* Center: Content */}
      <View style={styles.center}>
        <Text style={styles.title}>{props.item.name}</Text>
        <View style={styles.infoRow}>
          <FontAwesome name="shopping-basket" size={14} color="#4caf50" />
          <Text style={styles.infoText}> {props.item.fresh} </Text>

          <Feather name="clock" size={14} color="#ffa726" />
          <Text style={[styles.infoText, { color: '#ffa726' }]}>
            {props.item.expiring}
          </Text>

          <MaterialIcons name="delete" size={14} color="#ef5350" />
          <Text style={[styles.infoText, { color: '#ef5350' }]}>
            {props.item.expired}
          </Text>

          {props.item.displayGradiant && (
            <LinearGradient
              colors={['#8e2de2', '#4a00e0']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.tag}
            >
              <Feather name="zap" size={12} color="white" />
              <Text style={styles.tagText}> +4 </Text>
            </LinearGradient>
          )}
        </View>
      </View>

      {/* Right: Menu Button */}
      <TouchableOpacity
        onPress={props.onMenuPress}
        style={styles.menuButton}
      >
        <Feather name="more-vertical" size={20} color="#999" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    margin: 10,
  },
  left: {
    position: 'relative',
    marginRight: 10,
  },
  percentage: {
    position: 'absolute',
    top: 16,
    left: 14,
  },
  center: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  infoText: {
    fontSize: 12,
    marginRight: 6,
    color: '#333',
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    color: 'white',
    fontSize: 12,
    marginLeft: 4,
  },
  menuButton: {
    padding: 6,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PantryCard;
