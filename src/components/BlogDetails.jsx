# CodeBlogs

CodeBlogs is a React-based blogging platform that allows users to explore various blogs, navigate through categories, and view detailed blog posts with related content.

## Features
- Browse blogs by categories and tags.
- View detailed blog posts with author information, date, and content.
- Navigate between blogs using pagination.
- Dynamic routing for blogs and categories.
- Loading states to enhance user experience.

## Tech Stack
- React.js
- React Router for navigation
- Context API for state management
- Fetch API for data fetching

## Project Structure
```
src/
├── components/
│   ├── Blogs.js
│   ├── BlogDetails.js
│   ├── Header.js
│   ├── Pagination.js
├── context/
│   └── AppContext.js
├── pages/
│   ├── BlogPage.js
│   ├── CategoryPage.js
├── App.js
├── index.js
└── baseUrl.js
```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/codeblogs.git
   ```
2. Navigate to the project directory:
   ```bash
   cd codeblogs
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Usage
- Visit `http://localhost:3000/` in your browser.
- Click on a blog post to view its details along with related blogs.
- Navigate back to the previous page using the "Back" button.
- Browse blogs by categories or tags.

## API
This project uses the CodeHelp API:
```
Base URL: https://codehelp-apis.vercel.app/api/
```
Endpoints:
- `/get-blog?blogId={id}` - Fetches a single blog with related blogs.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

## Author
- GitHub: [yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourname)
