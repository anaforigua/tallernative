import { ScrollView, Text } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";
import { globalStyles } from "../styles/globalStyles";

export default function Estudios() {
  return (
    <ScrollView style={globalStyles.contenedor} contentContainerStyle={globalStyles.contenido}>
      <Text style={globalStyles.tituloPrincipal}>Formación Académica</Text>
      
      <TarjetaEstudio
        titulo="Bachiller Académico"
        institucion="Gerardo Paredes Martinez"
        anio={2025}
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Técnico en Programación de Software"
        institucion="SENA - Centro de Gestión de Mercados, Logística y TIC"
        anio={2025}
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
};