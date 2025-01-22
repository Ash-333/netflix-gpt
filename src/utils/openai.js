import OpenAI from "openai";
import conf from "../conf/conf";

const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: conf.openAIKey,
  dangerouslyAllowBrowser: true,
});

export default openai;
