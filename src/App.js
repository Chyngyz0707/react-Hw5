/*import React from "react";

function App(){
   const username = useInput( '')
   const password = useInput( '')
  

  return (

      <div>
        <input {...username} type="text" placeholder='Username' />
        <input {...password} type="text" placeholder='password' />
        <button onClick={() => console.log(username.value, password.value)}>Click</button>

      </div>
  );
}*/



        //REACT CONTEXT



 const TitleContext = React.createContext();

 const LevelThree = () => (
 <TitleContext.Consumer>
  { ({title,subTitle,click }) => (
    <Fragment>
      <h1 onClick={click}>{title}</h1>
      <h2>{subTitle}</h2>
    </Fragment>
  )}</TitleContext.Consumer>
  )
 

 const LevelTwo = () => <LevelThree />
 const LevelOne = () => <LevelTwo/>

 class Lesson extends Component {
  render() {
    return (
      <TitleContext.Provider value={{ title:"Simple title", subTitle: "Sub Title", click: () => {console.log('Hello!')}}}>
        <LevelOne/>
      </TitleContext.Provider>

    );
  }
 }
export default Lesson









 