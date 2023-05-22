/**
 * turns an uploaded image into a base64 string
 * got the code from https://stackoverflow.com/questions/47176280/how-to-convert-files-to-base64-in-react
 * go to link above to see how to call it
 * @param {File} file
 * @param {fn()} cb  call back function
 */
export const getBase64 = (file, cb) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    cb(reader.result);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
};
