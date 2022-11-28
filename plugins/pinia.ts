import { PiniaPlugin, PiniaPluginContext } from "pinia";

// pinia에서 초기화 할 때 실행해줄 함수
function MyPiniaPlugin({ store }: PiniaPluginContext) {
  store.$subscribe((mutation) => {
    // 스토어 값이 바뀔 때 로그 찍어줌
    if (process.env.MODE === "dev")
      console.log(`[🍍 ${mutation.storeId}]: ${mutation.type}.`);
  });

  // 생성된 시간 리턴해줌
  return { creationTime: new Date() };
}

// plugins 폴더에선 defineNuxtPlugin 함수를 사용해 플러그인을 등록합니다.
export default defineNuxtPlugin(({ $pinia }) => {
  $pinia.use(({ store }: PiniaPlugin & { store: any }) => {
    // 라우터를 피냐의 플러그인으로 넣음(정해진 문법이니 따라 작성해주세요)
    const router = useRouter();
    store.router = markRaw(router);
  });
  // 피냐에 플러그인 등록해줌
  $pinia.use(MyPiniaPlugin);
});
