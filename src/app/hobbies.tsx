import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { globalStyles } from "../styles/globalStyles";

interface Hobby {
  id: string;
  nombre: string;
  detalle: string;
  imagen: { uri: string };
}

export default function Hobbies() {
  // Estado para controlar qué tarjeta está expandida mediante su ID
  const [idExpandido, setIdExpandido] = useState<string | null>(null);

  const listaHobbies: Hobby[] = [
    { 
      id: "1", 
      nombre: "Películas de Suspenso y Terror", 
      detalle: "Me fascina explorar tramas de misterio y cine de horror psicológico.",
      imagen: { uri: "https://static.wikia.nocookie.net/doblaje/images/f/fb/Corre_Poster.jpeg/revision/latest?cb=20210402205604&path-prefix=es" } 
    },
    { 
      id: "2", 
      nombre: "Escribir poemas y poesia", 
      detalle: "La escritura me conecta y me brinda claridad.",
      imagen: { uri: "https://i.pinimg.com/736x/95/2a/76/952a76051899b6867e3342b48495d39f.jpg" }
    },
    { 
      id: "3", 
      nombre: "Series", 
      detalle: "Me encanta el cine en especial las series que tiene ese aire de misterio y aquellas que tiene algo que contar.",
      imagen: { uri: "https://resizing.flixster.com/jXMf6PWydwQxFLXV5dFVYlTzPWQ=/620x336/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9707417_i_h10_ac.jpg" }
    },
    { 
      id: "4", 
      nombre: "Mitologias y Cultura", 
      detalle: "Siempre he pensado que las mejores historias vienen de nuestras raíces e incluso de nuestra propia fé.",
      imagen: { uri: "https://i.pinimg.com/1200x/7e/36/c8/7e36c857861c9864e23d1db4d90645f6.jpg" }
    },
    { 
      id: "5", 
      nombre: "Lectura y algo más", 
      detalle: "Considero que hay universos que no solo convergen en los libros sino también en otras actividades.",
      imagen: { uri: "https://i.pinimg.com/1200x/f3/24/8a/f3248a1b68295948709715146439dc2a.jpg" }
    },
  ];

  const manejarPress = (id: string) => {
    // Si ya está abierto lo cerramos (null), de lo contrario abrimos el seleccionado
    setIdExpandido(idExpandido === id ? null : id);
  };

  return (
    <ScrollView style={globalStyles.contenedor} contentContainerStyle={globalStyles.contenido}>
      <Text style={globalStyles.tituloPrincipal}>Intereses y Hobbies</Text>
      {listaHobbies.map((hobby) => {
        const estaAbierto = idExpandido === hobby.id;

        return (
          <TouchableOpacity
            key={hobby.id}
            style={[globalStyles.tarjeta, styles.tarjetaHobby]}
            onPress={() => manejarPress(hobby.id)}
            activeOpacity={0.8}
          >
            {/* Imagen cargada directamente desde internet */}
            <Image source={hobby.imagen} style={styles.imagenHobby} />
            
            <View style={styles.textoContainer}>
              <Text style={styles.textoHobby}>{hobby.nombre}</Text>
              
              {/* Muestra el detalle si está abierto, o el texto de guía si está cerrado */}
              {estaAbierto ? (
                <Text style={styles.textoDetalle}>{hobby.detalle}</Text>
              ) : (
                <Text style={styles.subtexto}>Toca para ver detalles</Text>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tarjetaHobby: { 
    borderLeftWidth: 4, 
    borderLeftColor: "#2563eb",
    flexDirection: "row",
    alignItems: "flex-start", // Alineado arriba para que el acordeón expanda con orden
    padding: 12,
  },
  imagenHobby: {
    width: 60,
    height: 80, 
    borderRadius: 6,
    marginRight: 12,
    backgroundColor: "#e2e8f0",
  },
  textoContainer: {
    flex: 1,
  },
  textoHobby: { 
    fontSize: 16, 
    fontWeight: "600", 
    color: "#0f172a" 
  },
  subtexto: { 
    fontSize: 12, 
    color: "#94a3b8", 
    marginTop: 4 
  },
  textoDetalle: {
    fontSize: 14,
    color: "#475569",
    marginTop: 6,
    lineHeight: 20,
  },
});