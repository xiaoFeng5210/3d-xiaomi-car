// @flow 
import * as React from 'react';
import * as Three from 'three';

	
const SpotlightPlane = () => {
	return (
			<mesh receiveShadow position={[0, -0.12, 0]} rotation={[Math.PI / 2, 0, 0]}>
				<meshPhongMaterial side={Three.DoubleSide} color={"#00ff1a"} emissive="#ac8f3e"/>
				<planeGeometry args={[50, 50]} />
			</mesh>
	);
};

export default SpotlightPlane