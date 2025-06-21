# 🚢 Research-Competitors-Buildship

A React application for exporting buildship workflows.

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![Kubernetes](https://img.shields.io/badge/kubernetes-%23326de6.svg?style=for-the-badge&logo=kubernetes&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge)

This project, titled "Research-Competitors-Buildship," provides a React-based application designed for managing and exporting buildship workflows. It utilizes various technologies, including React, Angular, Kubernetes, and Express.js, to facilitate the creation and execution of these workflows.

## 📋 SUMMARY

This project is designed to manage and export buildship workflows, leveraging React for the user interface and potentially integrating with Angular, Kubernetes, and Express.js for backend and orchestration. The core capabilities involve handling different file types, executing tools, and managing storage. It aims to provide a structured way to define and execute complex workflows. The target audience includes developers and researchers needing to automate and manage build processes.

**Key technologies used:** React, Angular, Kubernetes, Express.js.

## 📝 DESCRIPTION

The "Research-Competitors-Buildship" project aims to streamline the process of creating and managing buildship workflows. This involves handling various file types (local, base64, external URLs, and buffers), executing tools, and managing storage. The project likely evolved to address the complexity of managing these tasks manually and provides a more structured and automated approach. It is designed to make the management and exporting of buildship workflows simpler and more efficient.

## ✨ FEATURES

**Verified Features from Code Analysis:**

- Handles different file types: `BuildShipLocalFile`, `BuildShipBase64File`, `BuildShipExternalUrlFile`, `BuildShipFileBufferFile`.
- Executes tools via `execute-tool.ts`.
- Manages storage using `storage.ts`.
- Utilizes HTTP for requests via `http.ts`.
- Includes utility functions in `utils.ts`.

**Additional Detected Capabilities:**

- API Endpoints: 0 routes detected
- Functions:  Numerous utility and processing functions are used throughout the codebase.
- Components/Classes: 5 detected (`BuildShipLocalFile`, `BuildShipBase64File`, `BuildShipExternalUrlFile`, `BuildShipFileBufferFile`)
- Environment Variables: 30 configured (see Setup Instructions)

## 🛠️ TECH STACK

**Languages & Frameworks:**

- **TypeScript** - 13 files
- **JSON** - 3 files

**Technology Stack:**

- **Primary Language**: TypeScript
- **Frameworks**: React, Angular, Kubernetes, Express.js
- **Build Tools**:  Likely `tsc` (TypeScript compiler)
- **Databases**:  None explicitly detected in the provided file analysis, but potentially integrates with database via external modules.
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
- `"dotenv/config";`

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
```

**Key Directories & Files:**

- `src/`: Contains the source code of the application.
    - `buildship/`:  Contains files related to the buildship workflow.
        - `files/`: Defines different file types used in the workflow.
            - `buildship-base64-file.ts`: Handles base64 encoded files.
            - `buildship-external-url-file.ts`: Handles files from external URLs.
            - `buildship-file-buffer-file.ts`: Handles files stored in buffers.
            - `buildship-local-file.ts`: Handles local files.
            - `constants.ts`: Defines constants used in file handling.
            - `index.ts`: Exports all file-related modules.
            - `types.ts`: Defines types used in file handling.
        - `execute-tool-proxy.ts`:  Proxy for executing tools.
        - `execute-tool.ts`:  Executes tools within the buildship workflow.
        - `http.ts`: Handles HTTP requests.
        - `storage.ts`: Handles storage operations.
        - `utils.ts`:  Utility functions.
    - `mcp.ts`: Related to `@modelcontextprotocol/sdk`.
- `package.json`: Contains project metadata and dependencies.
- `package-lock.json`: Records the exact versions of dependencies used.
- `tsconfig.json`: Configuration file for the TypeScript compiler.

## 🚀 SETUP INSTRUCTIONS

**Prerequisites:**

- Node.js
- npm (Node Package Manager)
- TypeScript

**Installation:**

```bash
# Clone the repository
git clone https://github.com/avinashkr-ai/Research-Competitors-Buildship.git
cd Research-Competitors-Buildship

# Install dependencies
npm install
```

**Configuration:**

Environment Variables:

The project utilizes several environment variables, potentially configured via a `.env` file.  These include:

- `BS_ENV` (multiple occurrences)
- `key`
- `nodeId`
- `runtimeEnv`
- `BUILDSHIP_API_KEY`
- `BUCKET`

And approximately 24 more environment variables -  examine the codebase for specific usage and configuration instructions.  Create a `.env` file in the root directory and populate it with the necessary values.  For example:

```text
BS_ENV=development
BUILDSHIP_API_KEY=your_api_key
BUCKET=your_bucket_name
```

**Available Scripts:**

- `build`: `tsc` (Compiles the TypeScript code)
- `mcp`: `node dist/mcp.js` (Runs the mcp.js file)
- `dev`: `ts-node index.ts` (Runs the index.ts file using ts-node)
- `test`: `echo "Error: no test specified" && exit 1` (Placeholder for tests)

## 📖 USAGE INSTRUCTIONS

1.  **Build the project:**

    ```bash
    npm run build
```

2.  **Run the application in development mode:**

    ```bash
    npm run dev
```

3.  **Run the `mcp.ts` file:**

    ```bash
    npm run mcp
```

The exact usage will depend on the specific implementation of the buildship workflows. Refer to the source code and the intended functionality for more detailed instructions. No API routes detected, so the application is likely CLI based.

## 🔐 AUTHENTICATION

The presence of `BUILDSHIP_API_KEY` environment variable suggests that authentication is used within the application. The specifics of the authentication method are not fully detailed in the extracted files, but the API key is likely used to authenticate requests to external services.

## 📚 API DOCUMENTATION

No API routes detected. The provided files appear to focus on internal workflow processing and file handling rather than providing external API endpoints.

## 📊 USER FLOW DIAGRAM

```mermaid
graph TD
    A[Start] --> B{Configure Environment Variables};
    B --> C[Read Input Files];
    C --> D{File Type (Local, Base64, URL, Buffer)?};
    D -- Local --> E[Handle Local File];
    D -- Base64 --> F[Decode Base64 File];
    D -- URL --> G[Fetch External File];
    D -- Buffer --> H[Process File Buffer];
    E --> I[Execute Tool];
    F --> I;
    G --> I;
    H --> I;
    I --> J[Store Output];
    J --> K[Complete];
```

**Flow Features Detected:**

- **Endpoints**: 0 API routes analyzed
- **Authentication**: Detected (API Key Required)
- **CRUD Operations**: Likely (File Handling, Storage)
- **Project Type**: React Application
- **Flow Type**: Buildship workflow execution

## 🌍 DEPLOYMENT

Deployment will depend on the specific hosting requirements.  Given the usage of React, Angular, Kubernetes and Express.js, options include:

- **Cloud Platforms:** Deploying to cloud platforms like Google Cloud Platform (GCP), Amazon Web Services (AWS), or Microsoft Azure.
- **Containerization:** Utilizing Docker to containerize the application and deploying to a Kubernetes cluster.
- **Serverless:** Deploying the application as serverless functions.

Ensure that all necessary environment variables are configured in the production environment.

## 👨‍💻 AUTHOR & SUPPORT

**Author Information:**

- **Repository Owner**: avinashkr-ai
- **Project**: Research-Competitors-Buildship
- **GitHub**: [https://github.com/avinashkr-ai](https://github.com/avinashkr-ai)

**Contributing:**

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them.
4.  Submit a pull request.

**Support:**

-   Report issues on the [GitHub issue tracker](https://github.com/avinashkr-ai/Research-Competitors-Buildship/issues).

## 📄 LICENSE

License not specified. Please refer to the repository for licensing information.