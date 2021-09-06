import { NextApiResponse } from "next";
import storeList from "~/utils/dummy/store.json";

export default (res: NextApiResponse) => {
  res.status(200).json({ storeList });

  // res.statusCode = 200
  // res.json({ name: 'John Doe'})
};
