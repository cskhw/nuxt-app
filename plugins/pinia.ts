import { PiniaPlugin, PiniaPluginContext } from "pinia";

function MyPiniaPlugin({ store }: PiniaPluginContext) {
  store.$subscribe((mutation) => {
    // react to store changes
    if (process.env.MODE === "dev")
      console.log(`[🍍 ${mutation.storeId}]: ${mutation.type}.`);
  });

  // Note this has to be typed if you are using TS
  return { creationTime: new Date() };
}

export default defineNuxtPlugin(({ $pinia }) => {
  $pinia.use(({ store }: PiniaPlugin & { store: any }) => {
    const router = useRouter();
    store.router = markRaw(router);
  });
  $pinia.use(MyPiniaPlugin);
});
