import { supabase } from "../lib/supabaseClient";


export const getComments = async () => {
    try {
      const { data: comments, error } = await supabase.from("raitings").select("*");
  
      if (error) {
        console.error("Error al obtener los comentarios:", error.message);
      } else {
        return comments;
      }
    } catch (error) {
      console.error("Error al realizar la petición:", error.message);
    }
  };
  
  export const postComment = async (name, puntos, comentarios) => {
    try {
      await supabase.from("raitings").insert([{ name, puntos, comentarios }]);
      console.log("Calificación guardada exitosamente");
    } catch (error) {
      console.error("Error al guardar la calificación:", error.message);
    }
  };