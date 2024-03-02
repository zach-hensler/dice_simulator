export const useLocalStorage = <T>(identifier: string, defaultValue: T) => {
    const setLocalStorage = (state: T) => window.localStorage.setItem(identifier, JSON.stringify(state));
    const getLocalStorage = (): T => JSON.parse(window.localStorage.getItem(identifier) || JSON.stringify(defaultValue)) as T;

    return { getLocalStorage, setLocalStorage };
};
