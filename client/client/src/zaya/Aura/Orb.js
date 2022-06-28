import React, {useState, useEffect} from 'react'
import SimplexNoise from 'simplex-noise';
import * as $ from 'jquery'
const THREE = window.THREE;

const Orb = (props) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    //mount orb
    if(!mounted){
          let ath = 0
    let last = 0;
    fetch('https://api.coingecko.com/api/v3/coins/ethereum')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        console.log(data)
        ath = data.market_data.ath.usd
        last = data.tickers[10].last
        console.log(last/ath)
        console.log(last)
        console.log(ath)
    })

      let speedSlider = 13,
        spikesSlider = 2,
        processingSlider = 1;

    let $canvas = $('#blob canvas'),
        canvas = $canvas[0],
        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            context: canvas.getContext('webgl2'),
            antialias: true,
            alpha: true
        }),
        simplex = new SimplexNoise();

    renderer.setSize($canvas.width(), $canvas.height());
    renderer.setPixelRatio(window.devicePixelRatio || 1);

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(45, $canvas.width() / $canvas.height(), 0.1, 1000);

    camera.position.z = 5;

    let geometry = new THREE.SphereGeometry(.8, 128, 128);

    let material = new THREE.MeshPhongMaterial({
        color: 0xC0FFEE,
        shininess: 1000
    });

    let lightTop = new THREE.DirectionalLight(0x69FFFF, .7);
    lightTop.position.set(0, 500, 200);
    lightTop.castShadow = true;
    scene.add(lightTop);

    let lightBottom = new THREE.DirectionalLight(0xB0D, .95);
    lightBottom.position.set(0, -500, 400);
    lightBottom.castShadow = true;
    scene.add(lightBottom);

    let ambientLight = new THREE.AmbientLight(0x798296);
    scene.add(ambientLight);

    let sphere = new THREE.Mesh(geometry, material);

    scene.add(sphere);
    console.log(sphere)
    let update = () => {

        let time = performance.now() * 0.00001 * speedSlider * Math.pow(processingSlider, 3),
            spikes = 2*(last/ath) * processingSlider;

        if(spikes){

        for(let i = 0; i < sphere.geometry.vertices.length; i++) {
            let p = sphere.geometry.vertices[i];
            p.normalize().multiplyScalar(1 + 0.3 * simplex.noise3D(p.x * spikes, p.y * spikes, p.z * spikes + time));
        }

        sphere.geometry.computeVertexNormals();
        sphere.geometry.normalsNeedUpdate = true;
        sphere.geometry.verticesNeedUpdate = true;
        }

    }

    function animate() {
        update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
      setMounted(true)
    }
  })  

  return (
    <div>
       <div id="blob">
          <canvas></canvas>
      </div>
    </div>
  );
}

export default Orb;
