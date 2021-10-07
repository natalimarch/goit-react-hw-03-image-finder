import axios from "axios";

const instance = axios.create({
  baseURL: "https://pixabay.com/",
  params: {
    key: "23365989-0313fa8d36a360eb60645d2f6"
  }
});

const createParams = (params) => {
  return {
    params,
  };
};

export const getAllImages = async () => {
  return instance.get("/api/");
};
export const getImages = async (
  {query = "",
  image_type = "photo",
  orientation = "horizontal",
  page = 1,
  per_page = 12}
) => {
  return instance.get(
    "/api/",
    createParams({ q: query, image_type, orientation, per_page, page })
  );
};
