# React 공식 문서 및 컴포넌트 샘플

이 레포는 React를 능숙하게 다루기 위해서 컴포넌트를 제작해보거나, 공식문서를 따라하는 작업실이다. GPT를 사용하거나 구글링을 할 수 있지만 적어도 이 레포를 사용할 때만큼은 최대한 자제해보도록 하자. 

## Dropdown 제작하기 (2023.08.14)

[드랍다운 컴포넌트 예시](https://ui.zoomable.io/?path=/story/components-dropdown--default)

> 드랍다운 컴포넌트를 제작해보는 연습이다. `html`태그 `<select>`와 `<option>`을 사용하지 않고 노력해보도록 하자!

### Component props 처리는 어떻게 하는 거야? 
출처: https://react.dev/learn/passing-props-to-a-component <br>
- step1: 자식 컴포넌트에게 props 전달
  ```javascript
       <Dropdown
        s={"md"}
        width={160}
        value={value}
        defaultValue={value}
        onChange={handleChange}
        options={countryOptions}
        withSearchInput={true}
      />
  ```
  다음과 같이 전달한다.
- step2: 자식 컴포넌트에서 읽는 방법
  ```javascript
  const Dropdown = ({s, width, value}) => {
    ...
  }
  ```
  다음과 같이 받을 수 있고, 만약에 object로 한꺼번에 받고 싶으면
  ```javascript
  const Dropdown = (input) => {
    ...
  }
  ```
  이러한 방식으로 input 전체를 받을 수도 있다.

- 만약에 defualt value를 할당한다면 아예 이렇게 받아 올 수도 있을 것 같다. 
  ```javascript
  const Dropdown = ({s, width=120, value}) => {
    ...
  }
  ```
  이런 식으로 아예 고정된 값을 받는 방법도 존재한다. 또 다른 방법이 존재하는데 예를 들어 전체를 받아서 다시 자식 컴포넌트에서 그걸 갖다 쓰는 방안을 생각해보자.
  ```javascript
  const Dropdown = ({options}) => {
  console.log(options);

  return (
    <div>
      <Optionitem {...options}/>
    </div>
  );};
  ```
  뭐랄까 이렇게 받아도 크게 상관을 없을 것 같긴한데 이렇게 되면 optionitem에서 인풋을 그냥 하나로 평범하게 받아버리면 options에 리스트로 하나로 주게 된다. 리스트를 만들어서 주는 방법이라고 지금은 예상된다. 물론 생긴것은 오브젝트인데 리스트처럼 쓸 수 있는 객체라고 생각된다. 어차피 js에서 리스트는 객체가 맞다.

### 동일한 컴포넌트를 여러 개 만들 때 처리는 어떻게 하는거야?
출처: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

- 노가다를 사용하기 싫다면, map function을 사용하면 좋다!
map function은 element를 어떠한 형식으로 바꿔줘야 할 지를 고민하도록 하자!
```javascript
{options.map(elem => <Optionitem value={elem.value} label={elem.label}/>)}
```
다음 줄을 options라는 리스트에 있는 elem을 컴포넌트 하나 하나로 바꿔주는 방법이다. 이렇게 사용하면 좋을 것이다.

> Warning: Each child in a list should have a unique "key" prop.

다음과 같은 콘솔 warning이 났다! 그렇다면 key라는 prop값을 내려주라는 소리가 있다.
```javascript
{options.map(elem => <Optionitem key={elem.value} value={elem.value} label={elem.label}/>)}
```
이렇게 고쳤더니 더 이상 warning이 생기지 않았다. 아무래도 리스트로 만들었을 때 key값을 고유하게 만들어 주어야하나 보다.

## Tictactoe 게임 제작하기 (2023.08.16~17)

[React 공식 문서 출처](https://react.dev/learn/tutorial-tic-tac-toe) 

> Tic Tac Toe를 제작해보며 리액트의 기본적인 구조 자체를 이해하는 것이다. 화이팅해봅시당. 기초적인 것을 좀 더 잘 알아보도록 합시다.

### React에서 함수 컴포넌트의 구조는?
보통 함수 컴포넌트를 만들어서 페이지 구성요소를 만드는 것이다. 혹은 다른 컴포넌트의 조각이 될 수 있다.

```javascript
const Square = () => {
  return (
    <button className='square border'>X</button>
  );
};
export default Square;
```
다음과 같이 형성 할 수 있는데, 
- export: 다른 파일에서 이를 사용할 수 있도록 exporting 해주는 것이다
- export default: 해당 모듈엔 하나의 개체만 있다는 것을 의미하는 것이다.

만약에 한 파일에 여러개의 조각들을 export 할 수 있도록 만든다면, `export`을 쓰고 단일이면 왠만하면 `export default`를 쓰는 것이 좋을 것 같다.

### 현재 square은 'X'만 써져있다! 이를 params로 내려줄 수 있다면?
```javascript
import React from 'react';

const Square = ({input}) => {
  return (
    <button className='square border'>{input}</button>
  );
};

export default Square;
```
다음과 같이 안에 input이 들어갈 수 있도록 만들 수 있겠다! object까지 쓰고 싶지 않으니
```javascript
<Square input="3" />
```
다음과 같이 사용한다면 input에 원하는 O 혹은 X를 집어 넣을 수도 있겠다.

### CSS 문제? 박스가 채워질 때, 박스간 간격이 달라진다, 해결 방법은?
```javascript
const [value, setValue] = useState('');
  const handleClick = () => {
    console.log("click!");
    setValue('X')
  };
```
Square이라는 컴포넌트 내부에 value가 처음에 아예 존재하지 않다가, 누르면 이제 valued를 'X'로 채워준다. 근데 이렇게 되면 
```javascript
 <div className="board-row mt-0">
  <Square />
  <Square />
  <Square />
</div>
<div className="board-row">
  <Square />
  <Square />
  <Square />
</div>
```
`board-row`간의 간격이 달라진다 이를 어떻게 하면 해결할 수 있을까? 

- 시도1: 먼저 간격을 일부러 고정해보도록하자. mt-0, mb-0과 같이 했더니 잘 안된다.
- 시도2: flex를 사용해보자, 즉 한 줄 한 줄 row에 대한 flex를 사용해보자.
```javascript
 <div className="board-row flex">
  <Square />
  <Square />
  <Square />
</div>
<div className="board-row flex">
  <Square />
  <Square />
  <Square />
</div>
```
이렇게 한 줄에 대한 flex를 사용해보았더니 성공!

### Flex는 무엇인가?
이것은 좀 집중해서 나중에 더 보도록 하자... 


### 자 그렇다면 몇번째 row와 col의 Button을 누른지 저장하려면 어떻게 해야할 까?
부모 컴포턴트인 `Board`에서 이를 관리할 수 있도록 해보자.
