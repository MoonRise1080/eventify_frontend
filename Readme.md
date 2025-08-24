🚀 Installation
1. Clone Repository
git clone [repository-url]
cd [project-name]
git checkout dev
2. Backend Setup (Laravel)
cd backend
composer install
cp .env.example .env
# Configure database in .env file
php artisan key:generate
php artisan migrate
php artisan db:seed
php artisan serve  # Runs on http://localhost:8000
3. Frontend Setup (React)
cd frontend
npm install
npm run dev  # Runs on http://localhost:3000
🌿 Branch Workflow
Creating Feature Branch
git checkout dev
git pull origin dev
git checkout -b feature/your-feature-name
Working & Pushing
# Make changes, then:
git add .
git commit -m "feat: your description"
git push origin feature/your-feature-name
Create Pull Request
Go to repository on GitHub/GitLab
Create PR from your branch → dev
Add description and request review
Wait for approval, then merge
After Merge
git checkout dev
git pull origin dev
git branch -d feature/your-feature-name 
