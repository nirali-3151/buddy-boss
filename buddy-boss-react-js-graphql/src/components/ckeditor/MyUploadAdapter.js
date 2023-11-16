import {
    ref,
    getDownloadURL,
    uploadBytes,
    getStorage
  } from "firebase/storage";


class MyUploadAdapter {
    constructor(loader) {
      this.loader = loader;
    }
    // Starts the upload process.
    upload() {
      return this.loader.file.then(
        (file) =>
          new Promise((resolve, reject) => {
            let storage = getStorage();
            uploadBytes(
              ref(storage, `ckeditor/${new Date().getTime()}`
              ),
              file
            )
              .then((snapshot) => {
                return getDownloadURL(snapshot.ref);
              })
              .then((downloadURL) => {
                resolve({
                  default: downloadURL,
                });
              }).catch((error) => {
                reject(error.message);
              })
          })
      );
    }
  }
  
export default MyUploadAdapter
  
  