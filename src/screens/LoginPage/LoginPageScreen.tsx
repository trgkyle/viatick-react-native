import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  Button,
  Checkbox,
  TextInput,
  HelperText,
  DefaultTheme,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../components/Logo/Logo';
import {LoginScreenProps} from './screen.types';
import {loginAPI} from '../../apis/login';

const LoginPageScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const [buttonLoading, setButtonLoading] = React.useState(false);

  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#DB3B26',
    },
  };

  const handleLogin = async () => {
    setButtonLoading(true);
    if (Boolean(error)) {
      setButtonLoading(false);
      return;
    }
    const data = await loginAPI(email, password);
    if (data) navigation.navigate('App', {name: 'navigation'});
    setButtonLoading(false);
  };

  const handleForgotPassword = () => {
    // handle forgot password logic here
  };

  const handleEmailChange = (emailP: string) => {
    setEmail(emailP);
    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailP)) {
      setError('Invalid email address');
    } else {
      setError('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Icon name="email" size={20} style={styles.inputIcon} />
          <View style={styles.inputWrapper}>
            <TextInput
              label="Email"
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
              autoCapitalize="none"
              error={Boolean(error)}
              style={styles.input}
              underlineColor="transparent"
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} style={styles.inputIcon} />
          <View style={styles.inputWrapper}>
            <TextInput
              label="Password"
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
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={rememberMe ? 'checked' : 'unchecked'}
            onPress={() => setRememberMe(!rememberMe)}
            color="#DB3B26"
          />
          <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
            <HelperText type="info" style={styles.checkboxLabel}>
              Remember Me
            </HelperText>
          </TouchableOpacity>
        </View>
        <Button
          mode="contained"
          theme={theme}
          onPress={handleLogin}
          style={styles.button}
          disabled={buttonLoading}>
          Login
        </Button>
        <TouchableOpacity onPress={handleForgotPassword}>
          <HelperText type="info" style={styles.forgotPassword}>
            Forgot Password
          </HelperText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFEFF',
  },
  logoContainer: {
    marginBottom: 0,
  },
  formContainer: {
    width: '100%',
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
  checkbox: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  button: {
    // backgroundColor: '#DB3B26',
    marginVertical: 10,
  },
  forgotPassword: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#DB3B26',
  },
});

export default LoginPageScreen;
