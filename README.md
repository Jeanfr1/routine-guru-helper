# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/baf68edf-1fdd-4f45-8106-ca322606602e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/baf68edf-1fdd-4f45-8106-ca322606602e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Deployment Instructions

### Deploy to Netlify

1. Create a new site on Netlify:
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect to your Git provider and select this repository

2. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - These settings are already configured in the `netlify.toml` file

3. Environment Variables:
   - In your Netlify site settings, go to "Site settings" > "Environment variables"
   - Add the following environment variables:
     - `VITE_SUPABASE_URL`: Your Supabase project URL
     - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

4. Deploy:
   - Netlify will automatically deploy your site
   - Any future pushes to the main branch will trigger automatic deployments

Your site will be live at a Netlify-generated URL (e.g., `your-app-name.netlify.app`). You can customize this domain in the Netlify settings.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Supabase (Backend & Authentication)

## How can I deploy this project?

You can either:
1. Open [Lovable](https://lovable.dev/projects/baf68edf-1fdd-4f45-8106-ca322606602e) and click on Share -> Publish
2. Follow the Netlify deployment instructions above

## I want to use a custom domain - is that possible?

Yes! If you deploy with Netlify, you can set up a custom domain in your Netlify site settings. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)