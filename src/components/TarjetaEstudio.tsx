import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colores } from "../styles/globalStyles";

type Props = {
  titulo: string;
  institucion: string;
  anio: number;
  enCurso: boolean;
};

const TarjetaEstudio = ({ titulo, institucion, anio, enCurso }: Props) => {
  return (
    <View
      style={[
        estilos.tarjeta,
        enCurso ? estilos.enCurso : estilos.finalizado,
      ]}
    >
      <View style={estilos.headerFila}>
        <Text style={estilos.titulo}>{titulo}</Text>
        {enCurso && <Text style={estilos.badge}>En Curso</Text>}
      </View>
      <Text style={estilos.subtitulo}>{institucion}</Text>
      <Text style={estilos.anio}>{anio}</Text>
    </View>
  );
};

export default TarjetaEstudio;

const estilos = StyleSheet.create({
  tarjeta: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    borderWidth: 1,
    elevation: 1,
  },
  finalizado: {
    backgroundColor: colores.blanco,
    borderColor: colores.borde,
  },
  enCurso: {
    backgroundColor: "#eef2ff",
    borderColor: colores.azulPrimario,
  },
  headerFila: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: colores.textoPrincipal,
  },
  subtitulo: {
    fontSize: 14,
    color: colores.textoSecundario,
  },
  anio: {
    fontSize: 12,
    color: colores.grisClaro,
    marginTop: 4,
  },
  badge: {
    backgroundColor: "#7c3aed", // Cápsula morada del reto obligatorio
    color: colores.blanco,
    fontWeight: "bold",
    fontSize: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    overflow: "hidden",
  },
});