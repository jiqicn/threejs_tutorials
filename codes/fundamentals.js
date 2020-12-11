import * as THREE from "./three.js-master/build/three.module.js"

function main() {
    // WebGL renderer
    const canvas = document.querySelector("#c")
    const renderer = new THREE.WebGLRenderer({canvas})

    // Camera
    const fov = 75
    const aspect = 2
    const near = 0.1
    const far = 5
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.z = 2

    // sense
    const scene = new THREE.Scene()
}