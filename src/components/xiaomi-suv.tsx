import {useGLTF} from '@react-three/drei'
// @ts-ignore
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

const CoolCar = () => {
	const {nodes, materials, scene} = useGLTF('/model/xiaomi-suv/scene.gltf')
	console.log(scene)

	return (
		<primitive scale={[1, 1, 1]} object={scene}/>
	)
}

export default CoolCar