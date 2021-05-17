// import '@virtual/windi.css';
import 'virtual:windi.css';
import App from './App.svelte';
import './main.css';

const app = new App({
  target: document.body,
});

export default app;


if (import.meta.hot) {
  if (import.meta.hot) {
    import.meta.hot.accept((module) => {
      //module.default is App.svelte
      // what do we do here?
      console.log(module);
    });
    import.meta.hot.dispose(() => {
      app.$destroy();
    });
  }
}
