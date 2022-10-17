import axios from "axios";

export const insertVisitor = async (isMobile: number) => {
  try {
    const response = await axios.post(
      "https://bolsadecafe.com/proveedores/api/insertVisitTonatiuh.php",
      {
        mobile: isMobile,
      }
    );
    return response.data;
  } catch (e) {
    return `😱 Request failed: ${e}`;
  }
};
