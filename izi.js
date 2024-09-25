export const iziInfo = (info) => {iziToast.show({
    title: 'Ok',
    message: info,
    backgroundColor: "darkgreen",
    theme: "dark"
  });}
export const iziError = (error) => {iziToast.show({
    title: 'Error',
    message: error,
    backgroundColor: "darkred",
    theme: "dark"
  });}
export const iziWarn = () => {iziToast.show({
    title: 'Hello',
    message: 'This is a notification from iziToast!',
  });}