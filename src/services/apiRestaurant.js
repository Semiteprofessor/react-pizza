const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export const getMenu = async () => {
  const res = await fetch(`${API_URL}/menu`);

  if (!res.ok) throw new Error("Error fetching menu");

  const { data } = res.json();
  return data;
};
