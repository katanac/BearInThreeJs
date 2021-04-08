var scene, camera, renderer;
var Head, eyeOne, eyeTwo, noise, noiseBlack, jaw, mouth, mouthBlack, earOne, earTwo;
var Tummy, arm, armTwo, feet, feetTwo, shoulder, shoulderTwo, claw, clawTwo, tail;
var controls, stats;

const animate = function() {
    controls.update();
    stats.update();

    requestAnimationFrame(animate);

    //positions head
    Tummy.rotation.y += 0.01;
    Head.position.set(0, 1.5, 0);
    eyeOne.position.set(-0.4, 0, 0.9);
    eyeTwo.position.set(0.4, 0, 0.9);
    noise.position.set(0, -0.2, 1.1);
    noiseBlack.position.set(0, -0.34, 1.145);
    jaw.position.set(0, -0.4, 0.9);
    mouth.position.set(0, -0.25, 0);
    mouthBlack.position.set(0, -0.25, 0.02);
    earOne.position.set(0.5, 0.8, 0.2);
    earTwo.position.set(-0.5, 0.8, 0.2);

    //positions body
    arm.position.set(-0.89, -0.1, 0);
    armTwo.position.set(0.89, -0.1, 0);
    shoulder.position.set(-0.9, 0.4, 0);
    shoulderTwo.position.set(0.9, 0.4, 0);
    feet.position.set(-0.4, -1, 0);
    feetTwo.position.set(0.4, -1, 0);
    claw.position.set(0.4, -1.5, 0);
    clawTwo.position.set(-0.4, -1.5, 0);
    tail.position.set(0, -0.4, -0.9);
    //render
    renderer.render(scene, camera);
};

function createCamera() {
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    camera.position.z = 5;
}

function createRender() {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}


function createTummy() {
    let geometry = new THREE.SphereGeometry(1, 8, 8);
    let material = new THREE.MeshBasicMaterial({ color: 0x783F04 });
    Tummy = new THREE.Mesh(geometry, material);
    Tummy.add(arm);
    Tummy.add(armTwo);
    Tummy.add(shoulder);
    Tummy.add(shoulderTwo);
    Tummy.add(feet);
    Tummy.add(feetTwo);
    Tummy.add(claw);
    Tummy.add(clawTwo);
    Tummy.add(Head);
    Tummy.add(tail);
    scene.add(Tummy);
}


function createHead() {
    let geometry = new THREE.SphereGeometry(1, 8, 8);
    let material = new THREE.MeshBasicMaterial({ color: 0x783F04 });
    Head = new THREE.Mesh(geometry, material);
    Head.add(eyeTwo);
    Head.add(eyeOne);
    Head.add(noise);
    Head.add(noiseBlack);
    Head.add(jaw);
    Head.add(earOne);
    Head.add(earTwo);
}

function createEyes() {
    let geometry = new THREE.SphereGeometry(0.1, 8, 8);
    let material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    eyeOne = new THREE.Mesh(geometry, material);
    eyeTwo = new THREE.Mesh(geometry, material);
}


function createNoise() {
    const geometry = new THREE.ConeGeometry(0.1, 0.1, 0.1);
    const material = new THREE.MeshBasicMaterial({ color: 0x000000 });

    const geometryBlack = new THREE.BoxGeometry(0.01, 0.2, 0.1);
    const materialBlack = new THREE.MeshBasicMaterial({ color: 0x000000 });

    noise = new THREE.Mesh(geometry, material);
    noiseBlack = new THREE.Mesh(geometryBlack, materialBlack);

}

function createJaw() {
    const geometry = new THREE.SphereGeometry(0.3, 0.3, 0.5);
    const material = new THREE.MeshBasicMaterial({ color: 0x52300C });
    jaw = new THREE.Mesh(geometry, material);
    jaw.add(mouth);
    jaw.add(mouthBlack);
}

function createMouth() {
    const geometry = new THREE.BoxGeometry(0.3, 0.1, 0.3);
    const material = new THREE.MeshBasicMaterial({ color: 0x52300C });

    const geometryBlack = new THREE.BoxGeometry(0.2, 0.01, 0.3);
    const materialBlack = new THREE.MeshBasicMaterial({ color: 0x000000 });

    mouth = new THREE.Mesh(geometry, material);
    mouthBlack = new THREE.Mesh(geometryBlack, materialBlack);

}

function createEar() {
    let geometry = new THREE.SphereGeometry(0.3, 5, 3);
    let material = new THREE.MeshBasicMaterial({ color: 0x783F04 });
    earOne = new THREE.Mesh(geometry, material);
    earTwo = new THREE.Mesh(geometry, material);

}

function createArm() {
    const geometry = new THREE.CylinderGeometry(0.244, 0.25);
    const material = new THREE.MeshBasicMaterial({ color: 0x52300C });
    arm = new THREE.Mesh(geometry, material);
    armTwo = new THREE.Mesh(geometry, material);


    let geometryShoulder = new THREE.SphereGeometry(0.4, 5, 3);
    let materialShoulder = new THREE.MeshBasicMaterial({ color: 0x783F04 });
    shoulder = new THREE.Mesh(geometryShoulder, materialShoulder);
    shoulderTwo = new THREE.Mesh(geometryShoulder, materialShoulder);
}


function createFeet() {
    const geometry = new THREE.CylinderGeometry(0.25, 0.25);
    const material = new THREE.MeshBasicMaterial({ color: 0x52300C });
    feet = new THREE.Mesh(geometry, material);
    feetTwo = new THREE.Mesh(geometry, material);

}


function createClaw() {
    const geometry = new THREE.SphereGeometry(0.3, 0.3, 0.5);
    const material = new THREE.MeshBasicMaterial({ color: 0x52300C });
    claw = new THREE.Mesh(geometry, material);
    clawTwo = new THREE.Mesh(geometry, material);

}

function createTail() {
    let geometry = new THREE.SphereGeometry(0.1, 8, 8);
    let material = new THREE.MeshBasicMaterial({ color: 0x52300C });
    tail = new THREE.Mesh(geometry, material);
}


function createStats() {
    stats = new Stats();
    stats.setMode(2);
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "100px";
    stats.domElement.style.top = "10px";
    document.getElementById("myStats").appendChild(stats.domElement);
    return stats;
}

function init() {
    //create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x6FA8DC);


    //create camera
    createCamera();

    //create render
    createRender();
    //controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    //create beard
    //head
    createEyes();
    createNoise();
    createMouth();
    createJaw();
    createEar();
    createHead();
    //body
    createArm();
    createFeet();
    createClaw();
    createTail();
    createTummy();

    //stats
    createStats();


}


init();
requestAnimationFrame(animate);