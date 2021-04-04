import Axios from "axios";

export const instance = Axios.create({
  baseURL: "http://api.sprintt.co/spotify/",
  headers: {
    "user-access-token": "9779e48f-4b88-4e1b-8e47-2ea282d06365",
  },
});
