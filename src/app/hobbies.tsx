import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Hobbies() {
  const listaHobbies = [
    { id: "1", nombre: "Lectura de Novelas de Ciencia Ficción", detalle: "Me fascina explorar universos distópicos y novelas de Isaac Asimov." },
    { id: "2", nombre: "Práctica de Piano Virtual", detalle: "Aprendiendo canciones clásicas y melodías pop sencillas en teclado digital." },
    { id: "3", nombre: "Prototipado en Arduino", detalle: "Experimentación con sensores de temperatura y circuitos básicos en C++." },
    { id: "4", nombre: "Diseño Gráfico y UI/UX", detalle: "Creación de paletas de colores y mockups en Figma para proyectos web." },
  ];

  return (
    <ScrollView style={styles.contenedor} contentContainerStyle={styles.contenido}>
      <Text style={styles.tituloPrincipal}>Intereses y Hobbies</Text>
      {listaHobbies.map((hobby) => (
        <TouchableOpacity
          key={hobby.id}
          style={styles.tarjetaHobby}
          onPress={() => Alert.alert(hobby.nombre, hobby.detalle)}
          activeOpacity={0.7}
        >
          <Text style={styles.textoHobby}>{hobby.nombre}</Text>
          <Text style={styles.subtexto}>Toca para ver detalles</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  tituloPrincipal: { fontSize: 20, fontWeight: "bold", color: "#0f172a", marginBottom: 12 },
  tarjetaHobby: { backgroundColor: "#fff", padding: 16, borderRadius: 12, marginBottom: 12, elevation: 1, borderLeftWidth: 4, borderLeftColor: "#2563eb" },
  textoHobby: { fontSize: 16, fontWeight: "600", color: "#0f172a" },
  subtexto: { fontSize: 12, color: "#94a3b8", marginTop: 4 },
});