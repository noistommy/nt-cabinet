<script setup>
  import * as THREE from 'three'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  
  import {ref, reactive, computed, onMounted} from 'vue'
  
  const isPen = ref(false)
  let a_speed = 1
  let model = null
  let mixer = null
  let actions = reactive({})
  let currentAction = null
  let actionName = ref('Walking')
  let forwardAction = ref('Walking')
  let camera = null
  let renderer = null
  let containerW = 0
  let containerH = 0
  
  let scrollCount = 0
  let scrollDir = 1
  // const speeds = {
  //   'Walking': 1,
  //   'Walk_Slow': 1,
  //   'Walk_Casual': 0.5,
  //   'Ork_Walk': 0.3,
  //   'Drunken': 0.5,
  //   'Running': 2,
  //   'Run_Fast': 4
  // }
  const logs = reactive({
    camera: ''
  })
  
  const camera_log = computed(() => {
    return logs.camera
  })
    
  const container = ref(null);
  
  const ntThree = () => {
    const scene = new THREE.Scene()
  
    if (!container.value) return
    containerW = container.value.clientWidth
    containerH = container.value.clientHeight
    const ratio = containerW / containerH || 1
    const frustumSize = 2
    const p_camera = new THREE.PerspectiveCamera(35, ratio, 0.1, 100)
    const o_camera = new THREE.OrthographicCamera(-frustumSize * ratio, frustumSize * ratio, frustumSize, -frustumSize, 0.1, 100);
  
    camera = p_camera
    camera.position.set(0, 1, 4)
  
    renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    })
    renderer.setSize(containerW, containerH)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
  
    container.value.appendChild(renderer.domElement)
  
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true  // 부드러운 회전 효과
    controls.dampingFactor = 0.05
    controls.target.set(0, 1, 0)   // 카메라 중심점 설정
  
    const gridHelper = setGrid()
    // scene.add(gridHelper)
  
    const planeGeometry = new THREE.PlaneGeometry(100, 100)
    const planeShadowMaterial = new THREE.ShadowMaterial({opacity: 0.2})
    const planeMaterial = new THREE.MeshStandardMaterial({
      roughness: 1,
      metalness: 0
    })
    const ground = new THREE.Mesh(planeGeometry, planeShadowMaterial)
    ground.rotation.x = -Math.PI / 2; // XZ 평면에 놓이도록 회전
    ground.receiveShadow = true // 그림자 받기 설정 
    scene.add(ground);
  
    const AmbiLight = new THREE.AmbientLight(0xffffff, 2)
    const DirLight = new THREE.DirectionalLight(0xffffff, 1)
  
    DirLight.position.set(0, 20, 10)
    DirLight.castShadow = true
  
  
    scene.add(AmbiLight)
    scene.add(DirLight)
  
    // const material = new THREE.MeshStandardMaterial({
    //   flatShading: true
    // });
  
  
  
    const loader = new GLTFLoader()
    loader.load('/models/Tinokio.glb', gltf => {
      model = gltf.scene
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true
          // child.material = material
        }
      })
      scene.add(model)
  
      mixer = new THREE.AnimationMixer(model)
      gltf.animations.forEach(clip => {
        actions[clip.name] = mixer.clipAction(clip)
      })
      playAnimation('Idle')

  
      renderer.setAnimationLoop(animate);
  
    }, undefined, error => {
      console.log('GLB load error:', error)
    })
    
    const clock = new THREE.Clock()
    const animate = () => {
      const deltaTime = clock.getDelta()
      const scene_speed = 0.5
      mixer.update(deltaTime * scene_speed)
  
      if (isPen.value) controlCamera()

      if (scrollCount > 5) {
        if (model.rotation.y <= Math.PI / 2) {
          model.rotation.y += 0.1
        }
        playAnimation(forwardAction.value, scrollCount > 0)
        
        if (model.position.x < 5) {
          model.position.x += 0.01 * a_speed
        }
      } else if (model.position.x > 0) {
        if (model.rotation.y >= Math.PI / -2) {
          model.rotation.y -= 0.1
        }
        model.position.x -= 0.01 * a_speed
                   
        // model.rotation.y = Math.PI / 2
      } else {
        playAnimation('Idle')   
        if (model.rotation.y <= 0) {
          model.rotation.y += 0.1
        }
      }
      // camera.position.y = 5        
      // camera.position.z = 0  
      if (currentAction !== actions[actionName.value]) {
        playAnimation(actionName.value)
      }
  
      controls.update()
      renderer.render(scene, camera)
    }
  
    
  
    document.addEventListener('resize', resize())
    document.addEventListener('scroll', (e) => {
      const scrollEl = e.target.scrollingElement
      scrollDir = scrollCount > scrollEl.scrollTop ? -1 : 1
      scrollCount = scrollEl.scrollTop
    })

  }
  onMounted(ntThree)
  
  const setGrid = (size = 40, divisions = 40) => {
    return new THREE.GridHelper( size, divisions );
  }
  
  const resize = () => {
    if (!container.value) return
    containerW = container.value.clientWidth
    containerH = container.value.clientHeight
  
    camera.aspect = containerW / containerH
    camera.updateProjectionMatrix()
  
    renderer.setSize(containerW, containerH)
  }
  
  const playAnimation = (name, timeScale = true) => {
    if (!actions[name]) return
    if (currentAction !== actions[name]) {
      currentAction?.fadeOut(0.3)
      actions[name].timeScale = timeScale ? 1 : -1
      actions[name].reset().fadeIn(0.3).play()
      currentAction = actions[name]
      actionName.value = name
    }
  }
  const radius = 4;
  let angle = 0;
  const c_speed = 0.005;
  const cc = -1
  const controlCamera = () => {
    angle += c_speed * cc;
    camera.position.x = Math.cos(angle) * radius
    camera.position.z = Math.sin(angle) * radius
    camera.position.y = 1
  }
  const changeAction = () => {
    forwardAction.value =  forwardAction.value === 'Running' ? 'Walking' : 'Running'
    a_speed = forwardAction.value === 'Running' ? 2 : 1
  }
  </script>
  
  <template>
    <div id="NTThree" class="container">
      <div class="nt-canvas" ref="container"></div>
      <div class="log">
        <div class="be-tag label kbd" @click="isPen = !isPen" :class="{active: isPen}">Pen</div>
        <div class="be-tag label kbd forward" @click="changeAction">
          <!-- xi-accessibility -->
          <i class="icon" :class="forwardAction === 'Running' ? 'xi-run' : 'xi-walk'"></i> 
          {{forwardAction}}
        </div>
      </div>
    </div>
  </template>

  <style lang="scss" scoped>
    #NTThree {
      position: fixed;
      
      top: 50px;
      left: 50%;
      
      z-index: 1;
      

      // z-index: 9999;
      // background-color: rgba(0, 0, 0, 0.16);
      .nt-canvas {
        pointer-events: none;
        max-width: 100%;
        width: 640px;
        height: 360px;
       
      }
      &:hover {
        .log {
          display: block;
        }
      }
    }
    .log {
      display:none;
      position: absolute;
      top: 10px;
      right: 0;
      z-index:9999;
      padding: 5px;
    }

    @media (max-width: 400px ) {
      #NTThree {
        transform: translateX(-50%);
      }
    }
  </style>
  