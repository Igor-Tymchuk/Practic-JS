export const iziInfo = () => {iziToast.show({
    title: 'Hello',
    message: 'This is a notification from iziToast!',
  });}
export const iziError = (error) => {iziToast.show({
    title: 'Error',
    message: error,
    backgroundColor: "red",
    theme: "dark"
  });}
export const iziWarn = () => {iziToast.show({
    title: 'Hello',
    message: 'This is a notification from iziToast!',
  });}