import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

const GenderPicker = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');
  const genders = ['남', '여'];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const onSelectGender = (gender: string) => {
    setSelectedGender(gender);
    setDropdownOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
        <Text
          style={[
            styles.dropdownButtonText,
            { color: selectedGender && 'gray' },
          ]}>
          {selectedGender || '성별을 선택해 주세요.'}
        </Text>
      </TouchableOpacity>

      {isDropdownOpen && (
        <View style={styles.dropdown}>
          <FlatList
            data={genders}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownRow}
                onPress={() => onSelectGender(item)}>
                <Text style={styles.dropdownRowText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
  },
  label: {
    marginBottom: 10,
    fontSize: 18,
  },
  dropdownButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  dropdownButtonText: {
    color: '#444',
    fontSize: 16,
  },
  dropdown: {
    marginTop: 10,
    width: '100%',
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdownRow: {
    padding: 10,
    borderBottomColor: '#C5C5C5',
    borderBottomWidth: 1,
  },
  dropdownRowText: {
    color: '#444',
    fontSize: 16,
  },
});

export default GenderPicker;
