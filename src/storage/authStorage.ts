import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../redux/reducers/authReducers/auth.interface';
import { AUTH_KEY } from '../config/storage';

class AuthStorage {
  private static instance: AuthStorage;
  private constructor() {}
  
  static getInstance() {
    if (!AuthStorage.instance){
      AuthStorage.instance = new AuthStorage();
    }
    return AuthStorage.instance;
  }

  public async saveUser(user: User) {
    try {
      const data = JSON.stringify(user);
      await AsyncStorage.setItem(AUTH_KEY, data);
    } catch (error) {
      console.log(error);
    }
  }

  public async getAuthData(){
    try {
      const data = await AsyncStorage.getItem(AUTH_KEY);
      if (data !== null){
        const authData : User = JSON.parse(data);
        return authData;
      }
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  public async removeData(){
    try {
      await AsyncStorage.removeItem(AUTH_KEY);
    } catch (error) {
      console.log(error);
    }
  }
}

export const authStorage = AuthStorage.getInstance();
