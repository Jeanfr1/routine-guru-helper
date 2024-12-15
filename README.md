# ✨ Task Manager Pro

A modern, elegant task management application built with React and Supabase. Organize your daily activities with style and efficiency.



## ✨ Features

- **📝 Intuitive Task Management**: Create, edit, and delete tasks with ease
- **🎯 Priority Levels**: Organize tasks by priority (High, Medium, Low)
- **⏰ Task Scheduling**: Set dates and times for your tasks
- **✅ Progress Tracking**: Mark tasks as complete and track your productivity
- **🎨 Modern UI**: Beautiful, responsive design with smooth animations
- **🔐 Secure Authentication**: Powered by Supabase for reliable user management

## 🚀 Quick Start

Get up and running in minutes:

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠️ Built With

- **Frontend Framework**: [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Backend & Auth**: [Supabase](https://supabase.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)

## 🌐 Deployment

### Netlify Deployment

1. **Create a New Site**
   - Visit [Netlify](https://app.netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect to your Git provider and select this repository

2. **Configure Build Settings**
   ```toml
   Build command: npm run build
   Publish directory: dist
   ```

3. **Environment Variables**
   Add these in your Netlify site settings:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

4. **Deploy**
   - Your site will be live at `your-app-name.netlify.app`
   - Set up a custom domain in Netlify settings if desired

## 🔧 Development

### Project Structure

```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── pages/         # Application pages/routes
├── types/         # TypeScript type definitions
└── utils/         # Utility functions
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Support

If you found this project helpful, please consider giving it a star ⭐️

---

Built with ❤️ URL [routineguruhelper](https://lovable.dev](https://routineguruhelper.netlify.app/login))
