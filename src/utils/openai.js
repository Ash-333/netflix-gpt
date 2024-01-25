import OpenAI from 'openai';
import conf from '../conf/conf';



const openai = new OpenAI({
  apiKey: conf.openAIKey, 
  dangerouslyAllowBrowser:true
});

export default openai