import store from "./store/configureStore";
import * as actions from "./store/actions";
console.log(store());
// console.log("Hello World!");
// console.log("object");
store.dispatch(actions.bugAdded({ description: "NAME " }));
// store.subscribe(() => {
//   console.log("store change");
// });
// store.dispatch(actions.addBug("SECOND "));
// let form = document.querySelector("#form");
store.dispatch(actions.bugResolved(1));
form.addEventListener("submit", (event) => {
  let name = document.querySelector("input").value;
  let list = document.querySelector("#list");
  event.preventDefault();
  //   store.dispatch(addBug(name));
  //   let data = store.getState();
  //   data.map((item) => {
  //     const li = `
  //         <li>
  //             <span> ${item.description} </span>
  //         </li>
  //       `;
  //     list.innerHTML += li;
  //   });
  //   name = "";
  console.log(event, name);
});

// console.log(store.getState());
