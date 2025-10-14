import * as THREE from 'three'
// Canvas
const canvas = document.querySelector('canvas.webgl')
// Scene
const scene = new THREE.Scene()

// Nucleus
const nucleus = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 16),
    new THREE.MeshBasicMaterial({ color: 'blue', wireframe: true})
)
scene.add(nucleus)

// First ring - flat
const torus1 = new THREE.Mesh(
    new THREE.TorusGeometry(1.8, 0.05, 16, 100),
    new THREE.MeshBasicMaterial({ color: 'aquamarine'})
)
torus1.rotation.x = Math.PI / 20
scene.add(torus1)

// Second ring - standing up
const torus2 = new THREE.Mesh(
    new THREE.TorusGeometry(1.8, 0.05, 16, 100),
    new THREE.MeshBasicMaterial({ color: 'aquamarine'})
)
scene.add(torus2)

// Third ring - tilted
const torus3 = new THREE.Mesh(
    new THREE.TorusGeometry(1.8, 0.05, 16, 100),
    new THREE.MeshBasicMaterial({ color: 'aquamarine'})
)
torus3.rotation.y = Math.PI / 7
scene.add(torus3)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animation - each ring spins on its own
const tick = () => {
    nucleus.rotation.y += 0.01  
    torus1.rotation.x += 0.01  
    torus2.rotation.y += 0.015 
    torus3.rotation.x += 0.02  
    
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick()