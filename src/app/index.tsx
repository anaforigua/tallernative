import { Ionicons } from "@expo/vector-icons";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import MiBoton from "../components/Miboton";

export default function Inicio() {
  return (
    <ScrollView style={styles.contenedor} contentContainerStyle={styles.contenido}>
      <View style={styles.avatarContenedor}>
        <Ionicons name="person-circle" size={100} color="#2563eb" />
        <Text style={styles.nombre}>Anamaria Forigua Murcia</Text>
        <Text style={styles.profesion}>Tecnólogo en ADSO</Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.subtituloSeccion}>Perfil Profesional</Text>
        <Text style={styles.parrafo}>
          Aprendiz del SENA apasionado por el desarrollo de aplicaciones móviles
          y web. Con habilidades en React Native, JavaScript, HTML5, Python y
          gestión de bases de datos relacionales y no relacionales.
        </Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.subtituloSeccion}>Contacto y Enlaces</Text>
        <MiBoton
          textoBoton="Enviar Correo"
          nombreIcono="mail"
          colorBoton="#E8D464"
          onPress={() =>
            Alert.alert("Contacto", "Correo: anamaria.forigua@misena.edu.co")
          }
        />
        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#2563eb"
          onPress={() => Alert.alert("Teléfono", "Celular: +57 300 1234567")}
        />
        <MiBoton
          textoBoton="Ver Perfil LinkedIn"
          nombreIcono="logo-linkedin"
          colorBoton="#0a66c2"
          onPress={() => Alert.alert("LinkedIn", "linkedin.com/in/anamaria-forigua")}
        />
        <MiBoton
          textoBoton="GitHub / Repositorio"
          nombreIcono="logo-github"
          colorBoton="#24292e"
          onPress={() => Alert.alert("GitHub", "github.com/anamariaforigua/revenfy")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  avatarContenedor: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 24, fontWeight: "bold", color: "#0f172a", marginTop: 8 },
  profesion: { fontSize: 16, color: "#2563eb", fontWeight: "600" },
  seccion: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 1,
  },
  subtituloSeccion: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 8,
  },
  parrafo: { fontSize: 14, color: "#475569", lineHeight: 20 },
});