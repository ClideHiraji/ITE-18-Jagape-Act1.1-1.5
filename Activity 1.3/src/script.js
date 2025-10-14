import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
* Objects
*/
const group = new THREE.Group()
group.scale.y = 2
group.rotation.y = 0.3
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.8, 0.8, 0.88, 10), 
    new THREE.MeshBasicMaterial({ color: 'aqua' })
)
cube1.position.x = -1.4
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.8, 0.8, 0.8, 10),  
    new THREE.MeshBasicMaterial({ color: 'blue' })
)
cube2.position.x = 0.3
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.8, 0.8, 0.78, 10),
    new THREE.MeshBasicMaterial({ color: 'violet' })
)
cube3.position.x = 2.3
group.add(cube3)

/**
* Axes Helper
*/
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)