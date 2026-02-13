# Designa

**Designa** is a design-driven code synthesis engine.

It compiles structured low-level design files into validated source code using AI — with strict scope control, deterministic validation, and human review.

Design becomes the source of truth.  
Generated code becomes a build artifact.

---

## 🚀 Vision

Modern AI models can generate code.  
Designa ensures they generate only the code they are explicitly allowed to generate.

Instead of giving AI full repository access, Designa:

- Reads structured `.design` specifications
- Generates only declared files
- Validates structure and dependencies
- Creates a review-ready pull request
- Integrates into CI/CD pipelines

Architecture-first development.  
Controlled AI-assisted implementation.

---

## 🏗 How It Works

1. Developer writes a structured design file:

.design/Login/Login.yaml

markdown
Copy code

2. Run:

designa generate login

yaml
Copy code

3. Designa will:

- Parse and validate the design schema
- Create a scoped sandbox
- Invoke AI to generate only allowed files
- Perform structural and compile validation
- Create a pull request for review

4. Developer reviews, merges, and deploys via CI/CD.

---

## 🔐 Core Principles

- Design is canonical
- AI is constrained
- Generation is deterministic
- Validation is mandatory
- Human review is required

Designa never allows unrestricted repository modification.

---

## 📁 Example Project Structure

project/
├── src/
├── .design/
│ └── Login/
│ └── Login.yaml
├── package.json
└── designa.config.ts

yaml
Copy code

---

## ⚙️ Features

- Scoped file-level AI generation
- Schema-based design validation
- Dependency graph enforcement
- AST-level structural validation
- Compile-time verification
- GitHub PR automation
- Pluggable AI provider support

---

## 🧠 Use Cases

- Backend service generation (Spring Boot, Node, etc.)
- Boilerplate-heavy systems
- Microservice architecture
- Enterprise design governance
- Architecture-driven development

---

## 🛠 Tech Stack (Initial Version)

- TypeScript (Node.js)
- YAML schema validation
- AST-based structural analysis
- GitHub API integration
- Pluggable AI provider layer

---

## 📜 Open Source

Designa is open-source and community-driven.

Goals of the project:

- Build a deterministic AI-assisted development pipeline
- Reduce boilerplate while preserving control
- Make architecture executable

Contributions, discussions, and design proposals are welcome.

---

## ⚠️ Status

Early stage.  
Core schema and generation engine under active development.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

Please open an issue before major architectural changes.

---

## 📄 License

Apache 2.0

---

## 🌍 Philosophy

Designa explores a simple idea:

What if architecture could be compiled?
