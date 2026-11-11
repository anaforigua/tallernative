import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

export default function Estudios() {
  return (
    <ScrollView style={styles.contenedor} contentContainerStyle={styles.contenido}>
      <Text style={styles.tituloPrincipal}>Formación Académica</Text>

      <TarjetaEstudio
        titulo="Bachiller Académico"
        institucion="Institución Educativa Distrital"
        anio={2022}
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Técnico en Programación de Software"
        institucion="Colegio Técnico Aliado"
        anio={2024}
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Tecnólogo en Análisis y Desarrollo de Software (ADSO)"
        institucion="SENA - Centro de Gestión de Mercados, Logística y TIC"
        anio={2026}
        enCurso={true}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  tituloPrincipal: { fontSize: 20, fontWeight: "bold", color: "#0f172a", marginBottom: 12 },
});