import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, TextInput, Appbar, IconButton, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SettingsScreenProps} from './screen.types';

const iconRenderItem = () => (
  <Icon name="arrow-back" size={24} color={'#000'} />
);

const ResetPasswordPageScreen: React.FC<SettingsScreenProps> = ({
  navigation,
}) => {
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const [newPassword, setNewPassword] = React.useState('');
  const [showNewPassword, setShowNewPassword] = React.useState(false);

  const [confirmNewPpassword, setConfirmNewPassword] = React.useState('');
  const [showConfirmNewPassword, setShowConfirmNewPassword] =
    React.useState(false);

  const handleLogin = () => {
    // handle login logic here
  };

  return (
    <>
      <Appbar.Header style={styles.header}>
        <IconButton
          icon={() => iconRenderItem()}
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content
          title={'Settings'}
          style={styles.content}
          titleStyle={styles.title}
        />
      </Appbar.Header>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Change your password</Text>
          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} style={styles.inputIcon} />
            <View style={styles.inputWrapper}>
              <TextInput
                label="Current Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                style={styles.input}
                underlineColor="transparent"
              />
            </View>
            <Icon
              name={showPassword ? 'visibility-off' : 'visibility'}
              size={20}
              onPress={() => setShowPassword(!showPassword)}
              style={styles.inputIcon}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} style={styles.inputIcon} />
            <View style={styles.inputWrapper}>
              <TextInput
                label="New Password"
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry={!showNewPassword}
                style={styles.input}
                underlineColor="transparent"
              />
            </View>
            <Icon
              name={showNewPassword ? 'visibility-off' : 'visibility'}
              size={20}
              onPress={() => setShowNewPassword(!showNewPassword)}
              style={styles.inputIcon}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} style={styles.inputIcon} />
            <View style={styles.inputWrapper}>
              <TextInput
                label="Confirm Password"
                value={confirmNewPpassword}
                onChangeText={setConfirmNewPassword}
                secureTextEntry={!showConfirmNewPassword}
                style={styles.input}
                underlineColor="transparent"
              />
            </View>
            <Icon
              name={showConfirmNewPassword ? 'visibility-off' : 'visibility'}
              size={20}
              onPress={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
              style={styles.inputIcon}
            />
          </View>
          <View style={styles.formSubmit}>
            <Button
              mode="contained"
              onPress={handleLogin}
              style={styles.button}>
              Submit
            </Button>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#FDFBFC',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    padding: 16,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: '#FFFEFF',
  },
  logoContainer: {
    marginBottom: 0,
  },
  formContainer: {
    width: '100%',
  },
  formTitle: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 16,
    color: '#DB3B26',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  inputWrapper: {
    height: 50,
    flex: 1,
    borderWidth: 0,
    borderRadius: 5,
    overflow: 'hidden',
    // paddingBottom: 20,
  },
  input: {
    height: 50,
    marginTop: 0,
    backgroundColor: '#FFFEFF',
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  inputIcon: {
    marginHorizontal: 10,
    color: '#4A4550',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  formSubmit: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    backgroundColor: '#DB3B26',
    marginVertical: 10,
  },
});

export default ResetPasswordPageScreen;
