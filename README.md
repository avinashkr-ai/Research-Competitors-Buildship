Below is the updated README.md file that incorporates the provided project description for the "Build an Agent" flow into the existing README for the "Research-Competitors-Buildship" project. The updated README maintains the original structure while adding relevant details from the project description in appropriate sections.
markdown
# 🚢 Research-Competitors-Buildship

A React application for exporting and managing BuildShip workflows, including the "Build an Agent" flow.

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![Kubernetes](https://img.shields.io/badge/kubernetes-%23326de6.svg?style=for-the-badge&logo=kubernetes&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge)

This project, titled "Research-Competitors-Buildship," provides a React-based application designed for managing and exporting BuildShip workflows. It includes a specific workflow called "Build an Agent," which creates an agent to respond to user queries based on provided context and company details. The project utilizes technologies like React, Angular, Kubernetes, and Express.js to facilitate workflow creation and execution.

## 📋 SUMMARY

This project is designed to manage and export BuildShip workflows, leveraging React for the user interface and potentially integrating with Angular, Kubernetes, and Express.js for backend and orchestration. A key workflow, "Build an Agent," enables the creation of an AI-powered agent that responds to user queries using inputs like company name and context. The project handles various file types, executes tools, and manages storage, providing a structured way to define and execute complex workflows. The target audience includes developers and researchers needing to automate and manage build processes and AI-driven interactions.

**Key technologies used:** React, Angular, Kubernetes, Express.js, Perplexity AI, OpenAI Text Generator, BuildShip.

## 📝 DESCRIPTION

The "Research-Competitors-Buildship" project aims to streamline the creation and management of BuildShip workflows, including the "Build an Agent" flow. This flow is designed to create an AI agent that responds to user queries based on inputs such as company name and context. The project handles various file types (local, base64, external URLs, and buffers), executes tools, and manages storage, addressing the complexity of manual task management with a structured, automated approach. The "Build an Agent" flow integrates with Perplexity AI and OpenAI Text Generator to generate context-aware responses, making workflow management and AI interactions simpler and more efficient.

### Build an Agent Flow Details
- **Flow Name**: Build an Agent
- **Description**: Creates an agent that responds to user queries based on provided context and company name.
- **Inputs**:
  - **Company Name**: A string representing the company name.
  - **Context**: A string providing additional context for the agent’s responses.
- **Outputs**:
  - **Output**: A string containing the agent’s response based on the inputs.
- **Nodes**:
  - **Get Time & Date**: Retrieves the current time and date (Script node, no inputs/outputs).
  - **Perplexity AI Search**: Sends queries to Perplexity AI models and generates responses (Script node, inputs: Output Format, Max Tokens, Conversation Limit, Temperature, Model, Instructions, Prompt, Session Key; outputs: Response, Citations).
  - **OpenAI Text Generator**: Generates text responses using OpenAI models (Script node, inputs: Max Tokens, Instructions, Session Key, Temperature, Output Format, Prompt, Conversation Limit, Model; outputs: Response).
- **Technology Used**:
  - **Perplexity AI**: Generates responses based on user queries.
  - **OpenAI Text Generator**: Produces text responses for given prompts.
  - **BuildShip**: Platform for creating and managing workflows with AI model integration.

### Test Cases for Build an Agent Flow
| Test Case ID | Test Case Description | Input Data | Expected Output | Actual Output | Status |
|--------------|-----------------------|------------|-----------------|---------------|--------|
| TC-001 | Test with valid inputs | Company Name: "TechCorp", Context: "AI Solutions" | Response from the agent based on the context | [To be filled after testing] | [Pass/Fail] |
| TC-002 | Test with empty inputs | Company Name: "", Context: "" | Error message or default response | [To be filled after testing] | [Pass/Fail] |
| TC-003 | Test with long context | Company Name: "TechCorp", Context: "AI Solutions for various industries including healthcare, finance, and education." | Response from the agent based on the context | [To be filled after testing] | [Pass/Fail] |

## ✨ FEATURES

**Verified Features from Code Analysis:**

- Handles different file types: `BuildShipLocalFile`, `BuildShipBase64File`, `BuildShipExternalUrlFile`, `BuildShipFileBufferFile`.
- Executes tools via `execute-tool.ts`.
- Manages storage using `storage.ts`.
- Utilizes HTTP for requests via `http.ts`.
- Includes utility functions in `utils.ts`.

**Additional Detected Capabilities:**

- **Build an Agent Workflow**: Creates an AI agent for query responses using Perplexity AI and OpenAI Text Generator.
- **API Endpoints**: 0 routes detected.
- **Functions**: Numerous utility and processing functions throughout the codebase.
- **Components/Classes**: 5 detected (`BuildShipLocalFile`, `BuildShipBase64File`, `BuildShipExternalUrlFile`, `BuildShipFileBufferFile`).
- **Environment Variables**: 30 configured (see Setup Instructions).

## 🛠️ TECH STACK

**Languages & Frameworks:**

- **TypeScript** - 13 files
- **JSON** - 3 files

**Technology Stack:**

- **Primary Language**: TypeScript
- **Frameworks**: React, Angular, Kubernetes, Express.js
- **AI Services**: Perplexity AI, OpenAI Text Generator
- **Workflow Platform**: BuildShip
- **Build Tools**: Likely `tsc` (TypeScript compiler)
- **Databases**: None explicitly detected, but potentially integrates with databases via external modules.
- **Testing**: None detected

**Key Dependencies** (45 total):

- `@google-cloud/firestore`
- `@google-cloud/storage`
- `@modelcontextprotocol/sdk`
- `acorn`
- `dotenv`
- `lodash-es`
- `p-map`
- `typescript`
- `uuid`
- `zod`
- `@types/node`
- `"dotenv/config"`

## 📁 PROJECT STRUCTURE

```text
📁 Research-Competitors-Buildship/
├── 📁 src/
│   ├── 📁 buildship/
│   │   ├── 📁 files/
│   │   │   ├── 🔷 buildship-base64-file.ts
│   │   │   ├── 🔷 buildship-external-url-file.ts
│   │   │   ├── 🔷 buildship-file-buffer-file.ts
│   │   │   ├── 🔷 buildship-local-file.ts
│   │   │   ├── 🔷 constants.ts
│   │   │   ├── 🔷 index.ts
│   │   │   └── 🔷 types.ts
│   │   ├── 🔷 execute-tool-proxy.ts
│   │   ├── 🔷 execute-tool.ts
│   │   ├── 🔷 http.ts
│   │   ├── 🔷 storage.ts
│   │   └── 🔷 utils.ts
│   └── 🔷 mcp.ts
├── 📦 package.json
├── 📊 package-lock.json
└── 📊 tsconfig.json
Key Directories & Files:
src/: Contains the source code of the application.
buildship/: Contains files related to BuildShip workflows.
files/: Defines different file types used in workflows.
buildship-base64-file.ts: Handles base64 encoded files.
buildship-external-url-file.ts: Handles files from external URLs.
buildship-file-buffer-file.ts: Handles files stored in buffers.
buildship-local-file.ts: Handles local files.
constants.ts: Defines constants for file handling.
index.ts: Exports file-related modules.
types.ts: Defines types for file handling.
execute-tool-proxy.ts: Proxy for tool execution.
execute-tool.ts: Executes tools within BuildShip workflows.
http.ts: Handles HTTP requests.
storage.ts: Manages storage operations.
utils.ts: Utility functions.
mcp.ts: Related to @modelcontextprotocol/sdk.
package.json: Project metadata and dependencies.
package-lock.json: Records exact dependency versions.
tsconfig.json: TypeScript compiler configuration.
🚀 SETUP INSTRUCTIONS
Prerequisites:
Node.js
npm (Node Package Manager)
TypeScript
Installation:
bash
# Clone the repository
git clone https://github.com/avinashkr-ai/Research-Competitors-Buildship.git
cd Research-Competitors-Buildship

# Install dependencies
npm install
Configuration:
Environment Variables:
The project uses several environment variables, potentially configured via a .env file. Key variables include:
BS_ENV (multiple occurrences)
key
nodeId
runtimeEnv
BUILDSHIP_API_KEY
BUCKET
Additional variables may be required for Perplexity AI and OpenAI Text Generator integrations. Create a .env file in the root directory and populate it with necessary values, e.g.:
text
BS_ENV=development
BUILDSHIP_API_KEY=your_api_key
BUCKET=your_bucket_name
Available Scripts:
build: tsc (Compiles TypeScript code)
mcp: node dist/mcp.js (Runs mcp.js)
dev: ts-node index.ts (Runs index.ts with ts-node)
test: echo "Error: no test specified" && exit 1 (Placeholder for tests)
📖 USAGE INSTRUCTIONS
Build the project:
bash
npm run build
Run the application in development mode:
bash
npm run dev
Run the mcp.js file:
bash
npm run mcp
Using the Build an Agent Flow:
Configure inputs (Company Name, Context) in the BuildShip platform or via script.
Execute the workflow to generate AI-driven responses.
Review outputs and validate against test cases (e.g., TC-001, TC-002, TC-003).
The exact usage depends on the specific workflow configuration. Refer to the source code and BuildShip documentation for detailed instructions.
🔐 AUTHENTICATION
The presence of BUILDSHIP_API_KEY and potential API keys for Perplexity AI suggests and OpenAI that authentication is used. The API key is likely authenticates to requests to external services like BuildShip, Perplexity AI, and OpenAI. Specific authentication details are not fully outlined in the provided files.
📚
📚 API DOCUMENTATION
No API routes detected in the provided files. The project appears to focus on internal workflow processing, file processing and handling, and AI-driven workflows rather than exposing public API endpoints. For BuildShip-specific APIs, refer to the BuildShip documentation](https://docs.buildship.com/).
📊 USER FLOW DIAGRAM
```mermaid
graph TD
    A[Start] --> B -->{Configure Environment Variables};
        B --> C -->{Read Input Files};
    C --> D{D{File Type (Local, Base64, URL, Buffer)?};
    - **Local** --> D --> E{E -->[Handle Local File];}
    - **Base64** --> D --> F -->{Decode Base64 File};
    F --> I;
    - **URL** --> D --> G -->{Fetch External File};
    G --> I;
    - **Buffer** --> D --> H -->{Process File Buffer};
    D --> H;
    H --> I;
    I -->{Execute Tool || AI Workflow};
    I --> J;
    J -->{Store Output || Generate AI Response};
    J --> K;
    K -->[Complete];
```
Flow Features Updated:
Endpoints: 0 API routes analyzed
Authentication: Built with API Key Required for external services (e.g., BuildShip, Perplexity AI, OpenAI))
CRUD Operations: Built (e.g., Handling, File Storage, AI Response Generation)
Project Type: React Application with AI Workflow Integration
Flow Type: BuildShip workflow execution, including AI agent creation
🌍 DEPLOYMENT
Deployment depends depends on hosting requirements. Given the use of React, Angular, Kubernetes, and Express.js, and AI integrations, options include:
Cloud Platforms: Deploy to Google Cloud Platform (GCP), AWS, or Azure.
Containerization: Use Docker to containerize the application and deploy to a Kubernetes cluster.
Serverless: Deploy as serverless functions.
Ensure all environment variables, including those for BuildShip, Perplexity AI, and OpenAI, are configured in the production environment.
👨‍💻 AUTHOR & SUPPORT
Author Information:
Repository Owner: avinashkr-ai
Project: Research-Competitors-Buildship
GitHub: https://github.com/avinashkr-ai
Contributing:
Fork the repository.
Create a new branch for your feature or bug fix.
Make changes and commit them.
Submit a pull request.
Support:
Report issues on the GitHub issue tracker.
📄 LICENSE
License not specified. Please refer to the repository for licensing information.

---

### Key Updates Made to the README:
1. **Summary**: Added overview of the "Build an Agent" flow and its purpose.
2. **Description**: Included detailed description of the "Build an Agent" flow, its inputs, outputs, and test cases.
3. **Features**: Added the "Build an Agent" workflow as a capability.
4. **Tech Stack**: Added Perplexity AI, OpenAI Text Generator, and BuildShip to the technology stack.
5. **Usage Instructions**: Added steps for using the "Build an Agent" flow.
6. **Authentication**: Noted potential API keys for Perplexity AI and OpenAI.
7. **User Flow Diagram**: Updated to reflect general workflow, acknowledging the AI-driven workflow component.
8. **Deployment**: Mentioned considerations for AI service integrations.

This updated README file can be saved as `README.md` in the project root directory. It provides a cohesive overview of the project, including the "Build an Agent" flow, while preserving the original content and structure. Let me know if you need further refinements or additional sections!
