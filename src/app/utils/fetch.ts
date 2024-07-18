import { HttpError } from './error';
export async function fetchRequest<Data>(path: string, { method, headers, ...rest }: RequestInit = {}) {
  const apiDomain =  import.meta.env.VITE_BASE_API_URL;

  const response = await fetch(`${apiDomain}${path}`, { method, ...rest });

  if (response.ok) {
    return response.json() as Data;
  }

  throw new HttpError(response);
}

export const errorHandler = (error: HttpError) => {
  console.log('error', error);
  switch (error.status) {
    case 401:
      console.log("401")
      //logout();
      break;
    case 403:
      console.log("403")
      break;
    case 500:
      console.log("500");
      break;
    case 400:
      console.log("400")
      break;
    default:
      throw error as HttpError;
  }
};
const getAPIHeaders = () => {
  const headers = {
    'X-Origin': window.location.origin,
    'Accept-Language': 'en-US,en;q=0.5',
    // 'X-livere-client': window.location.origin,
  };

  return headers;
};
export function sendFormData<Data>(
  path: string,
  params: Record<string, number | boolean | string | Blob> = {},
  { body, headers, ...rest }: RequestInit = {}
) {
  const formData = new FormData();

  for (const [key, value] of Object.entries(params)) formData.append(key, value as string);

  const config: RequestInit = {
    body: formData,
    headers: {
      ...(headers && { ...headers }),
    },
    ...rest,
  };

  return fetchRequest<Data>(path, config);
}
export const getAPI = async <Data>(path: string) => {
  try {
    const res = await fetchRequest<Data>(path, {
      method: 'GET',
      headers: getAPIHeaders(),
    });

    return res as Data;
  } catch (error) {
    throw errorHandler(error as HttpError);
  }
};

export const postAPI = async <Data>(path: string, params: Record<string, number | boolean | string | Blob> = {}) => {
  try {
    const res = await sendFormData<Data>(path, params, { method: 'POST', headers: getAPIHeaders() });

    return res as Data;
  } catch (error) {
    throw errorHandler(error as HttpError);
  }
};