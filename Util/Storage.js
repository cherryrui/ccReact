import React, {
    AsyncStorage
} from 'react-native';

class DeviceStorage {
    /**
     * 获取
     * @param key
     */
    static get(key) {
        return AsyncStorage.getItem(key).then((value) => {
            const jsonValue = JSON.parse(value);
            return jsonValue;
        });
    }

    /**
     * 保存
     * @param key
     * @param value
     */
    static set(key, value) {
        return AsyncStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * 更新
     * @param key
     * @param value
     */
    static renew(key, value) {
        return DeviceStorage.get(key).then((item) => {
            value = typeof value === 'string' ? value : Object.assign({}, item, value);
            return AsyncStorage.setItem(key, JSON.stringify(value));
        });
    }

    /**
     * 删除
     * @param key
     */
    static del(key) {
        return AsyncStorage.removeItem(key);
    }

    /**
     * 清空
     * @return {[type]} [description]
     */
    static clear() {
        AsyncStorage.clear()
    }
}

export default DeviceStorage;