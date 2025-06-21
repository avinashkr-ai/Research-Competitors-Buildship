
```mermaid
flowchart TD
    A[Start: Build an Agent Flow] --> B[Input: Company Name]
    A --> C[Input: Context]
    
    B --> D[Get Time & Date Node]
    C --> D
    
    D -->|Pass inputs with timestamp| F[Perplexity AI Search<br/>📊 Information Gathering]
    
    F --> F1[Configure Perplexity:<br/>• Company Name + Context<br/>• Current Time/Date<br/>• Search Instructions<br/>• Model Settings<br/>• Output Format]
    
    F1 --> F2[Perplexity Processing<br/>🔍 Research & Collect Information]
    
    F2 --> F3[Perplexity Results:<br/>• Raw Information<br/>• Research Data<br/>• Citations & Sources]
    
    F3 -->|Raw data passed to formatter| G[OpenAI Text Generator<br/>✨ Information Formatting]
    
    G --> G1[Configure OpenAI:<br/>• Perplexity Raw Data<br/>• Company Name & Context<br/>• Formatting Instructions<br/>• Response Structure<br/>• Model Settings]
    
    G1 --> G2[OpenAI Processing<br/>📝 Format & Structure Response]
    
    G2 --> G3[OpenAI Output:<br/>• Formatted Agent Response<br/>• Structured Information<br/>• Professional Presentation]
    
    G3 --> H[Final Agent Response<br/>📋 Complete & Ready]
    
    H --> I[Output: Agent Response String]
    I --> J[End]
    
    %% Styling
    classDef startEnd fill:#e3f2fd,stroke:#1565c0,stroke-width:3px
    classDef inputNode fill:#e8f5e8,stroke:#2e7d2e,stroke-width:2px
    classDef processNode fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
    classDef perplexityNode fill:#fff8e1,stroke:#f57c00,stroke-width:2px
    classDef openaiNode fill:#e0f2f1,stroke:#00695c,stroke-width:2px
    classDef outputNode fill:#fce4ec,stroke:#c2185b,stroke-width:2px
    
    class A,J startEnd
    class B,C inputNode
    class D,H processNode
    class F,F1,F2,F3 perplexityNode
    class G,G1,G2,G3 openaiNode
    class I outputNode
    ```
