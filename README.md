# GithubUserSearchWeb (reactm redux, typescript) 버전
깃허브 유저이름으로 아이디를 찾는 간단한 웹 

## 사용한 기술
- React, styled-component, redux, typescript

## 구현한 기능

## 과정

### 1
<img src="https://user-images.githubusercontent.com/54402926/123619788-807d4080-d844-11eb-9186-04d8b8d6a7f9.png" width="350" height="300"/>

- 초기세팅 완료 후 전체적인 레이아웃 완성해 가는 중

### 2

<img src="https://user-images.githubusercontent.com/54402926/123739783-2f238e80-d8e2-11eb-87f6-5f71fe05659d.png" width="650" height="300"/>

- github 검색 API 연동 및 커스텀 hooks 작성 / apiList, localList 컴포넌트를 분리하여 userList에서 조건부 렌더링으로 해당하는 리스트가 보여질 수 있도록 구현

### 3

<img src="https://user-images.githubusercontent.com/54402926/124270002-90639000-db76-11eb-9ea4-0af46a9ff7ce.png" width="400" height="450"/>

- 각 리스트 sort로 정렬 후 로그인 아이디 첫 초성을 기준으로 첫 번째 아이템에 시작하는 문자가 나오도록 구현
- 즐겨찾기 등록 및 삭제 , 즐겨찾기 등록이 되어있는 아이템은 다시 검색시에 버튼이 활성화 되어있도록 구현
