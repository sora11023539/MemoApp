import React from 'react';
import {
  View, StyleSheet, TextInput,
} from 'react-native';

import CircleBtn from '../components/CircleBtn';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  return (
    // KeyboardAvoidingView behavior="height" = 囲ったコンテンツをリサイズしてくれる
    <KeyboardSafeView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleBtn
        name="check"
        onPress={() => { navigation.goBack(); }}
      />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },

  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
