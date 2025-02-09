export const getRequestParams = (req: Request) => {
  const searchParams = new URLSearchParams(req.url.split("?")[1]);
  const searchParamsObj: { [key: string]: string } = {};
  searchParams.forEach((value, key) => {
    searchParamsObj[key] = value;
  });
  return searchParamsObj;
};
