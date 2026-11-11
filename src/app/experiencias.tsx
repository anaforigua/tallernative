import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Experiencia() {
  return (
    <ScrollView style={styles.contenedor} contentContainerStyle={styles.contenido}>
      <Text style={styles.tituloPrincipal}>Experiencia Laboral y Proyectos</Text>

      <View style={styles.tarjeta}>
        <Text style={styles.cargo}>Líder de Calidad y Documentación TSP/PSP</Text>
        <Text style={styles.empresa}>Proyecto Formativo Revenfy (SENA)</Text>
        <Text style={styles.anio}>2025 - Presente</Text>
        <Text style={styles.descripcion}>
          Encargada de la auditoría de defectos, trazabilidad de código y estandarización ISO/IEC 25010 para aplicación e-commerce de segunda mano.
        </Text>
      </View>

      <View style={styles.tarjeta}>
        <Text style={styles.cargo}>Desarrolladora Frontend Junior</Text>
        <Text style={styles.empresa}>Proyectos Académicos Independientes</Text>
        <Text style={styles.anio}>2024 - 2025</Text>
        <Text style={styles.descripcion}>
          Creación de interfaces web y móviles utilizando React, TypeScript, Tailwind CSS y Expo Go con arquitecturas limpias.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  tituloPrincipal: { fontSize: 20, fontWeight: "bold", color: "#0f172a", marginBottom: 12 },
  tarjeta: { backgroundColor: "#fff", padding: 16, borderRadius: 12, marginBottom: 12, elevation: 1 },
  cargo: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },
  empresa: { fontSize: 14, color: "#2563eb", fontWeight: "600", marginVertical: 2 },
  anio: { fontSize: 12, color: "#94a3b8", marginBottom: 6 },
  descripcion: { fontSize: 14, color: "#475569", lineHeight: 18 },
});