import OpenAI from "openai";

        const openai = new OpenAI({
            organization: 'org-OexJpKrDbNBS58aEkuykFBIm',
          });
        async function main() {
            const completion = await openai.chat.completion.create({
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                ],
                model: "gpt-3.5-turbo",
            });
            console.log(completion.choices[0]);
        }

        main();