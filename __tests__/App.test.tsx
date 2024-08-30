import "react-native";
import React from "react";
import App from "../App";
import { Text } from "react-native"; // Asegúrate de importar Text

// Note: import explicitly to use the types shipped with jest.
import { it, describe, expect } from "@jest/globals";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

describe("App Component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Agrega más pruebas según sea necesario
  it("contains the expected elements", () => {
    const tree = renderer.create(<App />).root;
    // Ejemplo: Verifica que el componente contiene un texto específico
    const textElement = tree.findByType(Text); // Use the imported Text component
    expect(textElement.props.children).toBe("Expected Text");
  });
});
