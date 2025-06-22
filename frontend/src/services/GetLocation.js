import axios from 'axios'; 

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = false;
const token = "5ca63acea66bdd";

export const UserIpInfo = async () => {
  try {
    const response = await axios.get(`https://ipinfo.io/json?token=${token}`);
    const data = response.data;

    return {
      city: data.city,
      ip_address: data.ip,
      country: data.country,
    };
  } catch (error) {
    console.error("Error fetching IP info:", error);
    return null;
  }
};
