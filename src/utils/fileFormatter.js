const getUrlExtension = (url) => {
  return url.split(/[#?]/)[0].split(".").pop().trim();
};

const getFilename = (url) => {
  return url.split("/").pop();
};

export const imageUrlToFile = async (imgUrl) => {

  const response = await fetch(imgUrl);
  const blob = await response.blob();
  const file = new File([blob], getFilename(imgUrl), {
    type: blob.type,
  });
  return file;
};
