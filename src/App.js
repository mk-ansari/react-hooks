import "./App.css";

// UseContext imports.
import Component1 from "./components/UseContextExa/Component1";
import Component2 from "./components/UseContextExa/Component2";
import Component3 from "./components/UseContextExa/Component3";
import Component4 from "./components/UseContextExa/Component4";
import { UserContainer } from "./Context/UserContext";

// useEffects imports.
import UseEffectExa from "./components/UseEffectExa/UseEffectExa";
import UseRefExa from "./components/UseRefExa/UseRefExa";
import UseCallbackExa from "./components/UseCallback/UseCallback";
import UseMemoExa from "./components/UseMemoExa/UseMemoExa";
import UseReducerExa from "./components/UseReducerExa/UseReducerExa";

function App() {
  return (
    <div className="App">
      {/* Uncomment to check UseContext Example */}
      {/* <UserContainer>
         <Component1 />
         <Component2 />
         <Component3 />
         <Component4 />
     </UserContainer> */}

      {/* Uncomment to check UseEffect Example */}
      {/* <UseEffectExa /> */}

      {/* Uncomment to check UseRef Example */}
      {/* <UseRefExa/> */}

      {/* Uncomment to check UseCallBack Example */}
      {/* <UseCallbackExa /> */}

      {/* Uncomment to check UseMemoExa Example */}
      {/* <UseMemoExa /> */}

      {/* Uncomment to check UseReducerExa Example */}
      <UseReducerExa />
    </div>
  );
}

export default App;
