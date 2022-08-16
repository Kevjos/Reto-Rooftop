const {
  obtenerUrlString,
  obtenerLetraCorrespondiente,
  encontrarNumeroMayor,
} = require("../index");
const cifrado = require("../significadoClaves.json");
const urlEncriptada = require("../posiciones.json");

describe("objectContaining in cifrado", () => {
  const expected = { R: "68b03633-1844-4389-ac2c-29aef0bd870e" };

  it("matches if the actual object does contain expected key: value pairs", () => {
    expect(cifrado).toEqual(expect.objectContaining(expected));
  });
});

describe("objectContaining in urlEncriptada", () => {
  const expected = { "13d490ab-0959-4e92-a5c8-4994f06c16bf": [4, 11, 28, 69] };

  it("matches if the actual object does contain expected key: value pairs", () => {
    expect(urlEncriptada).toEqual(expect.objectContaining(expected));
  });
});

describe("objectContaining in obtenerLetraCorrespondiente", () => {
  const expected = { 1: [34] };

  it("matches if the actual object does contain expected key: value pairs", () => {
    expect(obtenerLetraCorrespondiente()).toEqual(
      expect.objectContaining(expected)
    );
  });
});

test('obtenerUrlSrtring to be truthy', () => {
  expect(obtenerUrlString()).toBeTruthy();
  expect(obtenerUrlString()).not.toBeNull();
});

test("obtenerLetraCorrespondiente to be truthy", () => {
  expect(obtenerLetraCorrespondiente()).toBeTruthy();
  expect(obtenerLetraCorrespondiente()).not.toBeNull();
});

test("encontrarNumeroMayor to be truthy", () => {
  expect(encontrarNumeroMayor()).toBeTruthy();
  expect(encontrarNumeroMayor()).not.toBeNull();
  expect(encontrarNumeroMayor()).toBeGreaterThan(10);
});

test("Returns url string", () => {
  expect(obtenerUrlString()).toMatch(/http/);
  expect(obtenerUrlString()).toBe(
    "https://docs.google.com/forms/d/e/1FAIpQLScpWkGfrPhqnDaqjSiewRCux257WsjxfHvz7y5qT8COTYFnyg/viewform"
  );
});