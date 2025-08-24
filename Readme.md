## 🚀 Installation
for backend repository: 
https://github.com/MoonRise1080/eventify_backend.git

### 1. Clone Repository
```bash
git clone [repository-url]
cd [project-name]
git checkout dev
```

### 2. Frontend Setup (React)
```bash
cd frontend
npm install
npm run dev  # Runs on http://localhost:3000
```

## 🌿 Branch Workflow

### Creating Feature Branch
```bash
git checkout dev
git pull origin dev
git checkout -b feature/your-feature-name
```

### Working & Pushing
```bash
# Make changes, then:
git add .
git commit -m "feat: your description"
git push origin feature/your-feature-name
```

### Create Pull Request
1. Go to repository on GitHub/GitLab
2. Create PR from your branch → `dev`
3. Add description and request review
4. Wait for approval, then merge

### After Merge
```bash
git checkout dev
git pull origin dev
git branch -d feature/your-feature-name 
```

