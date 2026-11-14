import { ScrollView, Text, TouchableOpacity, View, StyleSheet, Linking, Alert, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { globalStyles } from "../styles/globalStyles";

export default function Inicio() {
  // Función auxiliar para abrir enlaces externos (WhatsApp y GitHub)
  const abrirEnlace = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Error al abrir el enlace:", err));
  };

  // Función para abrir Gmail web directamente
  const abrirCorreo = () => {
    const email = "anamariaforigua20@gmail.com";
    const urlGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

    Linking.openURL(urlGmail).catch(() => {
      Alert.alert(
        "Correo Electrónico", 
        `Puedes escribirme directamente a:\n\n${email}`
      );
    });
  };
  
  return (
    <ScrollView style={globalStyles.contenedor} contentContainerStyle={globalStyles.contenido}>
      
      {/* 1. Cabecera limpia y centrada */}
      <View style={styles.avatarContainer}>
        <Image 
          source={require("../../assets/perfil.png")} 
          style={styles.imagenPerfil} 
        />
      </View>

      <Text style={styles.tituloPrincipal}>Anamaria Forigua Murcia</Text>
      <Text style={styles.subtitulo}>Análisis y Desarrollo de Software (ADSO) - SENA</Text>
      
      <Text style={styles.descripcionPerfil}>
        Bienvenido a mi portafolio digital. Aquí puedes encontrar mis canales de contacto directo y acceder a mis repositorios de código.
      </Text>


      <Text style={styles.seccionTitulo}>Perfil Profesional</Text>
      
      <View style={[globalStyles.tarjeta, styles.tarjetaPerfilTecnico]}>
        <Text style={styles.textoPerfilTecnico}>
          Estudiante de Análisis y Desarrollo de Software (ADSO) en el SENA. Aunque no poseo experiencia laboral formal, cuento con una sólida formación práctica en arquitectura de software, calidad, testing y documentación técnica. He desarrollado diversos mini-proyectos aplicando tecnologías como React, TypeScript, JavaScript, HTML, CSS, Python y PostgreSQL, destacando por mi  constante autoaprendizaje y la curiosidad.
        </Text>
      </View>

      {/* 3. Sección de Contacto Directo */}
      <Text style={styles.seccionTitulo}>Canales de Contacto</Text>

      {/* Tarjeta de WhatsApp */}
      <TouchableOpacity
        style={[globalStyles.tarjeta, styles.tarjetaContacto]}
        onPress={() => abrirEnlace("https://wa.me/573215460577")}
        activeOpacity={0.8}
      >
        <View style={styles.contenedorIcono}>
          <FontAwesome name="whatsapp" size={30} color="#25D366" />
        </View>
        <View style={styles.textoContainer}>
          <Text style={styles.tituloSeccion}>WhatsApp</Text>
          <Text style={styles.detalleContacto}>+57 321 5460577</Text>
          <Text style={styles.enlaceTexto}>Toca para chatear →</Text>
        </View>
      </TouchableOpacity>

      {/* Tarjeta de Correo Electrónico (Gmail) */}
      <TouchableOpacity
        style={[globalStyles.tarjeta, styles.tarjetaContacto]}
        onPress={abrirCorreo}
        activeOpacity={0.8}
      >
        <View style={styles.contenedorIcono}>
          <FontAwesome name="envelope" size={26} color="#EA4335" />
        </View>
        <View style={styles.textoContainer}>
          <Text style={styles.tituloSeccion}>Correo Electrónico</Text>
          <Text style={styles.detalleContacto}>anamariaforigua20@gmail.com</Text>
          <Text style={styles.enlaceTexto}>Toca para enviar mensaje →</Text>
        </View>
      </TouchableOpacity>

      {/* Tarjeta de Repositorio GitHub */}
      <TouchableOpacity
        style={[globalStyles.tarjeta, styles.tarjetaContacto]}
        onPress={() => abrirEnlace("https://github.com/anaforigua")}
        activeOpacity={0.8}
      >
        <View style={styles.contenedorIcono}>
          <FontAwesome name="github" size={30} color="#0f172a" />
        </View>
        <View style={styles.textoContainer}>
          <Text style={styles.tituloSeccion}>Repositorio de GitHub</Text>
          <Text style={styles.detalleContacto}>github.com/anaforigua</Text>
          <Text style={styles.enlaceTexto}>Toca para ver proyectos →</Text>
        </View>
      </TouchableOpacity>

     

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  imagenPerfil: {
    width: 110,
    height: 110,
    borderRadius: 55, 
    borderWidth: 3,
    borderColor: "#2563eb", 
    backgroundColor: "#e2e8f0",
  },
  tituloPrincipal: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0f172a",
    textAlign: "center",
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2563eb",
    textAlign: "center",
    marginBottom: 12,
  },
  descripcionPerfil: {
    fontSize: 14,
    color: "#475569",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 20,
  },
  seccionTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 12,
    marginTop: 8,
  },
  tarjetaContacto: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#2563eb",
    marginBottom: 14,
  },
  contenedorIcono: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  textoContainer: {
    flex: 1,
  },
  tituloSeccion: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a",
  },
  detalleContacto: {
    fontSize: 13,
    color: "#475569",
    marginTop: 2,
  },
  enlaceTexto: {
    fontSize: 12,
    fontWeight: "600",
    color: "#2563eb",
    marginTop: 6,
  },
  tarjetaPerfilTecnico: {
    borderLeftWidth: 4,
    borderLeftColor: "#0f172a",
    padding: 16,
    marginBottom: 24,
  },
  textoPerfilTecnico: {
    fontSize: 13,
    color: "#475569",
    lineHeight: 20,
  },
});