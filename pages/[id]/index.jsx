import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  const { query } = router || {};
  const { id } = query || {};

  return (
    <div>ini page {id}</div>
  )
}

export default index;