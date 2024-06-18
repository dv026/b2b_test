import { getPlaiceholder } from "plaiceholder";

export const getUrlBase64 = async (src: string) => {
  try {
    const buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );
  
    const { base64 } = await getPlaiceholder(buffer);
  
    return base64
  } catch (err) {
    err;
  }
}