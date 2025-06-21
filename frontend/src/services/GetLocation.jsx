import React, { useEffect, useState } from "react";
import axios from 'axios'; 

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = false;

const UserIpInfo = () => {
  const [ipinfo, setIpinfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "https://ipinfo.io/json?token=5ca63acea66bdd"
        const response = await axios.get(apiUrl);
        setIpinfo(response.data);
      } catch (err) {
        setError(err);
        console.error("Error fetching IP information:", err);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <p className="text-red-500">Failed to load IP info.</p>;
  }

  return (
    <>
      <p>IP: {ipinfo?.ip}</p>
      <p>City: {ipinfo?.city}</p>
      <p>Region: {ipinfo?.region}</p>
      <p>Country: {ipinfo?.country}</p>
    </>
  );
};

export default UserIpInfo;
