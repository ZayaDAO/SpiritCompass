/* eslint-disable no-unused-expressions */
import react, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import * as $ from 'jquery'
import SimplexNoise from 'simplex-noise';
// const require('./three.js')
const THREE = window.THREE;
const ethers = require('ethers');

// The Contract interface
let abi = [
    "event ValueChanged(address indexed author, string oldValue, string newValue)",
    "constructor(string value)",
    "function getValue() view returns (string value)",
    "function setValue(string value)"
];

// Connect to the network
let provider = ethers.getDefaultProvider();

// The address from the above deployment example
let contractAddress = "0x2bD9aAa2953F988153c8629926D22A6a5F69b14E";

function Orb() {
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

function App() {

  const clicked = async (num) => {
    console.log(num)
    // We connect to the Contract using a Provider, so we will only
    // have read-only access to the Contract
    let contract = new ethers.Contract(contractAddress, abi, provider);

    let tx = await contract.scry(num)
    console.log(tx)

  }
  return (
    <div>
       <Orb/>
      <div className="pallette">
        <div className='color' onClick={() => clicked(1)} style={{background: '#716BC1'}}></div>
        <div className='color' onClick={() => clicked(2)} style={{background: '#3895CC'}}></div>
        <div className='color' onClick={() => clicked(3)} style={{background: '#89BECC'}} ></div>
        <div className='color' onClick={() => clicked(4)} style={{background: '#52E57E'}}></div>
        <div className='color' onClick={() => clicked(5)} style={{background: '#F0AC4A'}}></div>
        <div className='color' onClick={() => clicked(6)} style={{background: '#E9832B'}}></div>
        <div className='color' onClick={() => clicked(7)} style={{background: '#F07780'}}></div>
    </div>
    </div>
  );
}

export default App;
