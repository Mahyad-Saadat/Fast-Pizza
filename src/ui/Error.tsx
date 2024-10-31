import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';
interface ApiError {
  status: number;
  statusText: string;
  internal: boolean;
  data: string;
  message: string;
  error: Record<string, unknown>; // Assuming the error object is empty, but it can contain more properties
}

function NotFound() {
  const error = useRouteError() as ApiError;
  console.log(error);
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
