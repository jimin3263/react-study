## Component
: 재사용성을 높여줌  

```jsx
class Subject extends Component{
  render(){
    return(
        <header>
            <h1>WEB</h1>
            world wide web !
        </header>
    );
  }
}

class App extends Component{
  render(){
    return(
      <div className="App">
        <Subject></Subject>   
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}
```

- react에서 제공하는 `Component` 클래스를 상속해서 구현함
- class 안에 소속되는 함수는 function 생략 가능
- 하나의 최상위 태그로 시작해야 함

## Props
: 컴포넌트의 속성을 표현할 수 있음

```jsx
class Subject extends Component{
  render(){
    return(
        <header>
            <h1>{this.props.title}</h1>
            {this.props.sub}
        </header>
    );
  }
}


class App extends Component{
  render(){
    return(
      <div className="App">
        <Subject title="WEB" sub ="world wode web!"></Subject>   
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}
```
- 출력을 다르게 할 수 있어서 재사용성을 더욱더 높일 수 있음

## State
: 외부의 Props에 따라서 Component를 실제로 구현하는 내부의 state가 철저히 분리되어 있음

```jsx
<Subject title="WEB" sub ="world wode web!"></Subject>   
```
- 외부로 노출되는 것보다 내부로 감추는 것이 좋기 때문에 state로 만듦
- state값을 subject의 props로 전달

```jsx
class App extends Component{
  //render보다 먼저 실행되면서 component를 초기화 시켜주는 코드
  constructor(props){
    super(props);
    this.state = {
      subject:{title:"WEB",sub:"world wode web!"}
    }
  }
  render(){
    return(
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub ={this.state.subject.sub}>
        </Subject>   
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}
```
