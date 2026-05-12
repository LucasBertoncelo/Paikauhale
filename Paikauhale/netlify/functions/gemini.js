const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async (event) => {
    try {
        // 1. Verifica se a chave existe
        if (!process.env.GEMINI_API_KEY) {
            return { statusCode: 200, body: JSON.stringify({ reply: "Erro: Chave API_KEY não encontrada no Netlify." }) };
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const data = JSON.parse(event.body);
        const userMessage = data.text || "Olá";

        // 2. Tenta gerar o conteúdo
        const result = await model.generateContent(userMessage);
        const response = await result.response;
        
        return {
            statusCode: 200,
            body: JSON.stringify({ reply: response.text }),
        };
    } catch (error) {
        // 3. Se der erro, ele vai te dizer exatamente o que é (ex: pacote faltando ou chave errada)
        return {
            statusCode: 200,
            body: JSON.stringify({ reply: "Erro Técnico: " + error.message }),
        };
    }
};