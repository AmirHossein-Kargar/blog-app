import { useRouter } from "next/navigation";

export function useMoveBack() {
  const router = useRouter();
  return () => router.back()
}
