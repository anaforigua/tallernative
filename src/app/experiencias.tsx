import { ScrollView, Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function Experiencia() {
  return (
    <ScrollView style={globalStyles.contenedor} contentContainerStyle={globalStyles.contenido}>
      <Text style={globalStyles.tituloPrincipal}>Experiencia Laboral y Proyectos</Text>

      <View style={globalStyles.tarjeta}>
        <Text style={styles.cargo}>Líder de Calidad y Documentación TSP/PSP</Text>
        <Text style={styles.empresa}>Proyecto Formativo Revenfy (SENA)</Text>
        <Text style={styles.anio}>2025 - Presente</Text>
        <Text style={styles.descripcion}>
          Encargada de la auditoría de defectos, trazabilidad de código y estandarización ISO/IEC 25010 para aplicación e-commerce de segunda mano.
        </Text>
      </View>

      <View style={globalStyles.tarjeta}>
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

const styles = {
  cargo: { fontSize: 16, fontWeight: "bold" as const, color: "#0f172a" },
  empresa: { fontSize: 14, color: "#2563eb", fontWeight: "600" as const, marginVertical: 2 },
  anio: { fontSize: 12, color: "#94a3b8", marginBottom: 6 },
  descripcion: { fontSize: 14, color: "#475569", lineHeight: 18 },
};