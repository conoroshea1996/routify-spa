<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import { ToastOverLay, createToastNotificationStore } from "hirehive-ui";
  import { setContext } from "svelte";
  const toasts = createToastNotificationStore();
  setContext("HH_TOASTS", toasts);
</script>

<Router {routes} />
<ToastOverLay notificationManager={toasts} />
