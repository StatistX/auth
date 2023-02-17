import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/";

const getPosts = async ({ start, itemsPerPage }) => {
  const response = await axios.get(
    `${baseUrl}posts?_start=${start}&_limit=${itemsPerPage}`
  );
  return response;
};

const getComments = async (id) => {
  const response = await axios.get(`${baseUrl}posts/${id}/comments`);
  return response;
};

const getPost = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response;
};

export { getPosts, getComments, getPost };
