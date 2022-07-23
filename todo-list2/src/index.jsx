const { createApp, h, ref, computed, defineComponent, watch, watchEffect } =
  Vue;
// babel会将标签编译为React.createElement,所以我们打了个补丁
const React = { createElement: h };

const Item = {
  props: { task: Object, onDelete: Function, onCompleted: Function },
  setup(props) {
    return () => (
      <div
        class={["com-item", { completed: props.task.completed }]}
        oncontextmenu={(e) => {
          e.preventDefault();
          props.onDelete?.(props.task);
        }}
        onClick={() => {
          props.onCompleted?.(props.task);
          console.log("3343");
        }}
      >
        {props.task.label}
      </div>
    );
  },
};
const TodoInput = {
  props: {
    onEnter: Function,
  },
  setup(props) {
    return () => (
      <input
        onKeydown={function (e) {
          if (e.keyCode === 13) {
            props.onEnter?.(e.target.value);
            e.target.value = "";
          }
        }}
        className="com-todo-input"
        placeholder="Enter your todo"
      ></input>
    );
  },
};
const App = {
  setup() {
    const list = useLocalStorage("list", []);
    console.log(list.value);
    function addTodo(v) {
      console.log(v);
      if (v !== "") {
        list.value.push({ label: v, id: Math.random() });
      }
    }
    return () => (
      <div className="container">
        <h1>todos</h1>
        <div className="todo-list">
          <TodoInput onEnter={addTodo}></TodoInput>
          {list.value.map((task, index) => (
            <Item
              task={task}
              id={task.id}
              onDelete={() => {
                list.value.splice(index, 1);
              }}
              onCompleted={() => {
                console.log(task);
                task.completed = !task.completed;
              }}
            />
          ))}
        </div>
        <small>Left click to switch. Right click to delete</small>
      </div>
    );
  },
};

createApp(App).mount("#app");

function useLocalStorage(key, defaul) {
  let v;
  try {
    v = JSON.parse(localStorage.getItem(key));
  } catch (error) {
    v = defaul;
  }
  if (v === null || v === undefined) {
    v = defaul;
  }
  const r = ref(v);

  watchEffect(() => {
    localStorage.setItem(key, JSON.stringify(r.value));
  });
  return r;
}
