import 'virtual:windi-base.css'
import 'virtual:windi.css';
import App from './App.svelte';
import './main.css';
import HMR from '@roxi/routify/hmr';

const app = HMR(App, { target: document.body }, 'routify-app')


export default app;

