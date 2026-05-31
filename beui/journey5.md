---
layout: doc

title: 새로운 여정 - AI 시대로
# titleTemplate: 새로운 여정 - AI 시대로
description: 지난 여정의 기반으로 새로운 AI시대에 들어가기
lastUpdated: true
editLink: true
navbar: true
sidebar: true
aside:  true
outline: deep

---

<h1>{{ $frontmatter.title }}</h1>
<p>{{ $frontmatter.description }}</p>


지금까지의 여정은 흩어진 컴포넌트를 통합하고, 무거운 공용 라이브러리에서 핵심 요소를 추출해 경량화하며, 스타일과 기능을 분리한 디자인 시스템과 Headless UI로 확장해 온 과정이었습니다. 그 과정에서 저는 공용 라이브러리가 왜 쉽게 부채가 되는지, 버전 관리와 모듈화가 왜 필수인지, 그리고 디자인 토큰과 컴포넌트 아키텍처가 어떻게 UI를 효율성을 진화시킬 수 있게 도와주는지 깊이 경험할 수 있었습니다.

이제 프론트엔드 개발 환경은 AI 코딩 보조 도구와 생성형 UI 도구가 자연스럽게 함께하는 시대로 넘어가고 있습니다. 저는 그 흐름 속에서, 앞선 여정에서 쌓아 온 디자인 시스템과 UI/UX 세부 기술에 대한 연구가 AI 시대의 화면 구성에 큰 기반이 될 수 있다고 생각합니다. 잘 정리된 디자인 토큰, Headless UI 구조, 일관된 API와 문서 체계는, 사람이 쓰기 편할 뿐 아니라 AI가 이해하고 활용하기에도 좋은 형태의 지식이기 때문입니다.

이 포트폴리오는 단순히 여러 UI 프로젝트를 나열한 목록이 아니라, 한 명의 프론트엔드 개발자가 문제를 인식하고, 구조를 설계하고, 점진적으로 개선해 온 여정 전체를 기록한 글입니다. 그리고 이 여정은 여기서 끝나지 않고, llms.txt, DESIGN.md와 SKILL.md 같은 문서화 방식, AI 코딩 보조 도구와의 연동, AI 기반 스타일링 워크플로우를 통해 계속 확장될 예정입니다. 저는 과거의 경험을 기반으로, 앞으로도 “사람과 AI가 함께 사용하는 UI 인프라”를 설계하고 실험하는 역할을 이어가고자 합니다.

감사합니다.

<script setup>
  const keyword = ['AI', 'design system', 'UI/UX', 'skills', 'context']
</script>

## Keyword


<BeButton v-for="word in keyword" :key="word" outline round compact>{{word}}</BeButton>

<style scoped>
 .main-image {
  width: 100%;
  /* border: 1px solid var(--brd); */
  margin-top: 30px;
  text-align: center;
  background-color: var(--base-color);
 }
 .main-image img {
  width: 100%;
  max-width: 500px;
  margin: 10px auto;
 }
 .caption {
  text-align: center;
  color: #aaa;
 }
 img {
  display: inline-block;
 }
 a {
  color: #a1a1a1;
 }
</style>