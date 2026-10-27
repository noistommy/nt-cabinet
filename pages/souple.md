---
layout: doc

title: Souple
#titleTemplate:
description: Web Responsive viewer
lastUpdated: true
editLink: true
navbar: true
sidebar: true
aside: true
outline: deep
---

# Souple

<p>Web Responsive viewer</p>
<BeTag class="deepblue">Tavascript</BeTag>
<BeTag class="blue">React</BeTag>
<BeTag class="red">NPM</BeTag>
<BeTag class="gray">Utills</BeTag>

_2026년 10월 개발_ | _React 기반_ | _NPM_ | _라이브러리_

## 소개

Souple (souple / 수플) : 프랑스어로 '유연한, 신축성 있는'이라는 뜻으로, 반응형(Flexible)의 의미를 그대로 담고 있습니다.

Souple은 페이지 내부에서 화면 크기에 따라 반응형 웹 페이지를 테스트 할 수 있는 웹 뷰어 모듈입니다. 기본 19개의 디바이스를 크기를 제공하며, 디바이스 및 뷰포트 설정을 통해 반응형 웹 페이지를 테스트 할 수 있습니다. Device 크기 이외에도 뷰포트 가로/세로 모드 변경을 통해 다양한 반응형 웹을 테스트 할 수 있습니다.

Souple is a web viewer module that allows you to test responsive web pages across different screen sizes directly within the page. It provides 19 default device sizes, enabling responsive web testing through customizable device and viewport settings. Beyond preset device sizes, you can test a wide range of responsive webs by toggling between landscape and portrait viewport modes.

## Demo

![docs_preview](https://github.com/user-attachments/assets/4b8013c5-e791-4ad9-bdf5-987bdf3aa49f)

<div class="be-button">
  <i class="icon left xi-link" />
  @noistommy/souple
  <a class="link" href="https://noistommy.github.io/souple" target="_blank" />
</div>
Demo page

## Install

```bash
npm install @noistommy/souple
```

## How to work

::: code-group

```tsx [Registration]
import { Souple } from "@noistommy/souple";
import "@noistommy/souple/souple.css";
```

```tsx [Usage]
export default Exanple() {
  const [device, setDevice] = useState<string>('desktop')

  const handleChangeDevice = (d) => setDevice(d)
  return (
    <Souple currentDevice={device} changeDevice={handleChangeDevice}>
      <Souple.Control
        showSelector={true}
        showTypeSelector={true}
        showLabel={true}
        showLandscape={true}
      />
      <Souple.Viewport />
    </Souple>
  )
}
```

## Default Devices(ALL_DEVICE_LIST)

| Device              | width | height | type    |
| ------------------- | ----- | ------ | ------- |
| Desktop Large       | 2560  | 1440   | Desktop |
| Desktop             | 1920  | 1080   | Desktop |
| Desktop Small       | 1440  | 900    | Desktop |
| Laptop              | 1366  | 768    | Desktop |
| Ipad Pro            | 1024  | 1366   | Tablet  |
| Ipad Air            | 820   | 1180   | Tablet  |
| Tablet              | 1024  | 768    | Tablet  |
| Iphone 15 Pro Max   | 430   | 932    | Mobile  |
| Iphone 14 Plus      | 428   | 926    | Mobile  |
| Galaxy S23 Ultra    | 412   | 915    | Mobile  |
| Iphone 15           | 393   | 852    | Mobile  |
| Iphone 13           | 390   | 844    | Mobile  |
| Pixel 7             | 412   | 892    | Mobile  |
| Mobile              | 375   | 667    | Mobile  |
| Iphone SE           | 375   | 667    | Mobile  |
| Galaxy S8           | 360   | 740    | Mobile  |
| Galaxy Z Fold       | 344   | 882    | Fold    |
| Galaxy Z Fold Ultra | 674   | 691    | Fold    |
| Iphone Duo          | 626   | 890    | Fold    |

## Props

#### Souple Root

| Name          | Type       | Default           | Description                                                                                          |
| ------------- | ---------- | ----------------- | ---------------------------------------------------------------------------------------------------- |
| currentDevice | _string_   | `desktop`         | Set Initialize device.                                                                               |
| changeDevice  | _function_ | `() => {}`        | Callback function when device is chaged.                                                             |
| devices       | _object_   | `ALL_DEVICE_LIST` | device name, size ( width, height ) list                                                             |
| dWidth        | _number_   | `null`            | Override device width                                                                                |
| dHeight       | _number_   | `null`            | Override device height                                                                               |
| minWidth      | _number_   | `1024`            | Minimum width (px). If the screen size is smaller than this value, the souple will not be displayed. |

#### Souple Control

| Name             | Type      | Default | Description                        |
| ---------------- | --------- | ------- | ---------------------------------- |
| showSelector     | _boolean_ | `true`  | Show device selector.              |
| showTypeSelector | _boolean_ | `true`  | Show device type selector.         |
| showSize         | _boolean_ | `true`  | Show device size label.            |
| showlandscape    | _boolean_ | `true`  | Show landscape mode toggle button. |

## Link

<div class="be-button">
  <i class="icon left xi-github" />
  Github
  <a class="link" href="https://github.com/noistommy/souple.git" target="_blank" />
</div>
<div class="be-button">
  <i class="icon left xi-package" />
  npm
  <a class="link" href=" https://www.npmjs.com/package/@noistommy/souple" target="_blank" />
</div>
