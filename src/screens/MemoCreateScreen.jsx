import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput,
} from 'react-native';

import firebase from 'firebase';

import { useNavigation } from '@react-navigation/native';
import CircleBtn from '../components/CircleBtn';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  // bodyTextの初期値は空 setBodyTextで更新
  const [bodyText, setBodyText] = useState('');

  function handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    // 現在ログインしているユーザーごとにmemosを作る
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    // memosの中にdocumentを追加する
    ref.add({
      // キーと値の変数の名前が同じ時は省略できる
      // 省略前 bodyText: bodyText
      bodyText,
      updatedAt: new Date(),
    })
      // documentのreferenceを取得
      .then((docRef) => {
        console.log('Create!', docRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        console.log('Error!', error);
      });
  }

  return (
    // KeyboardAvoidingView behavior="height" = 囲ったコンテンツをリサイズしてくれる
    <KeyboardSafeView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          // bodyTextにテキストが入力されるたびにsetBodyTextが実行される
          onChangeText={(text) => (setBodyText(text))}
          autoFocus
        />
      </View>
      <CircleBtn
        name="check"
        onPress={handlePress}
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
