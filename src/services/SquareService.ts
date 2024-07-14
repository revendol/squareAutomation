import OpenAI from 'openai';
import envVars from "@shared/env-vars";
const openai = new OpenAI({

});

class SquareService {
  async parse(data: string) : Promise<string> {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: data }],
      model: "gpt-3.5-turbo",
    });
    console.log(completion);
    return data;
  }
}

export default new SquareService();