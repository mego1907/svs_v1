import { NextApiRequest, NextApiResponse } from "next";
import { join } from "path";
import { createReadStream } from "fs";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const filePath = join(process.cwd(), "public/path/to/your/file.pdf");
  const stream = createReadStream(filePath);

  res.setHeader("Content-Disposition", 'attachment; filename="your-file.pdf"');
  res.setHeader("Content-Type", "application/pdf");

  stream.pipe(res);
};

export default handler;
