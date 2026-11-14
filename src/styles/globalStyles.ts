import { StyleSheet } from "react-native";

export const colores = {
  fondoGeneral: "#f8fafc",
  blanco: "#ffffff",
  textoPrincipal: "#0f172a",
  textoSecundario: "#475569",
  grisClaro: "#94a3b8",
  azulPrimario: "#2563eb",
  borde: "#e2e8f0",
};

export const globalStyles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondoGeneral,
  },
  contenido: {
    padding: 20,
  },
  tituloPrincipal: {
    fontSize: 20,
    fontWeight: "bold",
    color: colores.textoPrincipal,
    marginBottom: 12,
  },
  tarjeta: {
    backgroundColor: colores.blanco,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 1,
    borderWidth: 1,
    borderColor: colores.borde,
  },
});