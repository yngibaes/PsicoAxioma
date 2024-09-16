import { useState, useEffect } from "react";
import url from "../config/config";
import useAuth from "../useAuth";

// Definición de la interfaz
interface DiaryEntry {
  diaryID: string;
  diaryTitle: string;
  diaryContent: string;
  diaryDate: string;
}

// Hook para obtener la información del diario
const hookDiaryInfo = () => {
  // Estados para almacenar la información de la API
  const [data, setData] = useState<DiaryEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { userEmail } = useAuth();

  // Efecto para obtener la información
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}/diary?userEmail=${userEmail}`);
        if (!response.ok) {
          throw new Error("Salió mal la conexión");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (userEmail) {
      // Asegúrate de que el email esté disponible antes de hacer la consulta
      fetchData();
    }

/*      // Polling every 30 seconds to check for changes
     const interval = setInterval(() => {
      fetchData();
    }, 30000); // Change the interval as needed (30 seconds in this case)

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    }; */

  }, [userEmail]);

  // Función para formatear la fecha
  const formatDate = (date: any) => {
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const formattedTime = dateObj.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${formattedDate} - ${formattedTime}`;
  };

  return {
    data,
    loading,
    error,
    formatDate,
  };
};

export default hookDiaryInfo;
