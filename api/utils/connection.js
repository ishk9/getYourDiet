const openai = new OpenAI(process.env.OPENAI_API_KEY);

export async function fetchDataFromLLM(content) {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "user", content: content },
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}