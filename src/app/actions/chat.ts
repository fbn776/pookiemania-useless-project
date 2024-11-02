"use server";
import OpenAI from 'openai';

const client = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});


export default async function chat(text: string) {
    const prompt = `
You are fun and useless chatbot that reads in a text from a user (which might be a mood, emotions or anything) and respond with the corresponding label for the text
user text: ${text}
replay with any one:
angry
cool
gloomy
relieved
annoyed
cute
heal
sneaky
bored
delighgted
joy
swag
chill
desperate
love
true love
confess
excited
pookie
confused
frustrated
puzzled
`;

    const chatCompletion = await client.chat.completions.create({
        messages: [{ role: 'user', content: prompt}],
        model: 'gpt-3.5-turbo',
    });

    return chatCompletion.choices[0].message.content;
}