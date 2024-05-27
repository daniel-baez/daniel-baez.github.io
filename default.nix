
{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  buildInputs = [
    pkgs.clojure
    pkgs.nodejs
    pkgs.openjdk
    pkgs.yarn
  ];
}
