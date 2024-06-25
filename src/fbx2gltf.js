const convert = require('fbx2gltf');

convert('resources/combine.fbx', 'resources/combine.glb', ['--khr-materials-unlit']).then(
  destPath => {
    // yay, do what we will with our shiny new GLB file!
  },
  error => {
    // ack, conversion failed: inspect 'error' for details
  }
);