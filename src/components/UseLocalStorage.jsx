export const useLocalStorage = (str) => {

    console.log(`localStorage`, str);
    const setItem = (value) => {
        try {
            window.localStorage.setItem(str, value)
        }
        catch (error) {
            console.log(error)
        }
    }


    const getItem = () => {
        try {
            const item = window.localStorage.getItem(str)
            if (item) {
                return item ? item : undefined
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const removeItem = () => {
        try {
            window.localStorage.removeItem(str)

        } catch (error) {
            console.log(error)
        }
    }
    return { setItem, getItem, removeItem };
}