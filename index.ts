import sharp from "sharp";

const image = await Bun.file("./F5gsX_DWwAAVcCy.png").arrayBuffer();

// Error below
await sharp(image).resize(128).png({ quality: 80 }).toBuffer();
