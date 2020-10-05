import React, {useEffect, useState} from 'react';

import {StyleSheet, ImageBackground, StatusBar, Keyboard} from 'react-native';
import {Title, List, Input, Form, Submit, TextButton} from './styles';

import Notes from '~/components/notes';

import getRealm from '~/services/realm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

function Main() {
  const [input, setInput] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function loadNotes() {
      const realm = await getRealm();

      const data = realm.objects('Notas');
      setNotes(data);
    }
    loadNotes();
  }, []);

  async function handleAddNotes() {
    try {
      const realm = await getRealm();
      let id = Math.random().toString(36).substring(7);

      realm.write(() => {
        realm.create('Notas', {id: id, description: input});
      });

      setInput('');
      Keyboard.dismiss();
    } catch (err) {
      console.log('deu ruim');
    }
  }

  return (
    <ImageBackground
      source={{
        uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
      }}
      style={styles.container}
      resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Title>Notes</Title>
      <Form>
        <Input
          value={input}
          onChangeText={(text) => setInput(text)}
          autoCapitalize="none"
          autoCorrect={true}
          placeholder="Adicione sua nota...."
        />
        <Submit onPress={handleAddNotes}>
          <TextButton>Criar</TextButton>
        </Submit>
      </Form>
      <List
        data={notes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <Notes data={item} />}
      />
    </ImageBackground>
  );
}

export default Main;
