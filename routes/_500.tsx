import ErrorPage from "@/routes/error/index.tsx";

export default function Error500() {
  return <ErrorPage status={500} />;
}
