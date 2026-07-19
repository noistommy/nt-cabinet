<script setup>
  import * as THREE from 'three'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  
  import {ref, reactive, computed, watch, onMounted} from 'vue'

  const props = defineProps({
    type: {
      type: String,
      default: 'main'
    }
  })
  
  const isPen = ref(false)
  const isIdle = ref(true)
  const lean = ref(0)

  let a_speed = 1
  let model = null
  let mixer = null
  let actions = reactive({})
  let currentAction = null
  let actionName = ref('Offencive Idle')
  let forwardAction = ref('Standard Walking')
  let camera = null
  let renderer = null
  let containerW = 0
  let containerH = 0
  
  let scrollCount = 0
  let scrollDir = 1
  // get scroll speed
  let scrollSpeed = 0
  let lastScrollTop = 0
  let lastScrollTime = 0

  const getScrollSpeed = (scrollTop, now) => {
    if (!lastScrollTime) {
      lastScrollTop = scrollTop
      lastScrollTime = now
      return 0
    }
    const deltaScroll = scrollTop - lastScrollTop
    const deltaTime = now - lastScrollTime
    lastScrollTop = scrollTop
    lastScrollTime = now
    return deltaTime > 0 ? deltaScroll / deltaTime : 0  // px/ms
  }

  const speeds = {
    'Walking': 1,
    'Agree': 1,
    'Boxing': 1,

    'Ork_Walk': 0.3,
    'Drunken': 0.5,
    'Running': 2,
    'Run_Fast': 4
  }

  const gesture = [
    // 'Pitching', 
    // 'Golf Chip', 
    'Backflip', 
    'Clapping', 
    'Soccer Pass', 
    'Climbing Rope',
    // 'Walk In Circle',
    // 'Spinning',
    // 'Treading Water',
    'Waving',
    'Walk Left',
    // 'Entry'
  ]

  const logs = reactive({
    camera: ''
  })
  
  const camera_log = computed(() => {
    return logs.camera
  })
    
  const container = ref(null);


  
  const ntThree = () => {
    if (!container.value) return
    
    const scene = new THREE.Scene()
    containerW = container.value.clientWidth
    containerH = container.value.clientHeight

    const ratio = containerW / containerH || 1
    const frustumSize = 1.1
    const p_camera = new THREE.PerspectiveCamera(35, ratio, 0.1, 100)
    const o_camera = new THREE.OrthographicCamera(-frustumSize * ratio, frustumSize * ratio, frustumSize, -frustumSize, 0.1, 100);
  
    camera = o_camera
    camera.position.set(0, 1.5, 4)
  
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
    loader.load('/models/tinokio_v3.0.glb', gltf => {
      model = gltf.scene
      model.scale.set(0.01, 0.01, 0.01);
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
      playAnimation(actionName.value)

  
      renderer.setAnimationLoop(animate);
  
    }, undefined, error => {
      console.log('GLB load error:', error)
    })
    
    const clock = new THREE.Clock()
    let oldElapsedTime = 0

    const animate = () => {
      // const deltaTime = clock.getDelta()
      const elapsedTime = clock.getElapsedTime()
      const deltaTime = elapsedTime - oldElapsedTime
      oldElapsedTime = elapsedTime

      const scene_speed = 0.8
      mixer.update(deltaTime * scene_speed)
  
      if (isPen.value) controlCamera()

      if (scrollCount > 5) {
        isIdle.value = false
        if (model.rotation.y <= Math.PI / 2) {
          model.rotation.y += 0.1
        }
        playAnimation(forwardAction.value)
        
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
        // playAnimation('Walk In Circle')    
        if (model.rotation.y <= 0) {
          model.rotation.y += 0.1
        } else {
          if (!isIdle.value) {
            isIdle.value = true
            actionName.value = 'Offencive Idle'
          }
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
      // scrollSpeed = Math.abs(getScrollSpeed(scrollEl.scrollTop, performance.now()))
      // if (scrollSpeed * 1000 < 100) {
      //   changeAction(1)
      // } else if (scrollSpeed * 1000 > 500) {
      //   changeAction(3)
      // } else {
      //   changeAction()
      // }
      if (!permission.value) requestDeviceOrientationPermission()
    })
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey) {
        if (e.key == 'p') isPen.value = true
        if (e.key == 'q') changeAction()
      }
      if (e.keyCode === 27) {
        isPen.value = false
        resetCamera()
      }
      // console.log(e)
    } )
    
    setInterval(() => {
      const num = parseInt(Math.random() * 100) % gesture.length
      if (isIdle.value && !lean.value) playOnceAnimation(gesture[num])
    }, 10000);
    
  }
  onMounted(ntThree)

  watch(() => lean.value, value => {
      
      const num = parseInt(Math.random() * 100) % gesture.length
      console.log(value, value > 0)
      if (value && isIdle.value) {
        playAnimation('Walk Left', value > 0)
      } else {
        playOnceAnimation(gesture[num], false)
      }
  })
  
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
  function playOnceAnimation(name) {
    currentAction?.fadeOut(0.3)
    actions[name].setLoop(THREE.LoopOnce)
    actions[name].clampWhenFinished = true
    actions[name].reset().fadeIn(0.3).play()
    currentAction = actions[name]
    actionName.value = name
    mixer.addEventListener('finished', () => {
      playAnimation('Offencive Idle') 
    })
  }
  const radius = 4;
  let angle = Math.PI / 2;
  const c_speed = 0.005;
  let cc = false
  const controlCamera = () => {
    angle += c_speed * (cc ? 1 : -1);
    camera.position.x = Math.cos(angle) * radius
    camera.position.z = Math.sin(angle) * radius
    camera.position.y = 1
  }
  const resetCamera = () => {
    camera.position.set(0, 1.5, 4)
  }
  const forwardList = ['Standard Walking', 'Soft Walking', 'Happy Walking', 'Running']
  const changeAction = (forward = null) => {
    if (forwardAction.value === forwardList[forward]) return
    if (forward) {
      forwardAction.value =  forwardList[forward]
    } else {

      let currentIndex = forwardList.findIndex(c => c === forwardAction.value)
      let nextIndex = currentIndex + 1 === forwardList.length ? 0 : currentIndex + 1
      forwardAction.value =  forwardList[nextIndex]
    }
    a_speed = forwardAction.value === 'Running' ? 2 : forwardAction.value === 'Soft Walking' ? 0.2 : 1
  }
  const permission = ref(false)
  function requestDeviceOrientationPermission() {
    // console.log(DeviceOrientationEvent.requestPermission)
    if (
      typeof DeviceOrientationEvent !== 'undefined' &&
      typeof DeviceOrientationEvent.requestPermission === 'function'
    ) {
      DeviceOrientationEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            permission.value = permissionState
            window.addEventListener('deviceorientation', handleOrientation);
          } else {
            console.error('권한이 거부되었습니다.');
          }
        })
        .catch(console.error);
    } else {
      permission.value = true
      // Android 또는 구형 기기 (권한 요청 불필요)
      window.addEventListener('deviceorientation', handleOrientation);
    }
  }
  const handleOrientation = (event) => {
    if (event.gamma > 10) {
      lean.value = 1
      // angle = Math.PI
      // controlCamera()
      // isPen.value = true
      // cc = true
    } else if (event.gamma < -10) {
      lean.value = -1
      // angle = 0
      // controlCamera()
      // isPen.value = true
      // cc = false
    } else {
      lean.value = 0
      // isPen.value = false
      // angle = Math.PI / 2
      // controlCamera()
    }
  }
  </script>
  
  <template>
    <div id="NTThree" class="container" :class="type">
      <slot name="header" />
      <div class="nt-canvas" ref="container"></div>
      <!-- <div class="permiss" v-if="!permission">
        <div class="be-tag label kbd" @click="requestDeviceOrientationPermission">
          <i class="icon xi-catched"></i>
        </div>
      </div> -->
      <!-- <div class="log">
        <div class="be-tag label kbd" @click="isPen = !isPen" :class="{active: isPen}">Pen</div>
        <div class="be-tag label kbd forward" @click="changeAction">
          <i class="icon" :class="forwardAction === 'Running' ? 'xi-run' : 'xi-walk'"></i> 
          {{forwardAction}}
        </div>
      </div> -->
    </div>
  </template>

  <style lang="scss" scoped>
    #NTThree {
      &.main {
        position: fixed; 
        top: 10dvh;
        left: 50%;
        z-index: 1;
      }
      

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
    .permiss {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      z-index:9999;
      padding: 5px;
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
  
