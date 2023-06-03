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

export const parseJSON = async (json) => {
  return new Promise((resolve, reject) => {
    const readJSON = new FileReader();
    readJSON.onload = (event) =>
      resolve(
        JSON.parse(
          typeof event.target?.result === "string" ? event.target.result : ""
        )
      );
    readJSON.onerror = (error) => reject(error);
    readJSON.readAsText(json);
  });
};
