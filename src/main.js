const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.TextureLoader().load('assets/textures/orange.jpg');
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
document.body.appendChild( renderer.domElement );

const floorTexture = new THREE.TextureLoader().load('assets/textures/floor.jpg');
const ceilingTexture = new THREE.TextureLoader().load('assets/textures/ceiling.jpg');
const waterTexture = new THREE.TextureLoader().load('assets/textures/water.jpg');
const rugTexture = new THREE.TextureLoader().load('assets/textures/rug.jpg');
const MirrorTexture = new THREE.TextureLoader().load('assets/textures/mirror.jpg');
const DOOR = new THREE.TextureLoader().load('assets/textures/door.jpg');
const CURTAIN = new THREE.TextureLoader().load('assets/textures/curtain.jpg');

function addLighting() {
    const light = new THREE.PointLight( 0xfff9e8, 1, 100 );
    light.position.set( -6, 11, 0 );
    scene.add( light );

    const bulbGeometry = new THREE.CylinderGeometry(1, 2, 2, 4);
    const bulbMaterial = new THREE.MeshMatcapMaterial({color: 0xffffff});
    const bulb = new THREE.Mesh(bulbGeometry, bulbMaterial);
    scene.add(bulb);

    bulb.position.set(0, 20, -15);

}

function addFloorAndCeiling() {
    const geometry = new THREE.BoxGeometry( 34, .2, 15, 5 );
    const material = new THREE.MeshLambertMaterial({ map: floorTexture });
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    const ceilinggeometry = new THREE.BoxGeometry( 34, .2, 15, 5 );
    const ceilingmaterial = new THREE.MeshLambertMaterial({ map: ceilingTexture });
    const ceiling = new THREE.Mesh( ceilinggeometry, ceilingmaterial );
    scene.add( ceiling );

    cube.position.z = -15;
    ceiling.position.z = -15;
    ceiling.position.y = 19.9;
}

function addWalls() {
    const wallGeometry = new THREE.BoxGeometry(2, 20, 15, 5);
    const wallMaterial = new THREE.MeshLambertMaterial({ map: ceilingTexture });
    const wall1 = new THREE.Mesh(wallGeometry, wallMaterial);
    scene.add(wall1);
    const wall2 = new THREE.Mesh(wallGeometry, wallMaterial);
    scene.add(wall2);


    const backGeometry = new THREE.BoxGeometry(32, 20, .2, 5);
    const backMaterial = new THREE.MeshLambertMaterial({map: ceilingTexture});
    const backwall = new THREE.Mesh(backGeometry, backMaterial);
    scene.add(backwall);

    wall1.position.set(16, 10, -15);
    wall2.position.set(-16, 10, -15);
    backwall.position.set(0, 10, -22);
}

function addBathtub() {
    const bathtubGmtry1 = new THREE.BoxGeometry(7, 6, 2.5, 5);
    const bathtubMat1 = new THREE.MeshLambertMaterial({});
    const bathtub1 = new THREE.Mesh(bathtubGmtry1, bathtubMat1);
    scene.add(bathtub1);
    const bathtub4 = new THREE.Mesh(bathtubGmtry1, bathtubMat1);
    scene.add(bathtub4);

    const bathtubGmtry2 = new THREE.BoxGeometry(1, 6, 8, 5);
    const bathtubMat2 = new THREE.MeshLambertMaterial({});
    const bathtub2 = new THREE.Mesh(bathtubGmtry2, bathtubMat2);
    scene.add(bathtub2);
    const bathtub3 = new THREE.Mesh(bathtubGmtry2, bathtubMat2);
    scene.add(bathtub3);

    const waterGmtry = new THREE.BoxGeometry(5, 6, 8, 5);
    const waterMat = new THREE.MeshStandardMaterial({
    map: waterTexture,
    transparent: true,
    opacity: 0.8,
});
    const water = new THREE.Mesh(waterGmtry, waterMat);
    scene.add(water);

    bathtub1.position.set(11.5, 3, -9);
    bathtub2.position.set(8.5, 3, -14);
    bathtub3.position.set(14.5, 3, -14);
    bathtub4.position.set(11.5, 3, -19);

    water.position.set(11.5, 2.8, -14);

}

function bathroomStuff() {
    const matgeometry = new THREE.CircleGeometry( 5, 32 );
    const matmaterial = new THREE.MeshLambertMaterial({ map: rugTexture });
    const mat = new THREE.Mesh( matgeometry, matmaterial );
    mat.rotation.x = -Math.PI / 2;
    scene.add( mat );

    mat.position.set(5,.2,-15);

    const sinkneckG = new THREE.CylinderGeometry(1, 1, 6, 32);
    const sinkneckM = new THREE.MeshLambertMaterial({});
    const sinkneck = new THREE.Mesh(sinkneckG, sinkneckM);
    scene.add(sinkneck);

    const sinkheadG = new THREE.CylinderGeometry(4, 1, 3, 32);
    const sinkheadM = new THREE.MeshLambertMaterial({});
    const sinkhead = new THREE.Mesh(sinkheadG, sinkheadM);
    scene.add(sinkhead);

    sinkneck.position.set(-2, 3, -20);
    sinkhead.position.set(-2, 5, -20);

    const mirrorG = new THREE.CircleGeometry(5, 32);
    const mirrorM = new THREE.MeshLambertMaterial({map: MirrorTexture});
    const mirror = new THREE.Mesh(mirrorG, mirrorM);
    scene.add(mirror);

    const mirrorframeG = new THREE.CircleGeometry(5.5, 32);
    const mirrorframeM = new THREE.MeshLambertMaterial({});
    const mirrorframe = new THREE.Mesh(mirrorframeG, mirrorframeM);
    scene.add(mirrorframe);

    mirror.position.set(-2, 12, -21);
    mirrorframe.position.set(-2, 12, -21.5);

    const doorG = new THREE.BoxGeometry(1, 13, 4, 5);
    const doorM = new THREE.MeshLambertMaterial({map: DOOR});
    const door = new THREE.Mesh(doorG, doorM);
    scene.add(door);

    door.position.set(-15, 6, -12);

    const curtainG = new THREE.BoxGeometry(.2, 17.5, 8, 5);
    const curtainM = new THREE.MeshStandardMaterial({
    map: CURTAIN,
    transparent: true,
    opacity: .82,
})
    const curtain = new THREE.Mesh(curtainG, curtainM);
    scene.add(curtain);

    curtain.position.set(6, 10.5, -10);
}

function addFaucet() {
    const faucetG = new THREE.BoxGeometry(1, .7, 3.2, 5);
    const fuacetM = new THREE.MeshLambertMaterial({});
    const faucet1 = new THREE.Mesh(faucetG, fuacetM);
    const faucet2 = new THREE.Mesh(faucetG, fuacetM);
    scene.add(faucet1);
    scene.add(faucet2);
    
    const faucetturn1G = new THREE.BoxGeometry(.5, .5, 1, 5);
    const faucetturn1M = new THREE.MeshLambertMaterial({color: 0xbd0f2c});
    const faucetturn2M = new THREE.MeshLambertMaterial({color: 0x1c11ba});
    const faucetturn1 = new THREE.Mesh(faucetturn1G, faucetturn1M);
    const faucetturn2 = new THREE.Mesh(faucetturn1G, faucetturn2M);
    const faucetturn3 = new THREE.Mesh(faucetturn1G, faucetturn1M);
    const faucetturn4 = new THREE.Mesh(faucetturn1G, faucetturn2M);
    scene.add(faucetturn1);
    scene.add(faucetturn2);
    scene.add(faucetturn3);
    scene.add(faucetturn4);

    faucet1.position.set(-2, 7.2, -18);
    faucet2.position.set(12, 6.5, -10);
    faucetturn1.position.set(-2.9, 7, -20);
    faucetturn2.position.set( -1.3, 7, -20);
    faucetturn3.position.set(12.7, 6.5, -9);
    faucetturn4.position.set(11, 6.5, -9);
}

camera.position.set(0, 11, 11);

function animate() {

	renderer.render( scene, camera );
}

function init() {
    addLighting();
    addFloorAndCeiling();
    addWalls();
    addBathtub();
    bathroomStuff();
    addFaucet();
    
    renderer.setAnimationLoop( animate );
}

init();
