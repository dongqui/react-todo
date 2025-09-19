import { useCallback, useState } from "react";

export default function useAsync(asyncFunc) {
  const [pending, setPending] = useState(false);

  // 비동기 함수를 실행하고 상태를 자동으로 관리하는 역할
  const executeAsyncFunc = useCallback(
    async (...args) => {
      setPending(true);

      try {
        return await asyncFunc(...args);
      } catch (error) {
        console.log(error);
        return;
      } finally {
        setPending(false);
      }
    },
    [asyncFunc]
  );

  return [pending, executeAsyncFunc];
}
