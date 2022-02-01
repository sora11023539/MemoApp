import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import firebase from 'firebase';

import Btn from '../components/Btn';

export default function SignUpScreen(props) {
  const { navigation } = props;
  // [保持したいデータ, 更新する関数] = useState('初期値')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 履歴はMemoListのみ
  // 行き先はメモリスト
  function handlePress() {
    // emailとpasswordをfirebaseに渡す
    firebase.auth().createUserWithEmailAndPassword(email, password)
      // コールバック関数 イベントが発生した時、それをトリガーとして実行する関数
      // ユーザーに関する情報を受け取る
      // then 成功した場合
      .then((userCredential) => {
        const { user } = userCredential;
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
        console.log(user.uid);
      })
      // catch 失敗した場合
      .catch((error) => {
        Alert.alert(error.code);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <Btn
          label="Submit"
          // eslint-disable-next-line
          onPress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'LogIn' }],
              });
            }}
          >
            <Text style={styles.footerLink}>Log In.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },

  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },

  input: {
    fontSize: 16,
    height: 48,

    backgroundColor: '#fff',

    borderColor: '#ddd',
    borderWidth: 1,

    paddingHorizontal: 8,
    marginBottom: 16,
  },

  footer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467fd3',
  },
});
