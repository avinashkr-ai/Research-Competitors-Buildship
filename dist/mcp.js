import "dotenv/config";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { executeTool } from "./buildship/execute-tool-proxy.js";
import { z } from "zod";
const server = new McpServer({ name: "researchCompetitors", version: "1.0.0" });
server.tool("researchCompetitors", "The Tool Trigger creates an API endpoint that your Agent can use to perform specific tasks. When the Agent detects a request that matches the tool\u2019s function, it automatically triggers the API, sends the necessary inputs, and processes the response.", { companyName: z.string(), context: z.string() }, async (inputs) => { return await executeTool("https://c1261u.buildship.run/executeWorkflow/Qvw3nnXMVq5SwgoRIk1e/feb0a6c8-7c49-40e8-a1cc-114d9c35f9ea", inputs); });
const transport = new StdioServerTransport();
await server.connect(transport);
