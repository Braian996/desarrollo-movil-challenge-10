import { Platform } from 'react-native'

if (Platform.OS === 'android') {
  if (typeof Symbol === 'undefined') {
    if (Array.prototype['@@iterator'] === undefined) {
      Array.prototype['@@iterator'] = function() {
        let i = 0;
        return {
          next: () => ({
            done: i >= this.length,
            value: this[i++],
          }),
        };
      };
    }
  }
}