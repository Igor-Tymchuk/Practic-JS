export const iziInfo = (info) => {iziToast.show({
    title: 'Ok',
    message: info,
    backgroundColor: "darkgreen",
    theme: "dark",
    messageSize: "16",
    icon: "ico-success",
    position: "topRight",
  });}
export const iziError = (error) => {iziToast.show({
    title: 'Error',
    message: error,
    backgroundColor: "darkred",
    theme: "dark",
    messageSize: "16",
    icon: "ico-error",
    position: "topRight",
  });}
