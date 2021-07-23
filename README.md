# GithubUserSearchWeb (react redux, typescript) 버전
깃허브 유저이름으로 아이디를 찾는 간단한 웹 <br>
> Chrome, safari 브라우저에서 테스트 확인 / redux와 typescript를 공부하기 위해 만들어본 간단한 프로젝트 입니다.

[배포 AWS amplify](https://main.dbtepoau2lfan.amplifyapp.com/)

## 사용한 기술
- React, styled-component, redux, typescript

## 구현한 기능

- [x] 유저(name) 검색 
- [x] 유저 즐겨찾기 추가 및 삭제
- [x] 유저 리스트에서 첫 문자 ex) a,b,c 가 바뀌는 시점에만 첫 문자를 출력
- [x] 즐겨찾기 조회 및 삭제
- [x] 즐겨찾기 검색 

## 과정

### 1
<img src="https://user-images.githubusercontent.com/54402926/123619788-807d4080-d844-11eb-9186-04d8b8d6a7f9.png" width="350" height="300"/>

- [x] 초기세팅 완료 후 전체적인 레이아웃 완성해 가는 중

### 2

<img src="https://user-images.githubusercontent.com/54402926/123739783-2f238e80-d8e2-11eb-87f6-5f71fe05659d.png" width="650" height="300"/>

- [x] github 검색 API 연동 및 커스텀 hooks 작성 / apiList, localList 컴포넌트를 분리하여 userList에서 조건부 렌더링으로 해당하는 리스트가 보여질 수 있도록 구현

### 3

<img src="https://user-images.githubusercontent.com/54402926/124270002-90639000-db76-11eb-9ea4-0af46a9ff7ce.png" width="400" height="450"/>

- [x] 각 리스트 sort로 정렬 후 로그인 아이디 첫 초성을 기준으로 첫 번째 아이템에 시작하는 문자가 나오도록 구현
- [x] 즐겨찾기 등록 및 삭제 , 즐겨찾기 등록이 되어있는 아이템은 다시 검색시에 버튼이 활성화 되어있도록 구현

### 4

<img src="https://user-images.githubusercontent.com/54402926/124447090-01e05000-ddbc-11eb-9b6e-69f8322e934e.png" width="400" height="450"/>

- [x] `users(검색 유저)` 상태와 `favorites(즐겨찾기)`상태를 나눠서 관리
- [x] 즐겨찾기 기능 구현 **유저 검색** 부분과 **즐겨찾기** 부분이 서로 연동되어 양쪽에서 즐겨찾기 추가 삭제시 실시간으로 반영됨
- [x] 새로고침시 state로 초기화가 되지만 로컬스토리지에 저장된 정보를 그대로 `favorites` 상태에 다시 저장 및 출력이 될 수 있도록 구현
- [ ] 즐겨찾기 검색 부분 기능 구현 예정

### 5

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/54402926/124751788-ffb7f600-df61-11eb-8641-2700e49b3fba.gif)

- [x] 즐겨찾기 검색 부분 기능 구현

처음 즐겨찾기 검색 기능을 구현할 때 favorites(즐겨찾기) state값을 filter처리하여 다시 뿌려주는 형식으로 했었는데 문제는 다시 검색시 전체 즐겨찾기 리스트를 로컬스토리지에서 가져와 다시 state에 등록해줘야하는 
문제점이 발생하였다. <br> 
검색 필터처리는 state값을 직접 건드리지 않고 컴포넌트에서 필터 처리된 리스트만 보여주면 되겠다 싶었다. 
그렇게 하기 위해 search라는 상태 관리를 추가해 구현하였다.
