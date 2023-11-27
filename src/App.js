//import Article from "./components/Article";
//import { Article } from "./index";

import ToggleButton from "./components/Toggle";
import { Article, Counter, TextInput } from "./components/index";

function app(){

  // useEffect(()=>{
    
  // })
return(
  <div>
    <Article
    title={"React入門"}
    content={"propsについて"}
    />
    <Article
    title={"componentの使い方"}
    content={'componentはちょくせつ文字列を入力せずに親に記入'}
    />
    <TextInput/>
    <Counter/>
    <ToggleButton/>


  </div>
);

};

export default app;
