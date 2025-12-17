import { tool } from "@langchain/core/tools";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";
import { convertCurrency } from "./tools/currencyTool";
import { getUserById, getUsersByCity, getUsersByCountry, getUsersByDepartment, getUsersByName, getUsersByProfession } from "./tools/userTools";
const model = new ChatOpenAI({
    model: "gpt-4o-mini",
})

export const agent = createReactAgent({
    llm: model,
    tools: [
        convertCurrency,
        getUserById,
        getUsersByCity,
        getUsersByCountry,
        getUsersByDepartment,
        getUsersByName,
        getUsersByProfession
    ]
})
