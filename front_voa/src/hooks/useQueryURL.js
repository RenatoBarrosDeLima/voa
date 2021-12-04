import {  useParams } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useParams());
}

export { useQuery };
